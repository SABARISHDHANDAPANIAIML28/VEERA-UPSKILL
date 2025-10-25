import React from 'react';
import { UserProfile } from '../types';

interface HeaderProps {
  user: UserProfile | null;
  onSignOut: () => void;
  onSubmitTest?: () => void;
  isSubmitting?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ user, onSignOut, onSubmitTest, isSubmitting }) => {
  return (
    <header className="flex-shrink-0 bg-[#161b22]/80 backdrop-blur-sm border-b border-gray-700/50 px-4 py-2 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
           <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-blue-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12.707 2.293a1 1 0 00-1.414 0L7 6.586V3a1 1 0 00-2 0v5a1 1 0 001 1h5a1 1 0 000-2H8.414l4.293-4.293a1 1 0 000-1.414zM11 18a1 1 0 100-2h2.586l-4.293-4.293a1 1 0 00-1.414 1.414L12.172 17H9a1 1 0 100 2h5a1 1 0 001-1v-5a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 10-1.414 1.414L11.586 18H11z" />
            </svg>
            <h1 className="text-xl font-bold text-gray-200">Veera Upskill</h1>
        </div>
      </div>
      <div className="flex items-center space-x-4">
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