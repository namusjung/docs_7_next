"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ModernButton from "./ModernButton";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const isDark = theme === "dark" || (!theme && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  return (
    <ModernButton
      aria-label="Toggle theme"
      variant="ghost"
      size="sm"
      className="inline-flex items-center gap-2 h-8 w-8"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      iconOnly
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4"/> }
    </ModernButton>
  );
}


