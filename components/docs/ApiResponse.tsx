"use client";
import React, { ReactNode, useEffect, useState } from 'react';
import { Copy, Check, ChevronDown } from 'lucide-react';
//import { StatusCodeBadge } from './StatusCodeBadge';
import { SyntaxHighlighter } from '../ui/SyntaxHighlighter';
import { ScrollArea } from '../ui/ScrollArea';

interface ResponseExampleProps {
  status?: string;
  children: any;
  title?: string;
  className?: string;
  language?: string;
  hasDropDown?: boolean;
  copy?: boolean;
  statusBadge?: boolean;
}

export const ApiResponse: React.FC<ResponseExampleProps> = ({ 
  status = '', 
  children, 
  title = "Response",
  className = '',
  language = 'text',
  hasDropDown = false,
  copy = true,
  statusBadge = true
}) => {
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [cleanCode, setCleanCode] = useState("");

  const copyResponse = async () => {
    if (!copy) return;
    
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy response: ', err);
    }
  };

  const code = children?.props?.children || "";
 

  return (
    <div className={`bg-card border border-border rounded-2xl overflow-hidden ${className}`}>
      {/* Header */}
      <div className="px-4 py-1 bg-muted/30 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-3 p-0 m-0">
          {hasDropDown && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 rounded-md hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronDown size={14} className={`transition-transform ${isExpanded ? 'rotate-0' : '-rotate-90'}`} />
            </button>
          )}
          <h4 className="text-sm font-medium text-foreground py-3 !m-0">{title}</h4>
          {/* {status && statusBadge && <StatusCodeBadge status={status} />} */}
        </div>
        {copy && (
          <button
            onClick={copyResponse}
            className="p-1.5 rounded-md hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors"
            title="Copy code"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        )}
      </div>
      
      {/* Code Content with Syntax Highlighting and ScrollArea */}
      {isExpanded && (
        <ScrollArea className="max-h-96">
          <SyntaxHighlighter
            code={code}
            language={language}
            showCopyButton={false}
            className="bg-background"
          />
        </ScrollArea>
      )}
    </div>
  );
};

export default ApiResponse;


