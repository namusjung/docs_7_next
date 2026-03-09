"use client";
import { useTheme } from "next-themes";
import ModernButton from "./ModernButton";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { setTheme } = useTheme();

  function toggle() {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <ModernButton
      aria-label="Toggle theme"
      variant="ghost"
      size="sm"
      className="inline-flex items-center gap-2 h-8 w-8"
      onClick={toggle}
      iconOnly
    >
      {/* Icons shown/hidden purely via CSS — instant, no JS state, no layout shift */}
      <Sun className="h-4 w-4 hidden dark:block" />
      <Moon className="h-4 w-4 dark:hidden" />
    </ModernButton>
  );
}


