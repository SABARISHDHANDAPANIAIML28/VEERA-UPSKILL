import React from 'react';
import { Role } from '../types';

interface RoleSelectionProps {
  onSelectRole: (role: Role) => void;
}

const RoleButton: React.FC<{ onClick: () => void; title: string; children: React.ReactNode; }> = ({ onClick, title, children }) => (
    <button
      onClick={onClick}
      className="group w-64 h-40 flex flex-col items-center justify-center rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:bg-blue-600/50 hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
    >
        <div className="text-blue-400 group-hover:text-white transition-colors duration-300">
            {children}
        </div>
        <p className="mt-4 text-xl font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">
            {title}
        </p>
    </button>
);

export const RoleSelection: React.FC<RoleSelectionProps> = ({ onSelectRole }) => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-2">Welcome to Veera Upskill</h1>
      <p className="text-gray-400 mb-12">Please select your role to continue.</p>
      <div className="flex flex-col md:flex-row gap-8">
        <RoleButton onClick={() => onSelectRole('user')} title="I am a User">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        </RoleButton>
        <RoleButton onClick={() => onSelectRole('admin')} title="I am an Admin">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        </RoleButton>
      </div>
    </div>
  );
};