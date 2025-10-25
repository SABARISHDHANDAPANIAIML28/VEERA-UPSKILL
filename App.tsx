import React, { useState, useCallback, useEffect } from 'react';
import { Header } from './components/Header';
import { Login } from './components/Login';
import { Admin } from './components/Admin';
import { TestWorkspace } from './components/TestWorkspace';
import { Problem, Test, FinalResult, CodeSnippets, Language, UserProfile, TestResultRecord } from './types';
import { ALL_PROBLEMS, DEFAULT_SNIPPETS, PREDEFINED_USERS, ADMIN_PASSWORD } from './constants';
import { runCodeWithGemini } from './services/geminiService';

const App: React.FC = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  
  // Refactored state initialization to be synchronous from localStorage
  const [problems, setProblems] = useState<Problem[]>(() => {
    try {
      const savedProblems = localStorage.getItem('leetcode-problems');
      return savedProblems ? JSON.parse(savedProblems) : ALL_PROBLEMS;
    } catch (error) {
        console.error("Failed to load problems from localStorage", error);
        return ALL_PROBLEMS;
    }
  });

  const [users, setUsers] = useState<UserProfile[]>(() => {
    try {
      const savedUsers = localStorage.getItem('app-users');
      return savedUsers ? JSON.parse(savedUsers) : PREDEFINED_USERS;
    } catch (error) {
        console.error("Failed to load users from localStorage", error);
        return PREDEFINED_USERS;
    }
  });

  const [allTestResults, setAllTestResults] = useState<TestResultRecord[]>(() => {
    try {
      const savedResults = localStorage.getItem('app-test-results');
      return savedResults ? JSON.parse(savedResults) : [];
    } catch (error) {
        console.error("Failed to load test results from localStorage", error);
        return [];
    }
  });

  const [currentTest, setCurrentTest] = useState<Test | null>(null);
  const [solutions, setSolutions] = useState<{ [problemId: number]: CodeSnippets }>({});
  const [lastScore, setLastScore] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  
  // Refactored data persistence into useEffect hooks for reliability
  useEffect(() => {
    try {
      localStorage.setItem('leetcode-problems', JSON.stringify(problems));
    } catch (error) {
      console.error("Failed to save problems to localStorage", error);
    }
  }, [problems]);

  useEffect(() => {
    try {
      localStorage.setItem('app-users', JSON.stringify(users));
    } catch (error) {
      console.error("Failed to save users to localStorage", error);
    }
  }, [users]);
  
  useEffect(() => {
    try {
      localStorage.setItem('app-test-results', JSON.stringify(allTestResults));
    } catch (error) {
      console.error("Failed to save test results to localStorage", error);
    }
  }, [allTestResults]);
  
  const handleLogin = useCallback((userId: string, requestedRole: 'admin' | 'user', password?: string) => {
    setLastScore(null);
    setLoginError(null);
    if (!userId) {
        setLoginError("User ID cannot be empty.");
        return;
    }
    const foundUser = users.find(u => u.id.toLowerCase() === userId.trim().toLowerCase());
    
    if (foundUser) {
        if (requestedRole === 'admin') {
            if (foundUser.role !== 'admin') {
                setLoginError("Access Denied. This user ID does not have admin privileges.");
                return;
            }
            if (password !== ADMIN_PASSWORD) {
                setLoginError("Invalid Admin Password.");
                return;
            }
        }
        setUser(foundUser);
    } else {
        setLoginError("Invalid User ID. Please try again.");
    }
  }, [users]);

  const handleSignOut = useCallback(() => {
      setUser(null);
      setCurrentTest(null);
      setLastScore(null);
      setLoginError(null);
  }, []);

  const handleAddProblem = useCallback((newProblem: Problem) => {
    setProblems(prev => [...prev, newProblem]);
  }, []);

  const handleCreateUser = useCallback((name: string, id: string): { success: boolean, message: string } => {
    if (!name.trim() || !id.trim()) {
        return { success: false, message: 'Name and User ID cannot be empty.' };
    }
    const existingUser = users.find(u => u.id.toLowerCase() === id.trim().toLowerCase());
    if (existingUser) {
        return { success: false, message: 'User ID already exists.' };
    }
    
    const newUser: UserProfile = {
        id: id.trim(),
        name: name.trim(),
        picture: `https://api.dicebear.com/8.x/initials/svg?seed=${name.trim().replace(/\s/g, '_')}`,
        role: 'user',
    };

    setUsers(prev => [...prev, newUser]);

    return { success: true, message: 'User created successfully!' };
  }, [users]);

  const handleDeleteUser = useCallback((userIdToDelete: string) => {
    setUsers(prevUsers => prevUsers.filter(u => u.id !== userIdToDelete));
  }, []);

  const handleChangeAdminId = useCallback((newAdminId: string): { success: boolean, message: string } => {
    if (!newAdminId.trim()) {
        return { success: false, message: 'New Admin ID cannot be empty.' };
    }
    const trimmedId = newAdminId.trim().toLowerCase();

    const existingUser = users.find(u => u.id.toLowerCase() === trimmedId);
    if (existingUser && existingUser.role !== 'admin') {
        return { success: false, message: 'This User ID is already taken by another user.' };
    }

    let adminUpdated = false;
    const updatedUsers = users.map(u => {
        if (u.role === 'admin') {
            adminUpdated = true;
            return { ...u, id: newAdminId.trim() };
        }
        return u;
    });

    if (!adminUpdated) {
        return { success: false, message: 'Could not find an admin user to update.' };
    }

    setUsers(updatedUsers);
    
    setUser(prev => {
        if (prev && prev.role === 'admin') {
            return { ...prev, id: newAdminId.trim() };
        }
        return prev;
    });

    return { success: true, message: `Admin ID successfully changed to "${newAdminId.trim()}".` };
  }, [users]);

  const handleStartTest = useCallback(() => {
    const shuffled = [...problems].sort(() => 0.5 - Math.random());
    const selectedProblems = shuffled.slice(0, 2) as [Problem, Problem];
    
    if(selectedProblems.length < 2) {
        alert("Not enough problems to start a test. Admin needs to add at least 2 problems.");
        return;
    }
    
    const newTest: Test = {
        problems: selectedProblems,
        solutions: {}
    };
    setCurrentTest(newTest);
    setSolutions({});
    setLastScore(null);
  }, [problems]);
  
  const handleEndTest = useCallback(async () => {
    if (!currentTest || !user) return;

    setIsSubmitting(true);
    try {
      const results: FinalResult[] = [];

      for (const problem of currentTest.problems) {
          const lang: Language = 'C';
          const code = solutions[problem.id]?.[lang] || DEFAULT_SNIPPETS[lang];
          try {
              const result = await runCodeWithGemini(problem, code, lang);
              const passedCases = result.testCases.filter(tc => tc.result === 'Passed').length;
              const totalCases = result.testCases.length || 5;
              results.push({
                  problemId: problem.id,
                  title: problem.title,
                  passedCases,
                  totalCases,
                  score: (passedCases / totalCases) * 50
              });
          } catch (e) {
              results.push({
                  problemId: problem.id,
                  title: problem.title,
                  passedCases: 0,
                  totalCases: 5,
                  score: 0
              });
          }
      }
      
      const totalScore = results.reduce((sum, r) => sum + r.score, 0);
      const newRecord: TestResultRecord = {
          userId: user.id,
          userName: user.name,
          testDate: Date.now(),
          totalScore,
          results,
      };

      setAllTestResults(prev => [...prev, newRecord]);
      
      setLastScore(Math.round(totalScore));
      setCurrentTest(null);
    } catch (error) {
        console.error("An unexpected error occurred during test submission:", error);
        alert("An unexpected error occurred during submission. Please try again.");
    } finally {
        setIsSubmitting(false);
    }
  }, [currentTest, user, solutions]);

  const renderContent = () => {
    const ScoreCircle = ({ score }: { score: number }) => {
        const [displayScore, setDisplayScore] = useState(0);
        const size = 200;
        const strokeWidth = 16;
        const radius = (size - strokeWidth) / 2;
        const circumference = radius * 2 * Math.PI;
        const finalOffset = circumference - (score / 100) * circumference;
        const [circleOffset, setCircleOffset] = useState(circumference);
      
        useEffect(() => {
            let animationFrameId: number;
            const startTime = performance.now();
            const duration = 1200;
        
            const animate = (currentTime: number) => {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1);
                setDisplayScore(Math.floor(progress * score));
                if (progress < 1) {
                    animationFrameId = requestAnimationFrame(animate);
                } else {
                    setDisplayScore(score);
                }
            };
        
            animationFrameId = requestAnimationFrame(animate);

            const timer = setTimeout(() => setCircleOffset(finalOffset), 100);
        
            return () => {
                cancelAnimationFrame(animationFrameId);
                clearTimeout(timer);
            };
        }, [score, finalOffset, circumference]);
      
        const scoreColorClass = score >= 70 ? 'text-green-400' : score >= 40 ? 'text-yellow-400' : 'text-red-400';
        const circleColorClass = score >= 70 ? 'stroke-green-500' : score >= 40 ? 'stroke-yellow-500' : 'stroke-red-500';
      
        return (
            <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
                <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="transform -rotate-90">
                    <circle cx={size/2} cy={size/2} r={radius} strokeWidth={strokeWidth} stroke="currentColor" className="text-gray-700" fill="transparent"/>
                    <circle
                        cx={size/2} cy={size/2} r={radius}
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeLinecap="round"
                        stroke="currentColor"
                        className={circleColorClass}
                        style={{
                            strokeDashoffset: circleOffset,
                            transition: 'stroke-dashoffset 1.2s cubic-bezier(0.65, 0, 0.35, 1)',
                        }}
                        fill="transparent"
                    />
                </svg>
                <div className={`absolute inset-0 flex flex-col items-center justify-center ${scoreColorClass}`}>
                    <span className="text-5xl font-bold tracking-tight">{displayScore}</span>
                    <span className="text-lg text-gray-500 font-medium">/ 100</span>
                </div>
            </div>
        );
    };

    if (lastScore !== null && currentTest === null) {
        return (
            <div className="flex-grow flex flex-col items-center justify-center text-white p-8">
                <div className="max-w-md w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-8 text-center flex flex-col items-center">
                    <h2 className="text-4xl font-bold mb-2 text-blue-400">Test Complete!</h2>
                    <p className="text-gray-400 mb-8">Here is your final score. You can sign out when you are ready.</p>
                    
                    <div className="my-6">
                       <ScoreCircle score={lastScore} />
                    </div>

                    <button
                        onClick={handleSignOut}
                        className="mt-8 w-full px-8 py-3 rounded-md text-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors transform hover:scale-105"
                    >
                        Sign Out
                    </button>
                </div>
            </div>
        );
    }
    
    if (!user) {
        return <Login onLogin={handleLogin} loginError={loginError} />;
    }
  
    if (isSubmitting) {
        return (
            <div className="flex-grow flex flex-col items-center justify-center text-white p-8">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-400 mb-4"></div>
                <h2 className="text-2xl font-semibold">Submitting your test...</h2>
                <p className="text-gray-400">Final evaluations are in progress. Please wait.</p>
            </div>
        );
    }
    
    if (user.role === 'admin') {
      return <Admin 
                problems={problems} 
                onAddProblem={handleAddProblem}
                users={users}
                onCreateUser={handleCreateUser}
                allTestResults={allTestResults}
                onDeleteUser={handleDeleteUser}
                onChangeAdminId={handleChangeAdminId}
                currentUser={user}
             />;
    }

    if (user.role === 'user') {
      if (currentTest) {
        return <TestWorkspace 
                  test={currentTest} 
                  solutions={solutions}
                  onSolutionsChange={setSolutions}
                  isSubmitting={isSubmitting}
               />;
      } else {
        return (
          <div className="flex-grow flex flex-col items-center justify-center text-white">
            <h2 className="text-2xl mb-4">Ready to start the test?</h2>
            <p className="text-gray-400 mb-8">You will have to complete 2 questions.</p>
            <button
              onClick={handleStartTest}
              className="px-8 py-3 rounded-md text-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors transform hover:scale-105"
            >
              Start Test
            </button>
          </div>
        );
      }
    }
    
    return null;
  };

  return (
    <div className="flex flex-col h-screen font-sans bg-transparent text-gray-300">
      <Header 
        user={user}
        onSignOut={handleSignOut}
        onSubmitTest={currentTest ? handleEndTest : undefined}
        isSubmitting={isSubmitting}
      />
      <main className="flex-grow flex flex-col overflow-hidden">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;