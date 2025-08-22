"use client";
type Props = { 
  children?: any;
  title?: string;
};


// export default function ParameterList({ children }: Props) {
//   const data = JSON.parse(children.props.content);
//   console.log(data);
//   return (
//     <div className="my-4">
//       <h3 className="font-heading text-xl">Parameters</h3>
//       <div className="mt-2 text-sm prose prose-slate dark:prose-invert max-w-none">
//         {children}
//       </div>
//     </div>
//   );
// }

import React, { ReactNode, useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import './ParameterList.css';

interface Parameter {
  name: string;
  type: string;
  description: string;
  children?: Parameter[];
}

interface ParameterListProps {
  title?: string;
  children?: ReactNode;
}

interface NestedParameterItemProps {
  parameter: Parameter;
  level?: number;
}

// Parse JSON content from children
function parseJSONParameters(content: string): Parameter[] {
  try {
    // Clean the content - remove extra whitespace and newlines
    const cleanContent = content.trim();
    
    if (!cleanContent) {
      return [];
    }
    
    const parsed = JSON.parse(cleanContent);
    
    // Ensure it's an array
    if (!Array.isArray(parsed)) {
      console.error('Parameter list JSON must be an array');
      return [];
    }
    
    // Validate parameter structure
    const validateParameter = (param: any): param is Parameter => {
      return (
        typeof param === 'object' &&
        param !== null &&
        typeof param.name === 'string' &&
        typeof param.type === 'string' &&
        typeof param.description === 'string' &&
        (param.children === undefined || Array.isArray(param.children))
      );
    };
    
    // Recursively validate parameters
    const validateParameters = (params: any[]): Parameter[] => {
      return params.filter(validateParameter).map(param => ({
        ...param,
        children: param.children ? validateParameters(param.children) : undefined
      }));
    };
    
    return validateParameters(parsed);
  } catch (error) {
    console.error('Failed to parse parameter list JSON:', error);
    return [];
  }
}

// Extract text content from React children
// function extractTextFromChildren(children: any): string {
//   if (typeof children === 'string') {
//     return children;
//   }
  
//   if (Array.isArray(children)) {
//     return children.map(extractTextFromChildren).join('');
//   }
  
//   if (React.isValidElement(children) && children.props.children) {
//     return extractTextFromChildren(children.props.children);
//   }
  
//   return '';
// }

const NestedParameterItem: React.FC<NestedParameterItemProps> = ({ parameter, level = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(false); // Auto-expand first two levels
  const hasChildren = parameter.children && parameter.children.length > 0;
  
  const paddingLeft = level * 20;

  return (
    <div className="border-b border-border/30 last:border-b-0 pl-6" style={{}}>
      <div className="flex items-start hover:bg-muted/20 transition-colors flex-row-reverse" style={{ paddingLeft }}>
        {hasChildren && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-center w-6 h-6 mt-2.5 mr-2 hover:bg-muted/40 rounded transition-colors flex-shrink-0"
          >
            {isExpanded ? (
              <ChevronDown size={16} className="text-muted-foreground" />
            ) : (
              <ChevronRight size={16} className="text-muted-foreground" />
            )}
          </button>
        )}
        {!hasChildren && <div className="w-8 mr-2 flex-shrink-0" />}
        
        <div className="flex-1 py-3 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="!text-sm !m-0 !p-0 font-mono">
              <strong className={`font-semibold ${level === 0 ? 'text-foreground' : 'text-foreground/90'}`}>
                {parameter.name}
              </strong>
            </h4>
            <code className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-mono bg-muted/60 border border-border/30 ${
              parameter.type === 'object' 
                ? 'text-purple-600 dark:text-purple-400' 
                : parameter.type === 'string'
                ? 'text-blue-600 dark:text-blue-400'
                : parameter.type === 'number' || parameter.type === 'integer'
                ? 'text-green-600 dark:text-green-400'
                : parameter.type === 'boolean'
                ? 'text-orange-600 dark:text-orange-400'
                : 'text-gray-600 dark:text-gray-400'
            }`}>
              {parameter.type}
            </code>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed !m-0">
            {parameter.description}
          </p>
        </div>
      </div>
      
      {hasChildren && isExpanded && (
        <div className="bg-muted/10 border-l pl-1">
          {parameter.children?.map((child, index) => (
            <NestedParameterItem 
              key={`${child.name}-${index}`} 
              parameter={child} 
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const ParameterList: React.FC<ParameterListProps> = ({ 
  title = "Parameters", 
  children 
}: Props) => {
  // Extract text content from children and parse as JSON
  const textContent = children.props.content;
  const parameters = parseJSONParameters(textContent);

  if (parameters.length === 0 && textContent) {
    return (
      <div className="my-8 overflow-hidden rounded-xl border border-border/60 bg-gradient-to-br from-card to-muted/20 shadow-sm">
        {title && (
          <div className="border-b border-border/40 bg-gradient-to-r from-muted/40 to-muted/20 px-6 py-4">
            <h3 className="!text-base font-semibold text-foreground !m-0 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary/60"></span>
              {title}
            </h3>
          </div>
        )}
        <div className="p-4">
          <div className="text-destructive text-sm">
            Error: Invalid JSON format in parameter list. Please check your JSON syntax.
          </div>
          <details className="mt-2">
            <summary className="cursor-pointer text-muted-foreground text-xs">Show content</summary>
            <pre className="mt-2 p-2 bg-muted text-xs overflow-auto max-h-32 rounded">
              {textContent}
            </pre>
          </details>
        </div>
      </div>
    );
  }

  if (parameters.length === 0) {
    return (
      <div className="my-8 overflow-hidden rounded-xl border border-border/60 bg-gradient-to-br from-card to-muted/20 shadow-sm">
        {title && (
          <div className="border-b border-border/40 bg-gradient-to-r from-muted/40 to-muted/20 px-6 py-4">
            <h3 className="!text-base font-semibold text-foreground !m-0 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary/60"></span>
              {title}
            </h3>
          </div>
        )}
        <div className="p-4">
          <div className="text-muted-foreground text-sm">
            No parameters provided.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="my-8 overflow-hidden rounded-xl border border-border/60 bg-gradient-to-br from-card to-muted/20">
      {title && (
        <div className="border-b border-border/40 bg-gradient-to-r from-muted/40 to-muted/20 px-6 py-4">
          <h3 className="!text-base font-semibold text-foreground !m-0 flex items-center gap-2">
            {title}
          </h3>
        </div>
      )}
      
      <div className="parameter-list-content">
        {parameters.map((parameter, index) => (
          <NestedParameterItem key={`${parameter.name}-${index}`} parameter={parameter} />
        ))}
      </div>
    </div>
  );
};

export default ParameterList;



