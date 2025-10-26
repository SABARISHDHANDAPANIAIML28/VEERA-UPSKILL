import React from 'react';
import { UserProfile } from '../types';

interface HeaderProps {
  user: UserProfile | null;
  onSignOut: () => void;
  onSubmitTest?: () => void;
  isSubmitting?: boolean;
  timerDisplay?: string | null;
}

export const Header: React.FC<HeaderProps> = ({ user, onSignOut, onSubmitTest, isSubmitting, timerDisplay }) => {
  return (
    <header className="flex-shrink-0 bg-[#161b22]/80 backdrop-blur-sm border-b border-gray-700/50 px-4 py-2 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold text-white tracking-wider">Vera Upskill</h1>
      </div>
      <div className="flex items-center space-x-4">
        {timerDisplay && (
          <div className="flex items-center space-x-2 bg-gray-700/50 px-3 py-1.5 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-mono font-semibold text-white tracking-wider">{timerDisplay}</span>
          </div>
        )}
        {onSubmitTest && (
          <button
            onClick={onSubmitTest}
            disabled={isSubmitting}
            className="px-4 py-1.5 rounded-md text-sm font-semibold bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Test'}
          </button>
        )}
        
        {user && (
          <div className="group -m-2 p-2 rounded-lg hover:bg-gray-700/40 transition-colors">
            <div className="flex items-center space-x-3">
               <img src={user.picture} alt={user.name} className="h-8 w-8 rounded-full border-2 border-gray-600 group-hover:border-blue-400 transition-colors" />
               <span className="text-sm font-medium text-gray-300 hidden sm:inline">{user.name}</span>
               {!onSubmitTest && !isSubmitting && (
                  <button onClick={onSignOut} className="text-sm text-gray-400 hover:text-white transition-colors">(Sign Out)</button>
               )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};