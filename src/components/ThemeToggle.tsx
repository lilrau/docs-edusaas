"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-9 h-9 flex items-center justify-center rounded-lg transition-colors hover:bg-[var(--bg-code)]"
      aria-label="Alternar tema"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-[var(--text-secondary)]" />
      ) : (
        <Moon className="w-4 h-4 text-[var(--text-secondary)]" />
      )}
    </button>
  );
}
