
import React from 'react';
import { Problem } from '../types';

interface ProblemDescriptionProps {
  problem: Problem;
  onGetHint: () => void;
  isHintLoading: boolean;
  hint: string | null;
}

const DifficultyChip: React.FC<{ difficulty: 'Easy' | 'Medium' | 'Hard' }> = ({ difficulty }) => {
  const colorClasses = {
    Easy: 'bg-green-800/50 text-green-300 border-green-700/50',
    Medium: 'bg-yellow-800/50 text-yellow-300 border-yellow-700/50',
    Hard: 'bg-red-800/50 text-red-300 border-red-700/50',
  };

  return (
    <span className={`text-sm font-medium px-3 py-1 rounded-full border ${colorClasses[difficulty]}`}>
      {difficulty}
    </span>
  );
};

export const ProblemDescription: React.FC<ProblemDescriptionProps> = ({ problem, onGetHint, isHintLoading, hint }) => {
  return (
    <div className="p-4 bg-transparent h-full text-gray-300">
      <h2 className="text-2xl font-semibold text-gray-100 mb-2">{problem.title}</h2>
      <div className="mb-6 flex items-center justify-between">
        <DifficultyChip difficulty={problem.difficulty} />
         <button 
          onClick={onGetHint} 
          disabled={isHintLoading}
          className="px-3 py-1 text-xs font-semibold bg-gray-700 text-gray-200 rounded-md hover:bg-gray-600 transition-colors disabled:opacity-50"
        >
          {isHintLoading ? 'Getting Hint...' : 'Get a Hint ✨'}
        </button>
      </div>

      {hint && (
        <div className="mb-4 bg-blue-900/50 p-4 rounded-lg border border-blue-700/50">
           <p className="font-semibold mb-1 text-blue-300">💡 Hint</p>
           <p className="text-sm text-blue-200">{hint}</p>
        </div>
      )}

      <div className="prose prose-invert prose-sm max-w-none mb-6 text-gray-400" dangerouslySetInnerHTML={{ __html: problem.description }} />

      {problem.examples.map((example, index) => (
        <div key={index} className="mb-4 bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
          <p className="font-semibold mb-1 text-gray-200">Example {index + 1}:</p>
          <div className="bg-gray-900/70 p-3 rounded font-mono text-sm">
            <p><strong className="font-semibold text-gray-400">Input:</strong> {example.input}</p>
            <p><strong className="font-semibold text-gray-400">Output:</strong> {example.output}</p>
            {example.explanation && <p><strong className="font-semibold text-gray-400">Explanation:</strong> {example.explanation}</p>}
          </div>
        </div>
      ))}
      
      <div>
        <h3 className="font-semibold mb-2 text-gray-200">Constraints:</h3>
        <ul className="list-disc list-inside space-y-1 bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
          {problem.constraints.map((constraint, index) => (
            <li key={index} className="font-mono text-sm" dangerouslySetInnerHTML={{ __html: constraint }}/>
          ))}
        </ul>
      </div>
    </div>
  );
};