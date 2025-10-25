import React, { useRef } from 'react';

interface CodeEditorProps {
  code: string;
  onCodeChange: (code: string) => void;
  onRun: () => void;
  isLoading: boolean;
  isSubmitting: boolean;
}

const highlightC = (code: string): string => {
    if (!code) return '';

    // HTML-escape the entire code block first
    let highlightedCode = code
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

    // Use placeholders to avoid re-highlighting nested elements
    const replacements: string[] = [];
    let counter = 0;
    const placeholder = (type: string, content: string): string => {
        const key = `__REPL_${counter++}__`;
        replacements.push(`<span class="token-${type}">${content}</span>`);
        return key;
    };

    // 1. Isolate comments and strings with placeholders
    // Comments
    highlightedCode = highlightedCode.replace(/(\/\*[\s\S]*?\*\/|\/\/[^\n]*)/g, match => placeholder('comment', match));
    // Preprocessor headers
    highlightedCode = highlightedCode.replace(/(&lt;[a-zA-Z0-9_.]*&gt;)/g, match => placeholder('string', match));
    // Strings
    highlightedCode = highlightedCode.replace(/(".*?")/g, match => placeholder('string', match));

    // 2. Highlight the rest of the code
    // Preprocessor directives
    highlightedCode = highlightedCode.replace(/^#\w+/gm, match => `<span class="token-preprocessor">${match}</span>`);
    
    // Keywords
    const keywords = ['int', 'char', 'void', 'if', 'else', 'for', 'while', 'struct', 'typedef', 'sizeof', 'const', 'static', 'unsigned', 'signed', 'long', 'short', 'double', 'float', 'break', 'continue', 'switch', 'case', 'default', 'do'];
    const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
    highlightedCode = highlightedCode.replace(keywordRegex, '<span class="token-keyword">$1</span>');

    // Library functions and 'return' keyword as per image style
    const libFuncs = ['printf', 'scanf', 'return'];
    const libFuncRegex = new RegExp(`\\b(${libFuncs.join('|')})\\b`, 'g');
    highlightedCode = highlightedCode.replace(libFuncRegex, '<span class="token-lib-func">$1</span>');
    
    // Numbers
    highlightedCode = highlightedCode.replace(/\b(\d+(\.\d+)?)\b/g, '<span class="token-number">$1</span>');

    // 3. Restore the isolated parts
    for (let i = 0; i < replacements.length; i++) {
        highlightedCode = highlightedCode.replace(`__REPL_${i}__`, replacements[i]);
    }
    
    return highlightedCode;
};


export const CodeEditor: React.FC<CodeEditorProps> = ({
  code,
  onCodeChange,
  onRun,
  isLoading,
  isSubmitting,
}) => {
  const preRef = useRef<HTMLPreElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleScroll = () => {
      if (preRef.current && textareaRef.current) {
          preRef.current.scrollTop = textareaRef.current.scrollTop;
          preRef.current.scrollLeft = textareaRef.current.scrollLeft;
      }
  };
  
  const highlightedHtml = highlightC(code);

  return (
    <div className="flex-grow flex flex-col bg-[#0d1117]">
      <div className="flex-shrink-0 flex items-center justify-between bg-[#161b22] px-4 py-2 border-b border-gray-700">
        <div className="bg-gray-700 text-gray-200 rounded px-3 py-1 text-sm font-medium">
            C
        </div>
      </div>
      <div className="flex-grow relative">
        <textarea
          ref={textareaRef}
          value={code}
          onChange={(e) => onCodeChange(e.target.value)}
          onScroll={handleScroll}
          className="absolute top-0 left-0 w-full h-full p-4 m-0 box-border bg-transparent text-transparent caret-white font-mono text-sm resize-none focus:outline-none z-10 whitespace-pre-wrap overflow-auto"
          spellCheck="false"
        />
        <pre
          ref={preRef}
          className="absolute top-0 left-0 w-full h-full p-4 m-0 box-border text-gray-200 font-mono text-sm z-0 whitespace-pre-wrap overflow-auto pointer-events-none"
          aria-hidden="true"
        >
          <code dangerouslySetInnerHTML={{ __html: highlightedHtml + '\n' }} />
        </pre>
      </div>
      <div className="flex-shrink-0 flex items-center justify-end space-x-4 bg-[#161b22] px-4 py-2 border-t border-gray-700">
        <button
          onClick={onRun}
          disabled={isLoading || isSubmitting}
          className="px-4 py-1.5 rounded-md text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          {isLoading ? 'Running...' : 'Run Code'}
        </button>
      </div>
    </div>
  );
};