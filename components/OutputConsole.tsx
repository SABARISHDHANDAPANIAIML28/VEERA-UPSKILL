import React from 'react';
import { EvaluationResult } from '../types';

interface OutputConsoleProps {
  output: EvaluationResult | null;
  isLoading: boolean;
  error: string | null;
  activeTab: 'results' | 'custom';
  onTabChange: (tab: 'results' | 'custom') => void;
  customInput: string;
  onCustomInputChange: (value: string) => void;
  customOutput: string | null;
  isCustomRunLoading: boolean;
  onCustomRun: () => void;
}

const ResultChip: React.FC<{ result: 'Accepted' | 'Rejected' }> = ({ result }) => {
  const isAccepted = result === 'Accepted';
  return (
    <span className={`px-3 py-1 text-sm font-bold rounded-full ${isAccepted ? 'bg-green-800 text-green-200' : 'bg-red-800 text-red-200'}`}>
      {result}
    </span>
  );
};

const TabButton: React.FC<{ title: string, isActive: boolean, onClick: () => void }> = ({ title, isActive, onClick }) => (
    <button onClick={onClick} className={`px-4 py-1 text-xs font-semibold rounded-md transition-colors ${isActive ? 'text-white bg-blue-600' : 'text-gray-300 hover:bg-gray-700/60'}`}>
      {title}
    </button>
);


export const OutputConsole: React.FC<OutputConsoleProps> = ({ 
    output, 
    isLoading, 
    error,
    activeTab,
    onTabChange,
    customInput,
    onCustomInputChange,
    customOutput,
    isCustomRunLoading,
    onCustomRun
}) => {

  const renderResultsContent = () => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
          <p className="ml-3 text-gray-400">Evaluating your code...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="p-4 text-red-400">
          <h3 className="font-bold mb-2">Error</h3>
          <p className="font-mono bg-red-900/50 p-2 rounded">{error}</p>
        </div>
      );
    }

    if (!output) {
      return <div className="p-4 text-gray-500">Run code to see the evaluation results here.</div>;
    }

    const passedCases = output.testCases.filter(tc => tc.result === 'Passed').length;
    const totalCases = output.testCases.length || 5;
    const score = (passedCases / totalCases) * 50;

    return (
      <div className="p-4 space-y-4">
        <div className="flex items-start justify-between">
            <div className="flex items-center space-x-4">
                <ResultChip result={output.overallResult} />
                <p className="text-lg font-medium text-gray-200">{output.summary}</p>
            </div>
            <div className="text-right flex-shrink-0 ml-4">
                <p className="font-bold text-xl text-white">{Math.round(score)}<span className="text-lg text-gray-500">/50</span></p>
                <p className="text-xs text-gray-400">Unofficial Score</p>
            </div>
        </div>

        {output.compilationError && (
          <div>
            <h3 className="font-bold text-red-400 mb-1">Error</h3>
            <pre className="bg-red-900/50 p-3 rounded font-mono text-sm text-red-300 overflow-x-auto">{output.compilationError}</pre>
          </div>
        )}

        <div className="space-y-2">
          {output.testCases.map((tc) => (
            <div key={tc.caseNumber} className="bg-gray-800/70 p-3 rounded-lg border border-gray-700/50">
              <div className="flex items-center justify-between mb-2">
                <p className="font-semibold text-gray-300">Case {tc.caseNumber}</p>
                <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${tc.result === 'Passed' ? 'bg-green-800 text-green-300' : 'bg-red-800 text-red-300'}`}>{tc.result}</span>
              </div>
              <div className="font-mono text-xs space-y-1 text-gray-400">
                <p><span className="font-semibold">Input:</span> {tc.input}</p>
                <p><span className="font-semibold">Output:</span> {tc.actualOutput}</p>
                <p><span className="font-semibold">Expected:</span> {tc.expectedOutput}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  const renderCustomInputContent = () => {
    return (
        <div className="p-4 h-full flex flex-col space-y-2">
            <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-1">
                    <label htmlFor="custom-input" className="text-sm font-medium text-gray-300">Standard Input</label>
                    <button
                        onClick={onCustomRun}
                        disabled={isCustomRunLoading}
                        className="px-3 py-1 rounded-md text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                        {isCustomRunLoading ? 'Running...' : 'Run'}
                    </button>
                </div>
                <textarea
                    id="custom-input"
                    value={customInput}
                    onChange={(e) => onCustomInputChange(e.target.value)}
                    className="w-full flex-grow bg-gray-900/70 border border-gray-600 rounded-md shadow-sm p-2 font-mono text-sm resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter your custom input here..."
                />
            </div>
             <div className="flex-1 flex flex-col">
                <label className="text-sm font-medium text-gray-300 mb-1">Output</label>
                <pre className="w-full flex-grow bg-gray-900/70 border border-gray-600 rounded-md p-2 font-mono text-sm overflow-auto">
                    {isCustomRunLoading ? <span className="text-gray-500">Executing...</span> : (customOutput ?? <span className="text-gray-500">Output will be shown here.</span>)}
                </pre>
            </div>
        </div>
    );
  };


  return (
    <div className="flex-shrink-0 h-1/3 md:h-2/5 flex flex-col bg-[#161b22]/80 backdrop-blur-sm border-t border-gray-700/50 overflow-hidden">
      <div className="px-4 py-2 border-b border-gray-700/50 flex items-center">
        <h3 className="text-md font-semibold text-gray-200 mr-4">Console</h3>
         <div className="flex items-center bg-gray-900/50 rounded-md p-0.5 space-x-1">
            <TabButton title="Test Results" isActive={activeTab === 'results'} onClick={() => onTabChange('results')} />
            <TabButton title="Custom Input" isActive={activeTab === 'custom'} onClick={() => onTabChange('custom')} />
        </div>
      </div>
      <div className="flex-grow overflow-y-auto">
        {activeTab === 'results' && renderResultsContent()}
        {activeTab === 'custom' && renderCustomInputContent()}
      </div>
    </div>
  );
};
