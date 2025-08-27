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

  const cleanBodyContent = (arr: any) => {
      // Step 1: Filter out null and whitespace
      const filtered = arr.filter((item: any) => typeof item === 'string' && item.trim() !== '');
      return filtered;

      // Step 2: Reconstruct objects
      // let results: any;
      // let current: any;
      // let currentKeys: any;

      // filtered.forEach((item: any) => {
      //   const trimmed = item.trim();
      //   if (trimmed.startsWith('"language":')) {
      //     current.language = trimmed.split(':')[1].trim().slice(1, -1); // Extract "curl" or "javascript"
      //   } else if (trimmed.startsWith('"code":')) {
      //     currentKeys = 'code';
      //     current.code = trimmed.split(':')[1].trim().slice(1); // Start code string
      //   } else if (currentKeys === 'code') {
      //     current.code += trimmed; // Append to code
      //   }

      //   if (current.language && current.code) {
      //     results.push({
      //       language: current.language,
      //       code: current.code.replace(/https:\/\/,/g, 'https://').replace(/Authorization: ,/, 'Authorization: Bearer <token>').trim(),
      //     });
      //     current = {};
      //     currentKeys = null;
      //   }
      // });

      // return results;
    };
  

  // Parse the JSON array from children with better error handling
  let languages: CodeLanguage[] = [];
  try {
    if (children && Array.isArray(children.props.children)) {
      //console.log('RequestCodePanel: Attempting to parse:', children.trim());
      const cleaned = cleanBodyContent(children.props.children);
      languages = JSON.parse(cleaned.join());
      console.log('RequestCodePanel: Successfully parsed languages:', languages);
    }
  } catch (error) {
    console.error('RequestCodePanel: Failed to parse languages JSON:', error);
    // If parsing fails, create a single text entry
    languages = [{ language: 'text', code: children }];
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



