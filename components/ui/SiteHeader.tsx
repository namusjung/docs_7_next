import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Image from "next/image";
import ModernButton from "./ModernButton";
import { Book, BookOpen, Code } from "lucide-react";

export default function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container h-14 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-heading font-semibold">
          <Image 
            src="/img/logo-no-outline.svg" 
            alt="7en.ai" 
            className="h-5 dark:hidden"
            width={80}
            height={24}
          />
          </Link>
          <nav className="hidden md:flex items-center gap-0 text-sm">
            <Link href="/docs/getting-started/introduction" className="hover:underline">
            <ModernButton
            variant="ghost"
            size="md"
            className="flex gap-2 hover:text-primary"
            >
              <BookOpen className="w-4 h-4" />
              Docs
            </ModernButton>
            </Link>
            <Link href="/api/reference" className="hover:underline">
            <ModernButton
            variant="ghost"
            size="md"
            className="flex gap-2"
            >
              <Code className="w-4 h-4" />
              API
            </ModernButton>
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">

          <ThemeToggle />
          <Link href="/docs/getting-started/introduction">
            <ModernButton 
              variant="outline"
              size="sm"
              className="inline-flex items-center gap-2"
            >
              Login
            </ModernButton>
            </Link>
            <Link href="/api/api-reference/">
            <ModernButton 
              variant="primary"
              size="sm"
              className="inline-flex items-center gap-2"
            >
              Signup
            </ModernButton>
            </Link>
          
        </div>
      </div>
    </header>
  );
}


