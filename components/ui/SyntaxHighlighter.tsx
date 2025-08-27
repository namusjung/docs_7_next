
import React, { useState, useEffect } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import { Copy, Check } from 'lucide-react';

interface SyntaxHighlighterProps {
  code: string;
  language: string;
  showCopyButton?: boolean;
  className?: string;
}

export const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({
  code,
  language,
  showCopyButton = true,
  className = ''
}) => {
  const [copied, setCopied] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'light';
  });

  //console.log("SyntaxHighlighter code:", JSON.stringify(code));
  console.log("SyntaxHighlighter language:", language);

  // Listen for theme changes
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark');
          setTheme(isDark ? 'dark' : 'light');
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };
  console.log("Current theme:", theme);

  // Choose theme based on current theme context
  const prismTheme = theme === 'dark' ? themes.palenight : themes.nightOwlLight;

  // Ensure code is a string and preserve line breaks
  const codeString = typeof code === 'string' ? code : String(code);
  const cleanCode = codeString.trim();

  return (
    <div className={`relative dark:bg-neutral-900 ${className}`}>
      {showCopyButton && (
        <button
          onClick={copyToClipboard}
          className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-background/80 hover:bg-muted transition-colors border border-border/40"
          title="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4 text-muted-foreground" />
          )}
        </button>
      )}
      
      <Highlight
        theme={prismTheme}
        code={cleanCode}
        language={language}
      >
        {({ className: highlightClassName, style, tokens, getLineProps, getTokenProps }) => (
          <pre 
            className={`${highlightClassName} p-6 text-[13px] leading-relaxed overflow-y-auto whitespace-pre pr-0`}
            style={style}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })} className='whitespace-pre-wrap'>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};
