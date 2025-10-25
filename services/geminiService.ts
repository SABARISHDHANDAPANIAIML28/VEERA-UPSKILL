import { GoogleGenAI, Type } from "@google/genai";
import { Problem, Language, EvaluationResult } from '../types';

// FIX: Per coding guidelines, initialize GoogleGenAI directly with `process.env.API_KEY`.
// This resolves the TypeScript error on `import.meta.env` and adheres to the API key usage rule.
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
  
  const systemInstruction = `You are an AI code judge that perfectly emulates the **OnlineGDB C compiler**. Your task is to evaluate a user's C code solution for a given programming problem.
  1.  Strictly adhere to the behavior of a standard GCC compiler as used by OnlineGDB.
  2.  Assume standard C libraries like <stdio.h>, <stdlib.h>, and <string.h> are available by default.
  3.  Analyze the provided problem description and the user's C code.
  4.  **You must create and execute the code against exactly 5 comprehensive test cases.** These should cover the examples provided, edge cases (e.g., empty inputs, large numbers, duplicates), and general cases based on the problem's constraints.
  5.  If the code fails to compile or has runtime errors, populate the 'compilationError' field with a GCC-like error message. In this case, mark all 5 test cases as 'Failed' and set the overall result to 'Rejected'.
  6.  For each test case, rigorously compare the code's output with the expected output.
  7.  The 'testCases' array in your response **must contain exactly 5 entries**.
  8.  **CRITICAL RULE:** Determine the 'overallResult'. It MUST be "Accepted" if and ONLY IF all 5 test cases have a result of "Passed". If even one test case fails, the 'overallResult' MUST be "Rejected". There are no exceptions to this rule.
  9.  Provide a concise, one-sentence 'summary' explaining the overall result. If rejected, it should state why (e.g., "Rejected due to failing 2 out of 5 test cases.").
  10. Return the final evaluation in the specified JSON format.`;

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


export const getHintWithGemini = async (problem: Problem): Promise<string> => {
    const model = 'gemini-2.5-flash';

    const systemInstruction = `You are a helpful programming assistant. Your task is to provide a single, concise hint for a given programming problem.
    1.  Do NOT provide the full solution or code.
    2.  The hint should guide the user towards the correct approach or data structure.
    3.  Keep the hint to one or two sentences.
    4.  Your response must be plain text, not JSON.`;

    const prompt = `
    Problem:
    Title: ${problem.title}
    Description: ${problem.description.replace(/<[^>]*>?/gm, '')}

    Provide a short hint for solving this problem.
    `;

    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: prompt,
            config: {
                systemInstruction: systemInstruction,
                temperature: 0.5,
            },
        });
        return response.text;
    } catch (error) {
        console.error("Error getting hint from Gemini API:", error);
        throw new Error("Failed to get a hint. The AI assistant might be busy. Please try again.");
    }
};