"use client";
// type Props = {
//   children?: React.ReactNode;
//   title?: string;
// };

// export default function ApiRequest({ children, title = "Request" }: Props) {
//   return (
//     <div className="my-4 border rounded-lg overflow-hidden">
//       <div className="px-4 py-2 bg-muted/50 text-xs font-medium">{title}</div>
//       <div className="p-4 text-sm">
//         {children}
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { Copy, Check, ChevronDown } from 'lucide-react';
import { SyntaxHighlighter } from './../ui/SyntaxHighlighter';
import { ScrollArea } from '../ui/ScrollArea';
import ModernButton from '@/components/ui/ModernButton';
import { ModernDropdown } from '../ui/ModernDropdown';

interface CodeLanguage {
  language: string;
  code: string;
}

interface RequestCodePanelProps {
  children: any;
  title?: string;
  className?: string;
}


export const ApiRequest: React.FC<RequestCodePanelProps> = ({ 
  children,
  title = "Request",
  className = ''
}) => {
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  console.log('RequestCodePanel: Received children:', children);
  console.log('RequestCodePanel: Children type:', typeof children);

  const cleanBodyContent = (arr: any) => {
      // Step 1: Filter out null and whitespace
      const filtered = arr.filter((item: any) => typeof item === 'string' && item.trim() !== '');
      return filtered;
    };
  

  // Parse the JSON array from children with better error handling
  let languages: CodeLanguage[] = [];
  try {
    let contentString = '';
    
    // Handle different children structures
    if (children && typeof children === 'object') {
      // Check if it's a CodeBlock component (common case after Markdoc transform)
      if (children.props && children.props.content) {
        contentString = children.props.content;
        console.log('RequestCodePanel: Found content in CodeBlock props:', contentString);
      }
      // Handle array of children
      else if (Array.isArray(children)) {
        const cleaned = cleanBodyContent(children);
        contentString = cleaned.join('');
      } 
      // Handle props.children array
      else if (children.props && Array.isArray(children.props.children)) {
        const cleaned = cleanBodyContent(children.props.children);
        contentString = cleaned.join('');
      }
    }
    
    // If we have a content string, parse it
    if (contentString) {
      languages = JSON.parse(contentString);
      console.log('RequestCodePanel: Successfully parsed languages:', languages);
    }
  } catch (error) {
    console.error('RequestCodePanel: Failed to parse languages JSON:', error);
    // If parsing fails, create a single text entry
    languages = [{ language: 'text', code: typeof children === 'string' ? children : JSON.stringify(children, null, 2) }];
  }

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]?.language || 'text');

  const currentLanguage = languages.find(lang => lang.language === selectedLanguage) || languages[0];
  const codeToDisplay = currentLanguage?.code || '';

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(codeToDisplay);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('RequestCodePanel: Failed to copy code:', err);
    }
  };

  // Convert languages to dropdown options
  const dropdownOptions = languages.map(lang => ({
    value: lang.language,
    label: lang.language.charAt(0).toUpperCase() + lang.language.slice(1)
  }));

  return (
    <div className={`bg-gradient-to-br from-card to-muted/20 border border-border/50 rounded-2xl overflow-hidden shadow-sm mb-6 ${className}`}>
      {/* Header */}
      <div className="px-4 py-1 bg-gradient-to-r from-muted/40 to-muted/20 border-b border-border/50 flex items-center justify-between">
        <div className="flex items-center gap-3 p-0 m-0">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 rounded-md hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronDown size={14} className={`transition-transform ${isExpanded ? 'rotate-0' : '-rotate-90'}`} />
          </button>
          <h4 className="text-sm font-medium text-foreground py-3 !m-0">{title}</h4>
        </div>
        
        <div className="flex items-center gap-2">
          {/* Language Selector */}
          {languages.length > 1 && isExpanded && (
            <ModernDropdown
              value={selectedLanguage}
              onValueChange={setSelectedLanguage}
              options={dropdownOptions}
              placeholder="Select language"
              className='!font-secondary text-xs p-2 py-1 h-8'
            />
          )}
          
          <ModernButton
            onClick={copyCode}
            variant='ghost'
            className="hover:bg-gray-400"
            size='sm'
            style={{borderRadius: "6px"}}
            iconOnly
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </ModernButton>
        </div>
      </div>
      
      {/* Code Content with Syntax Highlighting and ScrollArea */}
      {isExpanded && (
        <ScrollArea className="">
          <SyntaxHighlighter
            code={codeToDisplay}
            language={selectedLanguage}
            showCopyButton={false}
            className="bg-background"
          />
       
        </ScrollArea>
      )}
    </div>
  );
};

export default ApiRequest;



