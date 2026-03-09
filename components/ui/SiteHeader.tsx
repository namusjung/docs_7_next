"use client";
import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useTheme } from "next-themes";
import Image from "next/image";
import ModernButton from "./ModernButton";
import {
  Home,
  Lightbulb,
  BookOpen,
  Box,
  FileText,
  Search,
  LogIn
} from "lucide-react";
import MobileNavButton from "@/components/docs/MobileNavButton";
import { usePathname } from "next/navigation";
import { SearchItem } from "@/lib/docs-utils";
import SearchModal from "./SearchModal";
import { useState, useEffect } from "react";

export default function SiteHeader({ searchItems = [] }: { searchItems?: SearchItem[] }) {
  const { theme } = useTheme();
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Docs", href: "/docs/getting-started/introduction", icon: Lightbulb },
    { name: "API Reference", href: "/api/api-reference/introduction", icon: BookOpen },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="w-full max-w-[1440px] mx-auto">
          {/* Top Row */}
          <div className="px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between border-b border-border/50">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/img/logo-no-outline.svg"
                  alt="7en.ai"
                  className="h-5 block dark:hidden"
                  width={80}
                  height={24}
                  priority
                />
                <Image
                  src="/img/logo-white-01.svg"
                  alt="7en.ai"
                  className="h-5 hidden dark:block"
                  width={80}
                  height={24}
                  priority
                />
              </Link>
            </div>

            <div className="flex-1 max-w-xl px-8 hidden md:block">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="w-full relative group cursor-text"
              >
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="w-full bg-muted/40 hover:bg-muted/60 border border-transparent hover:border-border rounded-lg py-1.5 pl-10 pr-10 text-sm text-muted-foreground text-left transition-all">
                  Search documentation...
                </div>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                    <span className="text-xs">/</span>
                  </kbd>
                </div>
              </button>
            </div>

            <div className="flex items-center gap-1 md:gap-4">
              <Link href="/login" className="hidden sm:block">
                <div className="text-sm font-medium hover:text-primary transition-colors pr-2">
                  Login
                </div>
              </Link>
              <ThemeToggle />
              <div className="md:hidden">
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
              <MobileNavButton />
            </div>
          </div>

          {/* Bottom Row - Navigation Links */}
          <nav className="px-4 sm:px-6 lg:px-8 h-12 hidden md:flex items-center gap-8 overflow-x-auto no-scrollbar">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href.split('/').slice(0, 2).join('/')));

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-2 text-[13px] font-medium transition-colors h-full relative group whitespace-nowrap ${isActive
                    ? "text-primary"
                    : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                    }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-primary" : "text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300"}`} />
                  {link.name}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-t-full" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <SearchModal
        items={searchItems}
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}




