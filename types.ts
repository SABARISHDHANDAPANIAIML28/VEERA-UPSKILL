// FIX: Removed self-referential import of 'Problem' and 'FinalResult' which was causing a conflict with local declarations.

export type Language = 'C';

export type Level = 'Loops' | 'Arrays' | 'Strings' | 'Functions';

export interface CodeSnippets {
  C: string;
}

export interface ProblemExample {
  input: string;
  output: string;
  explanation?: string;
}

export interface Problem {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  examples: ProblemExample[];
  constraints: string[];
  level: Level;
}

export interface TestCaseResult {
  caseNumber: number;
  input: string;
  expectedOutput: string;
  actualOutput: string;
  result: 'Passed' | 'Failed';
}

export interface EvaluationResult {
  overallResult: 'Accepted' | 'Rejected';
  testCases: TestCaseResult[];
  compilationError: string;
  summary: string;
}


// New Types for Test Platform
export interface Test {
  problems: [Problem, Problem];
  solutions: {
    [problemId: number]: CodeSnippets
  };
  endTime: number;
  level: Level;
}

export interface FinalResult {
  problemId: number;
  title: string;
  passedCases: number;
  totalCases: number;
  score: number;
}

export interface TestResultRecord {
  userId: string;
  userName: string;
  testDate: number; // timestamp
  totalScore: number;
  results: FinalResult[];
  level: Level;
}

// User Profile for ID-based login
// FIX: Exported the 'Role' type to resolve an import error in `RoleSelection.tsx`.
export type Role = 'admin' | 'user';

export interface UserProfile {
    id: string;
    name: string;
    picture: string;
    role: Role;
}
