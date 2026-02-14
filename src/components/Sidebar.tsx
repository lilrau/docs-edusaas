"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ChevronRight,
  Search,
  BookOpen,
  Phone,
  Crown,
  Building2,
  ShoppingCart,
  ClipboardList,
  GraduationCap,
  Wallet,
  Users,
  Network,
  MonitorPlay,
  Settings,
  Shield,
  GitBranch,
  HelpCircle,
  CheckCircle,
  XCircle,
  Wrench,
  Rocket,
  LayoutGrid,
  FileText,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Phone,
  Crown,
  Building2,
  ShoppingCart,
  ClipboardList,
  GraduationCap,
  Wallet,
  Users,
  Network,
  MonitorPlay,
  Settings,
  Shield,
  GitBranch,
  HelpCircle,
  CheckCircle,
  XCircle,
  Wrench,
  Rocket,
  LayoutGrid,
  FileText,
  Search,
};

interface SidebarItem {
  slug: string;
  title: string;
  icon: string;
}

interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

interface SidebarProps {
  sections: SidebarSection[];
}

export function Sidebar({ sections }: SidebarProps) {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    () => {
      const initial: Record<string, boolean> = {};
      sections.forEach((s) => {
        initial[s.title] = true;
      });
      return initial;
    }
  );
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const sidebarContent = (
    <>
      <div className="flex items-center justify-between px-4 py-4 border-b border-[var(--border-color)]">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center">
            <img
              src="/logo.png"
              alt="EduSaaS"
              className="w-6 h-6 dark:hidden"
            />
            <img
              src="/logo-dark.png"
              alt="EduSaaS"
              className="w-6 h-6 hidden dark:block"
            />
          </div>
          <span className="font-bold text-lg text-[var(--text-primary)] group-hover:text-brand-500 transition-colors">
            EduSaaS
          </span>
        </Link>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(false)}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[var(--bg-code)]"
          >
            <X className="w-4 h-4 text-[var(--text-secondary)]" />
          </button>
        </div>
      </div>

      <div className="px-3 py-3">
        <Link
          href="/busca"
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[var(--text-muted)] bg-[var(--bg-code)] hover:text-[var(--text-secondary)] transition-colors"
        >
          <Search className="w-4 h-4" />
          <span>Buscar...</span>
          <kbd className="ml-auto text-xs bg-[var(--bg-secondary)] px-1.5 py-0.5 rounded border border-[var(--border-color)]">
            ⌘K
          </kbd>
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 pb-4">
        {sections.map((section) => (
          <div key={section.title} className="mb-2">
            <button
              onClick={() => toggleSection(section.title)}
              className="flex items-center justify-between w-full px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
            >
              {section.title}
              {openSections[section.title] ? (
                <ChevronDown className="w-3 h-3" />
              ) : (
                <ChevronRight className="w-3 h-3" />
              )}
            </button>
            {openSections[section.title] && (
              <div className="space-y-0.5 animate-fade-in">
                {section.items.map((item) => {
                  const isActive = pathname === `/docs/${item.slug}`;
                  const Icon = iconMap[item.icon] || FileText;
                  return (
                    <Link
                      key={item.slug}
                      href={`/docs/${item.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "sidebar-link",
                        isActive && "active"
                      )}
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{item.title}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="px-4 py-3 border-t border-[var(--border-color)]">
        <p className="text-xs text-[var(--text-muted)]">
          EduSaaS Docs v1.0
        </p>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] shadow-lg"
      >
        <Menu className="w-5 h-5 text-[var(--text-primary)]" />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-screen w-[280px] flex flex-col bg-[var(--bg-sidebar)] border-r border-[var(--border-color)] transition-transform duration-200",
          "lg:translate-x-0 lg:z-30",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {sidebarContent}
      </aside>
    </>
  );
}
