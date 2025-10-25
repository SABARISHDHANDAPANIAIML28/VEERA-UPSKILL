import React from 'react';
import { EvaluationResult } from '../types';

interface OutputConsoleProps {
  output: EvaluationResult | null;
  isLoading: boolean;
  error: string | null;
}

const ResultChip: React.FC<{ result: 'Accepted' | 'Rejected' }> = ({ result }) => {
  const isAccepted = result === 'Accepted';
  return (
    <span className={`px-3 py-1 text-sm font-bold rounded-full ${isAccepted ? 'bg-green-800 text-green-200' : 'bg-red-800 text-red-200'}`}>
      {result}
    </span>
  );
};

export const OutputConsole: React.FC<OutputConsoleProps> = ({ output, isLoading, error }) => {
  const renderContent = () => {
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
      return <div className="p-4 text-gray-500">Run code to see the output here.</div>;
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

  return (
    <div className="flex-shrink-0 h-1/3 md:h-2/5 bg-[#161b22]/80 backdrop-blur-sm border-t border-gray-700/50 overflow-y-auto">
      <div className="px-4 py-2 border-b border-gray-700/50">
        <h3 className="text-md font-semibold text-gray-200">Console</h3>
      </div>
      <div className="h-full">{renderContent()}</div>
    </div>
  );
};