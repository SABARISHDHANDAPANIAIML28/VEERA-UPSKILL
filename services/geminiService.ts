import { GoogleGenAI, Type } from "@google/genai";
import { Problem, Language, EvaluationResult, TestCaseResult } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    overallResult: {
      type: Type.STRING,
      description: 'Must be "Accepted" or "Rejected".',
    },
    testCases: {
      type: Type.ARRAY,
      description: 'An array of exactly 5 test case results.',
      items: {
        type: Type.OBJECT,
        properties: {
          caseNumber: { type: Type.INTEGER },
          input: { type: Type.STRING },
          expectedOutput: { type: Type.STRING },
          actualOutput: { type: Type.STRING },
          result: { type: Type.STRING, description: '"Passed" or "Failed".' },
        },
        required: ['caseNumber', 'input', 'expectedOutput', 'actualOutput', 'result'],
      },
    },
    compilationError: {
      type: Type.STRING,
      description: 'Any compilation or runtime errors. Should be an empty string if there are no errors.',
    },
    summary: {
      type: Type.STRING,
      description: 'A brief one-sentence summary of the evaluation, explaining the reason for rejection if applicable.',
    },
  },
  required: ['overallResult', 'testCases', 'compilationError', 'summary'],
};


export const runCodeWithGemini = async (problem: Problem, code: string, language: Language): Promise<EvaluationResult> => {
  const model = 'gemini-2.5-pro';
  
  const systemInstruction = `You are an AI code judge that perfectly emulates the **OnlineGDB C compiler**. Your task is to evaluate a user's C code for a given programming problem. Your primary goal is accuracy.
  1.  **Analyze and Understand**: First, deeply analyze the provided problem description, examples, and constraints to fully understand the requirements.
  2.  **Generate Test Cases**: Based on your understanding, you must devise **exactly 5 comprehensive test cases**. These must cover the provided examples, key edge cases (e.g., empty inputs, single-element arrays, large numbers, duplicates, specific constraints), and general cases that test the core logic.
  3.  **Determine Correct Outputs**: For each test case you generate, you must independently and meticulously determine the **correct expected output** by solving the problem based *only* on the problem description. This is a critical step for accuracy. Do not derive the expected output from the user's code.
  4.  **Simulate Execution**: Emulate the compilation and execution of the user's C code against each of your test cases. Strictly adhere to the behavior of a standard GCC compiler. Assume standard C libraries like <stdio.h>, <stdlib.h>, and <string.h> are available.
  5.  **Compare and Evaluate**: Rigorously compare the code's actual output against the correct expected output you determined in step 3. Mark each case as "Passed" or "Failed".
  6.  **Handle Errors**: If the code fails to compile or has runtime errors, populate the 'compilationError' field with a GCC-like error message. In this scenario, all 5 test cases must be marked as 'Failed' and the 'overallResult' set to 'Rejected'.
  7.  **CRITICAL RULE:** Determine the 'overallResult'. It MUST be "Accepted" if and ONLY IF all 5 test cases have a result of "Passed". If even one test case fails, the 'overallResult' MUST be "Rejected".
  8.  **Summarize**: Provide a concise, one-sentence 'summary' explaining the overall result. If rejected, state why (e.g., "Rejected due to failing 2 out of 5 test cases.").
  9.  **Format Response**: Return the final evaluation in the specified JSON format. The 'testCases' array **must contain exactly 5 entries**.`;

  const prompt = `
    Problem:
    Title: ${problem.title}
    Description: ${problem.description.replace(/<[^>]*>?/gm, '')}
    Examples: ${JSON.stringify(problem.examples, null, 2)}
    Constraints: ${JSON.stringify(problem.constraints, null, 2)}

    User's Code (C):
    \`\`\`c
    ${code}
    \`\`\`
  `;
  
  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.2,
      },
    });

    const jsonString = response.text.trim();
    const result: EvaluationResult = JSON.parse(jsonString);

    if (!result.overallResult || !Array.isArray(result.testCases)) {
      throw new Error("Invalid response format from Gemini API.");
    }
    
    // Double-check the Gemini evaluation for consistency.
    const allPassed = result.testCases.length > 0 && result.testCases.every(tc => tc.result === 'Passed');
    const isAccepted = result.overallResult === 'Accepted';

    if (allPassed !== isAccepted) {
        console.warn(`Gemini API consistency check failed. All cases passed: ${allPassed}, but overallResult was: ${result.overallResult}. Correcting...`);
        result.overallResult = allPassed ? 'Accepted' : 'Rejected';
        if (allPassed) {
            result.summary = 'Accepted after manual verification, as all test cases passed.';
        } else {
            const failedCount = result.testCases.filter(tc => tc.result !== 'Passed').length;
            result.summary = `Rejected after manual verification, as ${failedCount} test case(s) failed.`;
        }
    }
    
    if (result.testCases.length !== 5) {
        console.warn(`Gemini API did not return 5 test cases, it returned ${result.testCases.length}.`);
    }

    return result;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to evaluate the code. The AI judge might be busy. Please try again.");
  }
};

export const runCodeWithCustomInput = async (code: string, customInput: string): Promise<string> => {
  const model = 'gemini-2.5-flash';

  const systemInstruction = `You are a C code execution engine. You will be given a C program and some standard input. Your task is to execute the code with the given input and return ONLY the raw text that would be printed to standard output. If the code has compilation or runtime errors, return the error message instead of the output. Do not add any explanation or formatting.`;

  const prompt = `
    C Code:
    \`\`\`c
    ${code}
    \`\`\`

    Standard Input:
    \`\`\`
    ${customInput}
    \`\`\`
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0,
      },
    });

    return response.text.trim();
  } catch (error) {
    console.error("Error calling Gemini API for custom execution:", error);
    return "Failed to run the code. The AI judge might be busy or an unexpected error occurred.";
  }
};


export const getCodeSuggestion = async (problem: Problem, code: string, failedCase: TestCaseResult): Promise<string> => {
  const model = 'gemini-2.5-flash';

  const systemInstruction = `You are a helpful and expert C programming tutor. Your goal is to guide the user to fix their code without giving away the full answer.
  1.  Analyze the provided problem, the user's C code, and the specific test case that failed.
  2.  Identify the core logical error in the user's code that causes the failure.
  3.  Provide a concise, friendly, and encouraging suggestion.
  4.  Focus on the 'why' behind the failure. For example, instead of saying "change line 5 to x", say "Consider what happens in your loop when the input array is empty. Is your loop condition correct?".
  5.  **DO NOT** provide corrected code snippets.
  6.  Keep your suggestion to 1-3 sentences.
  7.  The user is under a time limit, so be direct and clear.`;

  const prompt = `
    Problem:
    Title: ${problem.title}
    Description: ${problem.description.replace(/<[^>]*>?/gm, '')}
    Constraints: ${JSON.stringify(problem.constraints, null, 2)}

    User's Code that Failed:
    \`\`\`c
    ${code}
    \`\`\`

    Failed Test Case:
    - Input: ${failedCase.input}
    - User's Actual Output: ${failedCase.actualOutput}
    - Correct Expected Output: ${failedCase.expectedOutput}

    Based on this, provide a helpful suggestion to fix the code.
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.4,
      },
    });

    return response.text.trim();
  } catch (error) {
    console.error("Error calling Gemini API for suggestion:", error);
    return "Sorry, I couldn't generate a suggestion at this moment. Please try again.";
  }
};
