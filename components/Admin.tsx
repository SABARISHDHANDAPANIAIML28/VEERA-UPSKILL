import React, { useState } from 'react';
import { Problem, UserProfile, TestResultRecord } from '../types';

interface AdminProps {
  problems: Problem[];
  onAddProblem: (problem: Problem) => void;
  users: UserProfile[];
  onCreateUser: (name: string, id: string) => { success: boolean, message: string };
  allTestResults: TestResultRecord[];
  onDeleteUser: (userId: string) => void;
  onChangeAdminId: (newId: string) => { success: boolean, message: string };
  currentUser: UserProfile;
}

type AdminTab = 'problems' | 'users' | 'results' | 'settings';

const TabButton: React.FC<{ title: string; isActive: boolean; onClick: () => void; }> = ({ title, isActive, onClick }) => (
    <button
      onClick={onClick}
      className={`px-4 py-3 text-sm font-medium transition-colors ${isActive ? 'bg-gray-800 text-white border-b-2 border-blue-500' : 'text-gray-400 hover:bg-gray-800/50'}`}
    >
      {title}
    </button>
);

const FormInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
    <input {...props} className="mt-1 block w-full bg-gray-900 border border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 sm:text-sm p-2 transition-all" />
);

const FormTextArea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => (
    <textarea {...props} className="mt-1 block w-full bg-gray-900 border border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 sm:text-sm p-2 font-mono transition-all" />
);

const FormSelect: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = (props) => (
     <select {...props} className="mt-1 block w-full bg-gray-900 border border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 sm:text-sm p-2 transition-all" />
);


const ProblemManagementTab: React.FC<Pick<AdminProps, 'problems' | 'onAddProblem'>> = ({ problems, onAddProblem }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [difficulty, setDifficulty] = useState<'Easy' | 'Medium' | 'Hard'>('Easy');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !description) {
            alert('Please fill in all fields.');
            return;
        }
        const newProblem: Problem = {
            id: Date.now(),
            title: `${problems.length + 1}. ${title}`,
            description,
            difficulty,
            examples: [],
            constraints: [],
        };
        onAddProblem(newProblem);
        setTitle('');
        setDescription('');
        setDifficulty('Easy');
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 h-full">
            <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50 flex flex-col">
                <h3 className="text-xl font-bold mb-4 flex-shrink-0">Existing Problems ({problems.length})</h3>
                <ul className="space-y-2 overflow-y-auto">
                    {[...problems].reverse().map(p => (
                        <li key={p.id} className="bg-gray-800/50 p-3 rounded-md border border-gray-700">{p.title} - <span className="font-semibold">{p.difficulty}</span></li>
                    ))}
                </ul>
            </div>
            <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50">
                <h3 className="text-xl font-bold mb-4">Add New Problem</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-300">Title</label>
                        <FormInput type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="difficulty" className="block text-sm font-medium text-gray-300">Difficulty</label>
                        <FormSelect id="difficulty" value={difficulty} onChange={e => setDifficulty(e.target.value as 'Easy' | 'Medium' | 'Hard')}>
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </FormSelect>
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-300">Description (HTML allowed)</label>
                        <FormTextArea id="description" rows={8} value={description} onChange={e => setDescription(e.target.value)} />
                    </div>
                    <button type="submit" className="px-4 py-2 rounded-md font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors">Add Problem</button>
                </form>
            </div>
        </div>
    );
};

