import React, { useState, useCallback, useMemo } from 'react';
import { ProblemDescription } from './ProblemDescription';
import { CodeEditor } from './CodeEditor';
import { OutputConsole } from './OutputConsole';
import { runCodeWithGemini, runCodeWithCustomInput } from '../services/geminiService';
import { Language, EvaluationResult, CodeSnippets, Test } from '../types';
import { DEFAULT_SNIPPETS } from '../constants';

interface TestWorkspaceProps {
    test: Test;
    solutions: { [problemId: number]: CodeSnippets };
    onSolutionsChange: React.Dispatch<React.SetStateAction<{ [problemId: number]: CodeSnippets }>>;
    isSubmitting: boolean;
}

export const TestWorkspace: React.FC<TestWorkspaceProps> = ({ test, solutions, onSolutionsChange, isSubmitting }) => {
    const [activeProblemIndex, setActiveProblemIndex] = useState(0);
    const [outputs, setOutputs] = useState<{ [problemId: number]: EvaluationResult | null }>({});
    const [isLoading, setIsLoading] = useState<{ [problemId: number]: boolean }>({});
    const [error, setError] = useState<string | null>(null);

    const [consoleTab, setConsoleTab] = useState<'results' | 'custom'>('results');
    const [customInputs, setCustomInputs] = useState<{ [problemId: number]: string }>({});
    const [customOutputs, setCustomOutputs] = useState<{ [problemId: number]: string | null }>({});
    const [isCustomRunLoading, setIsCustomRunLoading] = useState<{ [problemId: number]: boolean }>({});

    const activeProblem = test.problems[activeProblemIndex];
    const activeLanguage: Language = 'C';
    
    const problemSnippets = useMemo(() => {
        return solutions[activeProblem.id] || DEFAULT_SNIPPETS;
    }, [solutions, activeProblem.id]);

    const activeCustomInput = customInputs[activeProblem.id] || '';
    const activeCustomOutput = customOutputs[activeProblem.id] || null;
    const isCustomRunLoadingForProblem = isCustomRunLoading[activeProblem.id] || false;

    const handleCodeChange = (code: string) => {
        const newSnippets = { ...problemSnippets, [activeLanguage]: code };
        onSolutionsChange(prev => ({ ...prev, [activeProblem.id]: newSnippets }));
    };

    const handleCustomInputChange = (value: string) => {
        setCustomInputs(prev => ({ ...prev, [activeProblem.id]: value }));
    };
    
    const handleRunCode = useCallback(async () => {
        setConsoleTab('results');
        setIsLoading(prev => ({...prev, [activeProblem.id]: true}));
        setError(null);
        setOutputs(prev => ({ ...prev, [activeProblem.id]: null}));
        try {
            const code = solutions[activeProblem.id]?.[activeLanguage] || DEFAULT_SNIPPETS[activeLanguage];
            const result = await runCodeWithGemini(activeProblem, code, activeLanguage);
            setOutputs(prev => ({ ...prev, [activeProblem.id]: result}));
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred.');
        } finally {
            setIsLoading(prev => ({...prev, [activeProblem.id]: false}));
        }
    }, [activeProblem, solutions, activeLanguage]);

    const handleCustomRun = useCallback(async () => {
        setIsCustomRunLoading(prev => ({...prev, [activeProblem.id]: true}));
        setCustomOutputs(prev => ({...prev, [activeProblem.id]: null}));
        try {
            const code = solutions[activeProblem.id]?.[activeLanguage] || DEFAULT_SNIPPETS[activeLanguage];
            const result = await runCodeWithCustomInput(code, activeCustomInput);
            setCustomOutputs(prev => ({...prev, [activeProblem.id]: result}));
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
            setCustomOutputs(prev => ({...prev, [activeProblem.id]: errorMessage}));
        } finally {
            setIsCustomRunLoading(prev => ({...prev, [activeProblem.id]: false}));
        }
    }, [activeProblem, solutions, activeLanguage, activeCustomInput]);

    return (
        <div className="flex flex-col h-full bg-[#0d1117] rounded-lg overflow-hidden">
            <div className="flex-shrink-0 border-b border-gray-700/50 flex bg-[#161b22]/80 backdrop-blur-sm">
                {test.problems.map((p, index) => (
                    <button
                        key={p.id}
                        onClick={() => setActiveProblemIndex(index)}
                        className={`px-4 py-3 text-sm font-medium transition-colors ${activeProblemIndex === index ? 'bg-gray-800/50 text-white border-b-2 border-blue-500' : 'text-gray-400 hover:bg-gray-800/30'}`}
                    >
                        Problem {index + 1}
                    </button>
                ))}
            </div>
            <div className="flex-grow flex flex-col md:flex-row overflow-hidden">
                <div className="w-full md:w-2/5 h-1/2 md:h-full overflow-y-auto border-r border-gray-700/50">
                    <ProblemDescription 
                      problem={activeProblem} 
                    />
                </div>
                <div className="flex-grow flex flex-col w-full md:w-3/5 h-1/2 md:h-full overflow-hidden">
                    <CodeEditor
                        code={problemSnippets[activeLanguage]}
                        onCodeChange={handleCodeChange}
                        onRun={handleRunCode}
                        isLoading={isLoading[activeProblem.id] || false}
                        isSubmitting={isSubmitting}
                    />
                    <OutputConsole 
                        output={outputs[activeProblem.id] || null} 
                        isLoading={isLoading[activeProblem.id] || false} 
                        error={error} 
                        activeTab={consoleTab}
                        onTabChange={setConsoleTab}
                        customInput={activeCustomInput}
                        onCustomInputChange={handleCustomInputChange}
                        customOutput={activeCustomOutput}
                        isCustomRunLoading={isCustomRunLoadingForProblem}
                        onCustomRun={handleCustomRun}
                    />
                </div>
            </div>
        </div>
    );
};
