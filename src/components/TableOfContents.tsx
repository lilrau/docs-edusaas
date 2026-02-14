"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".prose-docs h2, .prose-docs h3"
    );
    const items: Heading[] = Array.from(elements).map((el) => ({
      id: el.id,
      text: el.textContent || "",
      level: el.tagName === "H2" ? 2 : 3,
    }));
    setHeadings(items);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -80% 0px" }
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="hidden xl:block w-56 flex-shrink-0">
      <div className="sticky top-24">
        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-3">
          Nesta página
        </p>
        <ul className="space-y-1">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className={cn(
                  "block text-sm py-1 transition-colors duration-150 hover:text-[var(--text-primary)]",
                  heading.level === 3 ? "pl-4" : "pl-0",
                  activeId === heading.id
                    ? "text-brand-500 font-medium"
                    : "text-[var(--text-muted)]"
                )}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
