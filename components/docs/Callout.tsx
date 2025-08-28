"use client";
import React, { useState } from 'react';
import { Info, AlertTriangle, CheckCircle, XCircle, Lightbulb, ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/Collapsible';

interface CalloutBoxProps {
  type: 'info' | 'warning' | 'success' | 'error' | 'tip';
  title?: string;
  children: React.ReactNode;
  className?: string;
  collapsible?: boolean;
}

export const Callout: React.FC<CalloutBoxProps> = ({ 
  type, 
  title, 
  children, 
  className = '',
  collapsible = false
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const getCalloutStyles = (type: string) => {
    const baseStyles = 'my-8 rounded-xl border p-6';
    
    switch (type) {
      case 'info':
        return `${baseStyles} bg-blue-50 border-blue-100 dark:border-blue-900 dark:bg-blue-900/50 text-blue-800`;
      case 'warning':
        return `${baseStyles} bg-amber-50 border-amber-100 dark:border-amber-900 dark:bg-amber-900/50  text-amber-800`;
      case 'success':
        return `${baseStyles} bg-green-50 border-green-100 dark:border-green-900 dark:bg-green-900/50  text-green-800`;
      case 'error':
        return `${baseStyles} bg-red-50 border-red-100 dark:border-red-900 dark:bg-red-900/50  text-red-800`;
      case 'tip':
        return `${baseStyles} bg-purple-50 border-purple-100 dark:border-purple-900 dark:bg-purple-900/50  text-purple-800`;
      default:
        return `${baseStyles} bg-gray-50 border-gray-100 dark:border-gray-900 dark:bg-gray-900/50  text-gray-800`;
    }
  };

  const getIcon = (type: string) => {
    const iconProps = { size: 20, className: "flex-shrink-0" };
    
    switch (type) {
      case 'info':
        return <Info {...iconProps} className={`${iconProps.className} text-blue-600`} />;
      case 'warning':
        return <AlertTriangle {...iconProps} className={`${iconProps.className} text-amber-600`} />;
      case 'success':
        return <CheckCircle {...iconProps} className={`${iconProps.className} text-green-600`} />;
      case 'error':
        return <XCircle {...iconProps} className={`${iconProps.className} text-red-600`} />;
      case 'tip':
        return <Lightbulb {...iconProps} className={`${iconProps.className} text-white`} />;
      default:
        return <Info {...iconProps} className={`${iconProps.className} text-gray-600`} />;
    }
  };

  if (collapsible) {
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className={`${getCalloutStyles(type)} ${className} collapsible-callout`}>
          <CollapsibleTrigger asChild>
            <div className="flex gap-3 cursor-pointer">
              <div className="flex-1">
                {title && (
                  <div className="flex items-center gap-4">
                    <span className={`flex gap-1 px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wide shadow-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-purple-500/25`}>
                     {getIcon('tip')} Tips
                    </span>
                    <h4 className="!font-semibold !mb-0 !text-sm !text-purple-500 dark:!text-gray-100">{title}</h4>
                  </div>
                  
                )}
              </div>
              <ChevronDown 
                size={16} 
                className={`flex-shrink-0 transition-transform duration-200 dark:text-white ${isOpen ? 'rotate-180' : ''}`}
              />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="flex gap-3 mt-2">
              <div className="flex-1 leading-relaxed">
                {children}
              </div>
            </div>
          </CollapsibleContent>
        </div>
      </Collapsible>
    );
  }

  return (
    <div className={`${getCalloutStyles(type)} ${className}`}>
      <div className="flex gap-3">
        {getIcon(type)}
        <div className="flex-1">
          {title && (
            <h4 className="!font-semibold mb-2 !text-sm !text-gray-500 dark:!text-gray-100">{title}</h4>
          )}
          <div className="leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Callout;



