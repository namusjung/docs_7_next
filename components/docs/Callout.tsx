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
        return `${baseStyles} border-sky-500/20 bg-sky-50/50 dark:border-sky-500/30 dark:bg-sky-500/10 text-sky-800`;
      case 'warning':
        return `${baseStyles} border-amber-500/50 bg-amber-50/50 dark:border-amber-500/60 dark:bg-amber-500/10 text-amber-800`;
      case 'success':
        return `${baseStyles} border-emerald-500/20 bg-emerald-50/50 dark:border-emerald-500/30 dark:bg-emerald-500/10 text-emerald-800`;
      case 'error':
        return `${baseStyles} bg-red-50 border-red-100 dark:border-red-900 dark:bg-red-900/50  text-red-800`;
      case 'tip':
        return `${baseStyles} border-[#bc543a] dark:bg-neutral-500/10 bg-neutral-300/10 text-[#bc543a]`;
      default:
        return `${baseStyles} bg-gray-50 border-gray-100 dark:border-gray-900 dark:bg-gray-900/50  text-gray-800`;
    }
  };

  const getIcon = (type: string) => {
    const iconProps = { size: 20, className: "flex-shrink-0" };
    
    switch (type) {
      case 'info':
        return <Info {...iconProps} className={`${iconProps.className} text-sky-600`} />;
      case 'warning':
        return <AlertTriangle {...iconProps} className={`${iconProps.className} text-amber-600`} />;
      case 'success':
        return <CheckCircle {...iconProps} className={`${iconProps.className} text-emerald-600`} />;
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
                    <span className={`flex gap-1 px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wide shadow-lg bg-gradient-to-r from-[#bc543a] to-[#27221e] text-white`}>
                     {getIcon('tip')} Tips
                    </span>
                    <h4 className="!font-semibold !mb-0 !text-base !text-black-500 dark:!text-gray-100">{title}</h4>
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
    <div className={`${getCalloutStyles(type)} ${className} !p-2 !pl-3`}>
      <div className="flex gap-3">
        {getIcon(type)}
        <div className="flex-1">
          {title && (
            <h4 className="!font-semibold !mb-1 !text-sm !text-gray-500 dark:!text-gray-100">{title}</h4>
          )}
          <div className="leading-relaxed callout-content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Callout;



