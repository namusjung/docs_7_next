import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Image from "next/image";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
          <nav className="hidden md:flex items-center gap-4 text-sm">
            <Link href="/docs/getting-started/introduction" className="hover:underline">Docs</Link>
            <Link href="/api/reference" className="hover:underline">API</Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <a href="https://dashboard.7en.ai" className="text-sm underline underline-offset-4">Dashboard</a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}


