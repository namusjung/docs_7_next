"use client";

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

interface TabItem {
  label: string;
  examples: CodeLanguage[];
}

interface RequestCodePanelProps {
  children: any;
  title?: string;
  className?: string;
}

function parseContent(children: any): string {
  if (!children || typeof children !== 'object') return '';
  if (children.props?.content) return children.props.content;
  if (Array.isArray(children)) {
    return children.filter((c: any) => typeof c === 'string' && c.trim()).join('');
  }
  if (children.props && Array.isArray(children.props.children)) {
    return children.props.children.filter((c: any) => typeof c === 'string' && c.trim()).join('');
  }
  return '';
}

export const ApiRequest: React.FC<RequestCodePanelProps> = ({
  children,
  title = "Request",
  className = ''
}) => {
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeTab, setActiveTab] = useState(0);

  // --- Parse content ---
  let tabs: TabItem[] | null = null;
  let languages: CodeLanguage[] = [];

  try {
    const raw = parseContent(children);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && !Array.isArray(parsed) && Array.isArray(parsed.tabs)) {
        // Tab format: { tabs: [{ label, examples: [{language, code}] }] }
        tabs = parsed.tabs as TabItem[];
      } else if (Array.isArray(parsed)) {
        // Flat format: [{language, code}]
        languages = parsed as CodeLanguage[];
      }
    }
  } catch {
    languages = [{ language: 'text', code: typeof children === 'string' ? children : '' }];
  }

  // Language selector state (used in both flat and tab mode)
  const currentExamples = tabs ? (tabs[activeTab]?.examples ?? []) : languages;
  const [selectedLanguage, setSelectedLanguage] = useState(currentExamples[0]?.language || 'text');

  const currentCode =
    currentExamples.find(l => l.language === selectedLanguage)?.code ||
    currentExamples[0]?.code || '';

  const dropdownOptions = currentExamples.map(l => ({
    value: l.language,
    label: l.language.charAt(0).toUpperCase() + l.language.slice(1),
  }));

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    // Reset language to first available in that tab
    const examples = tabs?.[index]?.examples ?? [];
    setSelectedLanguage(examples[0]?.language || 'text');
  };

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(currentCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className={`bg-gradient-to-br from-card to-muted/20 border border-border/50 rounded-2xl overflow-hidden shadow-sm mb-6 ${className}`}>
      {/* Header row */}
      <div className="px-4 py-1 dark:bg-muted/10 bg-muted border-b border-border/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 rounded-md hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronDown size={14} className={`transition-transform ${isExpanded ? 'rotate-0' : '-rotate-90'}`} />
          </button>
          <h4 className="text-sm font-medium text-foreground py-3 !m-0">{title}</h4>
        </div>

        <div className="flex items-center gap-2">
          {isExpanded && dropdownOptions.length > 1 && (
            <ModernDropdown
              value={selectedLanguage}
              onValueChange={setSelectedLanguage}
              options={dropdownOptions}
              placeholder="Select language"
              className="!font-secondary text-xs p-2 py-1 h-8"
            />
          )}
          <ModernButton
            onClick={copyCode}
            variant="ghost"
            className="hover:bg-gray-400"
            size="sm"
            style={{ borderRadius: '6px' }}
            iconOnly
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </ModernButton>
        </div>
      </div>

      {/* Tab bar (only in tab mode) */}
      {tabs && isExpanded && (
        <div className="flex items-center gap-1 px-4 pt-3 pb-0 border-b border-border/30 overflow-x-auto">
          {tabs.map((tab, i) => (
            <div
              key={tab.label}
              className={`px-3 py-1 rounded-t-lg text-xs font-medium cursor-pointer transition-all select-none whitespace-nowrap ${i === activeTab
                ? 'text-foreground border-primary dark:bg-muted/10 bg-muted'
                : 'text-muted-foreground border-transparent hover:text-foreground hover:bg-muted/20'
                }`}
              onClick={() => handleTabClick(i)}
            >
              {tab.label}
            </div>
          ))}
        </div>
      )}

      {/* Code content */}
      {isExpanded && (
        <ScrollArea>
          <SyntaxHighlighter
            code={currentCode}
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