const UserManagementTab: React.FC<Pick<AdminProps, 'users' | 'onCreateUser' | 'onDeleteUser'>> = ({ users, onCreateUser, onDeleteUser }) => {
    const [newName, setNewName] = useState('');
    const [newId, setNewId] = useState('');
    const [message, setMessage] = useState<{ text: string, type: 'success' | 'error' } | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const result = onCreateUser(newName, newId);
        if (result.success) {
            setMessage({ text: result.message, type: 'success' });
            setNewName('');
            setNewId('');
        } else {
            setMessage({ text: result.message, type: 'error' });
        }
        setTimeout(() => setMessage(null), 3000);
    };

    const handleDelete = (userToDelete: UserProfile) => {
        if (window.confirm(`Are you sure you want to delete user "${userToDelete.name}" (ID: ${userToDelete.id})? This action cannot be undone.`)) {
            onDeleteUser(userToDelete.id);
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 h-full">
            <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50 flex flex-col">
                <h3 className="text-xl font-bold mb-4 flex-shrink-0">All Users ({users.length})</h3>
                <div className="space-y-2 overflow-y-auto">
                    {users.map(user => (
                        <div key={user.id} className="bg-gray-800/50 p-3 rounded-md border border-gray-700 hover:bg-gray-700/50 transition-colors flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <img src={user.picture} alt={user.name} className="h-8 w-8 rounded-full" />
                                <div>
                                    <p className="font-semibold text-white">{user.name}</p>
                                    <p className="text-xs text-gray-400 font-mono">ID: {user.id}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${user.role === 'admin' ? 'bg-purple-800 text-purple-200' : 'bg-blue-800 text-blue-200'}`}>{user.role}</span>
                                {user.role !== 'admin' && (
                                    <button
                                        onClick={() => handleDelete(user)}
                                        className="p-1 text-red-500 hover:text-red-300 hover:bg-red-900/50 rounded-full transition-colors"
                                        aria-label={`Delete user ${user.name}`}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50">
                <h3 className="text-xl font-bold mb-4">Create New User</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="newName" className="block text-sm font-medium text-gray-300">Full Name</label>
                        <FormInput type="text" id="newName" value={newName} onChange={e => setNewName(e.target.value)} placeholder="e.g., Jane Doe"/>
                    </div>
                    <div>
                        <label htmlFor="newId" className="block text-sm font-medium text-gray-300">User ID</label>
                        <FormInput type="text" id="newId" value={newId} onChange={e => setNewId(e.target.value)} placeholder="e.g., janedoe42"/>
                    </div>
                    <button type="submit" className="px-4 py-2 rounded-md font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors">Assign User ID</button>
                    {message && <p className={`mt-2 text-sm ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>{message.text}</p>}
                </form>
            </div>
        </div>
    );
};

const TestResultsTab: React.FC<Pick<AdminProps, 'allTestResults'>> = ({ allTestResults }) => {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    return (
        <div className="p-4 overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">User Test Submissions ({allTestResults.length})</h3>
            <div className="space-y-3">
                {allTestResults.length === 0 ? <p className="text-gray-400">No tests have been submitted yet.</p> :
                [...allTestResults].reverse().map((record, index) => (
                    <div key={index} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                        <div className="flex items-center justify-between cursor-pointer" onClick={() => setExpandedId(expandedId === index ? null : index)}>
                            <div>
                                <p className="font-semibold text-white">{record.userName} <span className="text-sm text-gray-400 font-mono">({record.userId})</span></p>
                                <p className="text-xs text-gray-500">{new Date(record.testDate).toLocaleString()}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl font-bold text-blue-400">{Math.round(record.totalScore)}<span className="text-lg text-gray-500">/100</span></p>
                            </div>
                        </div>
                        {expandedId === index && (
                             <div className="mt-4 pt-4 border-t border-gray-700 space-y-3">
                                {record.results.map(res => (
                                    <div key={res.problemId}>
                                        <div className="flex justify-between items-center">
                                            <p className="font-medium text-gray-300">{res.title}</p>
                                            <p className="font-semibold text-gray-200">{Math.round(res.score)}/50</p>
                                        </div>
                                        <p className="text-xs text-gray-400">Passed {res.passedCases}/{res.totalCases} cases</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

const SettingsTab: React.FC<{
    onChangeAdminId: (newId: string) => { success: boolean, message: string };
    currentAdminId: string;
}> = ({ onChangeAdminId, currentAdminId }) => {
    const [newAdminId, setNewAdminId] = useState(currentAdminId);
    const [message, setMessage] = useState<{ text: string, type: 'success' | 'error' } | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setMessage(null);
        if (newAdminId.trim() === currentAdminId) {
            setMessage({ text: 'The new Admin ID cannot be the same as the current one.', type: 'error' });
            return;
        }
        const result = onChangeAdminId(newAdminId);
        setMessage({ text: result.message, type: result.success ? 'success' : 'error' });
        setTimeout(() => setMessage(null), 4000);
    };

    return (
        <div className="p-6 max-w-lg mx-auto mt-4">
            <h3 className="text-xl font-bold mb-4">Admin Settings</h3>
            <form onSubmit={handleSubmit} className="space-y-4 bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <div>
                    <label htmlFor="adminId" className="block text-sm font-medium text-gray-300">Admin User ID</label>
                    <FormInput
                        type="text" 
                        id="adminId" 
                        value={newAdminId} 
                        onChange={e => setNewAdminId(e.target.value)} 
                        placeholder="Enter new Admin ID"
                    />
                </div>
                <button type="submit" className="px-4 py-2 rounded-md font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                    Change Admin ID
                </button>
                {message && <p className={`mt-2 text-sm ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>{message.text}</p>}
            </form>
        </div>
    );
};

export const Admin: React.FC<AdminProps> = ({ problems, onAddProblem, users, onCreateUser, allTestResults, onDeleteUser, onChangeAdminId, currentUser }) => {
  const [activeTab, setActiveTab] = useState<AdminTab>('problems');
  
  const renderContent = () => {
    switch(activeTab) {
        case 'users':
            return <UserManagementTab users={users} onCreateUser={onCreateUser} onDeleteUser={onDeleteUser} />;
        case 'results':
            return <TestResultsTab allTestResults={allTestResults} />;
        case 'settings':
            return <SettingsTab onChangeAdminId={onChangeAdminId} currentAdminId={currentUser.id} />;
        case 'problems':
        default:
            return <ProblemManagementTab problems={problems} onAddProblem={onAddProblem} />;
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#0d1117] overflow-hidden">
      <div className="flex-shrink-0 border-b border-gray-700/50 flex bg-[#161b22]/80 backdrop-blur-sm">
        <TabButton title="Problem Management" isActive={activeTab === 'problems'} onClick={() => setActiveTab('problems')} />
        <TabButton title="User Management" isActive={activeTab === 'users'} onClick={() => setActiveTab('users')} />
        <TabButton title="Test Results" isActive={activeTab === 'results'} onClick={() => setActiveTab('results')} />
        <TabButton title="Settings" isActive={activeTab === 'settings'} onClick={() => setActiveTab('settings')} />
      </div>
      <div className="flex-grow overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
};