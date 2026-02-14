import Link from "next/link";
import {
  Search,
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
  BookOpen,
  ArrowRight,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Search, Phone, Crown, Building2, ShoppingCart, ClipboardList,
  GraduationCap, Wallet, Users, Network, MonitorPlay, Settings,
  Shield, GitBranch, HelpCircle, CheckCircle, XCircle, Wrench,
  Rocket, LayoutGrid, FileText, BookOpen, ArrowRight,
};

interface ModuleCardProps {
  title: string;
  description: string;
  icon: string;
  slug: string;
  color?: string;
}

export function ModuleCard({ title, description, icon, slug, color }: ModuleCardProps) {
  const Icon = iconMap[icon] || FileText;

  return (
    <Link
      href={`/docs/${slug}`}
      className="group block p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-brand-400 dark:hover:border-brand-500 transition-all duration-200 hover:shadow-lg hover:shadow-brand-500/5"
    >
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${color || 'bg-brand-500/10'}`}>
        <Icon className={`w-5 h-5 ${color ? 'text-white' : 'text-brand-500'}`} />
      </div>
      <h3 className="font-semibold text-[var(--text-primary)] mb-1 group-hover:text-brand-500 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-[var(--text-muted)] line-clamp-2 mb-3">
        {description}
      </p>
      <span className="inline-flex items-center gap-1 text-sm text-brand-500 font-medium">
        Ver mais
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
      </span>
    </Link>
  );
}
