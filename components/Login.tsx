import React, { useState } from 'react';

interface LoginProps {
  onLogin: (userId: string, requestedRole: 'admin' | 'user', password?: string) => void;
  loginError: string | null;
}

export const Login: React.FC<LoginProps> = ({ onLogin, loginError }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [loginMode, setLoginMode] = useState<'user' | 'admin'>('user');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginMode === 'admin') {
      onLogin(userId, loginMode, password);
    } else {
      onLogin(userId, loginMode);
    }
  };

  const toggleMode = () => {
    setUserId('');
    setPassword('');
    setLoginMode(prev => (prev === 'user' ? 'admin' : 'user'));
  };

  return (
    <div className="flex-grow flex flex-col items-center justify-center bg-[#0d1117] text-white p-4 relative">
      <div className="absolute top-4 right-4">
        <button
          onClick={toggleMode}
          className="px-3 py-1.5 rounded-md text-xs font-medium bg-gray-700 text-gray-200 hover:bg-gray-600 transition-colors"
        >
          {loginMode === 'user' ? 'Admin Login' : 'User Login'}
        </button>
      </div>
      <div className="w-full max-w-sm bg-gray-800/50 rounded-2xl shadow-2xl p-8 text-center border border-gray-700">
        <div className="flex justify-center mb-6">
           <h1 className="text-4xl font-bold text-blue-400 tracking-wide">Vera Upskill</h1>
        </div>
        <h1 className="text-3xl font-bold mb-2 text-gray-100">{loginMode === 'user' ? 'Welcome!' : 'Admin Portal'}</h1>
        <p className="text-gray-400 mb-8">{loginMode === 'user' ? 'Please enter your User ID to continue.' : 'Please enter your Admin ID and Password.'}</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="userId" className="sr-only">User ID</label>
            <input
              id="userId"
              name="userId"
              type="text"
              autoComplete="off"
              required
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-600 bg-gray-900 placeholder-gray-500 text-gray-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder={loginMode === 'user' ? "Enter User ID (e.g., veera)" : "Enter Admin ID"}
            />
          </div>

          {loginMode === 'admin' && (
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-600 bg-gray-900 placeholder-gray-500 text-gray-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Enter Admin Password"
              />
            </div>
          )}

          {loginError && (
              <div className="bg-red-900/50 border border-red-700 text-red-300 text-sm rounded-lg p-3 w-full">
                  <p>{loginError}</p>
              </div>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900 transition-colors mt-2"
            >
              {loginMode === 'user' ? 'Sign In' : 'Admin Sign In'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};