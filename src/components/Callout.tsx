"use client";

import { AlertTriangle, Info, Lightbulb, AlertCircle, Crown, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type CalloutType = "tip" | "warning" | "info" | "danger";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

const config: Record<
  CalloutType,
  { icon: React.ElementType; bg: string; border: string; iconColor: string; titleColor: string }
> = {
  tip: {
    icon: Lightbulb,
    bg: "bg-yellow-50 dark:bg-yellow-950/30",
    border: "border-yellow-400 dark:border-yellow-600",
    iconColor: "text-yellow-600 dark:text-yellow-400",
    titleColor: "text-yellow-800 dark:text-yellow-200",
  },
  warning: {
    icon: AlertTriangle,
    bg: "bg-red-50 dark:bg-red-950/30",
    border: "border-red-400 dark:border-red-500",
    iconColor: "text-red-500 dark:text-red-400",
    titleColor: "text-red-700 dark:text-red-300",
  },
  info: {
    icon: Info,
    bg: "bg-gray-50 dark:bg-gray-800/50",
    border: "border-gray-300 dark:border-gray-600",
    iconColor: "text-gray-500 dark:text-gray-400",
    titleColor: "text-gray-700 dark:text-gray-300",
  },
  danger: {
    icon: AlertCircle,
    bg: "bg-red-50 dark:bg-red-950/30",
    border: "border-red-400 dark:border-red-500",
    iconColor: "text-red-500 dark:text-red-400",
    titleColor: "text-red-700 dark:text-red-300",
  },
};

const defaultTitles: Record<CalloutType, string> = {
  tip: "Pro Tip",
  warning: "Atenção",
  info: "Informação",
  danger: "Importante",
};

export function Callout({ type = "info", title, children }: CalloutProps) {
  const c = config[type];
  const getIcon = () => {
    switch (type) {
      case "tip":
        return <Crown className="w-4 h-4" />;
      case "warning":
        return <AlertTriangle className="w-4 h-4" />;
      case "info":
        return <Info className="w-4 h-4" />;
      case "danger":
        return <XCircle className="w-4 h-4" />;
      default:
        return <Info className="w-4 h-4" />;
    }
  };

  const displayTitle = title || defaultTitles[type];

  return (
    <div
      className={cn(
        "my-6 rounded-lg border-l-4 p-4",
        c.bg,
        c.border
      )}
    >
      <div className="flex items-center gap-2 mb-2">
        {getIcon()}
        <span className={cn("font-semibold text-sm", c.titleColor)}>
          {displayTitle}
        </span>
      </div>
      <div className="text-sm text-[var(--text-secondary)] [&>p]:mb-0">
        {children}
      </div>
    </div>
  );
}
