import React from "react";

interface SyntaxHighlighterProps {
  code: string;
}

const tokenize = (code: string): React.ReactNode[] => {
  const lines = code.split("\n");
  return lines.map((line, lineIdx) => {
    const tokens: React.ReactNode[] = [];
    let i = 0;

    while (i < line.length) {
      // Multi-line comment start (treat rest of line)
      if (line[i] === "/" && line[i + 1] === "*") {
        const end = line.indexOf("*/", i + 2);
        const commentEnd = end !== -1 ? end + 2 : line.length;
        tokens.push(<span key={`${lineIdx}-${i}`} className="syntax-comment">{line.slice(i, commentEnd)}</span>);
        i = commentEnd;
        continue;
      }

      // Single-line comment
      if (line[i] === "/" && line[i + 1] === "/") {
        tokens.push(<span key={`${lineIdx}-${i}`} className="syntax-comment">{line.slice(i)}</span>);
        i = line.length;
        continue;
      }

      // Preprocessor directive
      if (line.trimStart().startsWith("#") && i === line.indexOf("#")) {
        tokens.push(<span key={`${lineIdx}-${i}`} className="syntax-preprocessor">{line.slice(i)}</span>);
        i = line.length;
        continue;
      }

      // String literal
      if (line[i] === '"') {
        let j = i + 1;
        while (j < line.length && !(line[j] === '"' && line[j - 1] !== "\\")) j++;
        j = Math.min(j + 1, line.length);
        tokens.push(<span key={`${lineIdx}-${i}`} className="syntax-string">{line.slice(i, j)}</span>);
        i = j;
        continue;
      }

      // Character literal
      if (line[i] === "'") {
        let j = i + 1;
        while (j < line.length && line[j] !== "'") j++;
        j = Math.min(j + 1, line.length);
        tokens.push(<span key={`${lineIdx}-${i}`} className="syntax-string">{line.slice(i, j)}</span>);
        i = j;
        continue;
      }

      // Numbers
      if (/[0-9]/.test(line[i]) && (i === 0 || /[\s,;(+\-*/%=<>!&|^~\t[]/.test(line[i - 1]))) {
        let j = i;
        while (j < line.length && /[0-9.xXa-fA-F]/.test(line[j])) j++;
        tokens.push(<span key={`${lineIdx}-${i}`} className="syntax-number">{line.slice(i, j)}</span>);
        i = j;
        continue;
      }

      // Words (keywords, types, identifiers)
      if (/[a-zA-Z_]/.test(line[i])) {
        let j = i;
        while (j < line.length && /[a-zA-Z0-9_]/.test(line[j])) j++;
        const word = line.slice(i, j);

        const keywords = new Set([
          "if", "else", "for", "while", "do", "switch", "case", "break",
          "continue", "return", "default", "goto", "sizeof", "typedef",
          "struct", "union", "enum", "const", "static", "extern",
          "volatile", "register", "auto", "signed", "unsigned"
        ]);

        const types = new Set([
          "int", "float", "double", "char", "void", "long", "short",
          "FILE", "NULL", "main"
        ]);

        const stdFunctions = new Set([
          "printf", "scanf", "malloc", "calloc", "realloc", "free",
          "fopen", "fclose", "fgets", "fputs", "fgetc", "fputc",
          "strlen", "strcpy", "strcat", "strcmp", "strrchr", "strchr",
          "gets", "puts", "exit", "atoi", "getchar",
          "islower", "isupper", "isdigit", "toupper", "tolower", "feof"
        ]);

        if (keywords.has(word)) {
          tokens.push(<span key={`${lineIdx}-${i}`} className="syntax-keyword">{word}</span>);
        } else if (types.has(word)) {
          tokens.push(<span key={`${lineIdx}-${i}`} className="syntax-type">{word}</span>);
        } else if (stdFunctions.has(word)) {
          tokens.push(<span key={`${lineIdx}-${i}`} className="syntax-function">{word}</span>);
        } else {
          tokens.push(<span key={`${lineIdx}-${i}`} className="syntax-plain">{word}</span>);
        }
        i = j;
        continue;
      }

      // Other characters
      tokens.push(<span key={`${lineIdx}-${i}`} className="syntax-plain">{line[i]}</span>);
      i++;
    }

    return (
      <div key={lineIdx} className="table-row">
        <span className="table-cell pr-4 text-right select-none text-muted-foreground/40 text-xs w-10">
          {lineIdx + 1}
        </span>
        <span className="table-cell">{tokens}</span>
      </div>
    );
  });
};

const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({ code }) => {
  return (
    <div className="table font-mono text-sm leading-6">
      {tokenize(code)}
    </div>
  );
};

export default SyntaxHighlighter;
