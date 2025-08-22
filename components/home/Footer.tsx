
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo and copyright */}
          <div className="flex items-center gap-6">
            <img 
              src="/logo-no-outline.svg" 
              alt="7en.ai" 
              className="h-5 dark:hidden"
            />
            <img 
              src="/logo-no-outline-white.svg" 
              alt="7en.ai" 
              className="h-5 hidden dark:block"
            />
            <span className="text-xs text-muted-foreground">
              © {currentYear} 7en.ai
            </span>
          </div>

          {/* Navigation links */}
          <div className="flex items-center gap-6 text-xs">
            <a href="/docs/intro" className="text-muted-foreground hover:text-foreground transition-colors">
              Docs
            </a>
            <a href="/api/api-reference/introduction" className="text-muted-foreground hover:text-foreground transition-colors">
              API
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policies
            </a>
            <a href="mailto:support@7en.ai" className="text-muted-foreground hover:text-foreground transition-colors">
              support@7en.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
