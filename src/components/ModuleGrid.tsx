"use client";

import React from "react";
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
    GitBranch,
    MonitorPlay,
    Settings,
    LucideIcon,
    ChevronRight
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const iconMap: Record<string, LucideIcon> = {
    Telepesquisa: Search,
    Teleprojeto: Phone,
    "Líder Tele": Crown,
    Recepção: Building2,
    Comercial: ShoppingCart,
    Administrativo: ClipboardList,
    Pedagógico: GraduationCap,
    Financeiro: Wallet,
    "Recursos Humanos": Users,
    Multifiliais: GitBranch,
    "Área do Aluno": MonitorPlay,
    Configurações: Settings,
};

const colorMap: Record<string, string> = {
    Telepesquisa: "border-blue-500/20 hover:border-blue-500/50 bg-blue-500/5 group-hover:bg-blue-500/10 text-blue-500",
    Teleprojeto: "border-indigo-500/20 hover:border-indigo-500/50 bg-indigo-500/5 group-hover:bg-indigo-500/10 text-indigo-500",
    "Líder Tele": "border-amber-500/20 hover:border-amber-500/50 bg-amber-500/5 group-hover:bg-amber-500/10 text-amber-500",
    Recepção: "border-violet-500/20 hover:border-violet-500/50 bg-violet-500/5 group-hover:bg-violet-500/10 text-violet-500",
    Comercial: "border-purple-500/20 hover:border-purple-500/50 bg-purple-500/5 group-hover:bg-purple-500/10 text-purple-500",
    Administrativo: "border-fuchsia-500/20 hover:border-fuchsia-500/50 bg-fuchsia-500/5 group-hover:bg-fuchsia-500/10 text-fuchsia-500",
    Pedagógico: "border-pink-500/20 hover:border-pink-500/50 bg-pink-500/5 group-hover:bg-pink-500/10 text-pink-500",
    Financeiro: "border-orange-500/20 hover:border-orange-500/50 bg-orange-500/5 group-hover:bg-orange-500/10 text-orange-500",
    "Recursos Humanos": "border-rose-500/20 hover:border-rose-500/50 bg-rose-500/5 group-hover:bg-rose-500/10 text-rose-500",
    Multifiliais: "border-cyan-500/20 hover:border-cyan-500/50 bg-cyan-500/5 group-hover:bg-cyan-500/10 text-cyan-500",
    "Área do Aluno": "border-emerald-500/20 hover:border-emerald-500/50 bg-emerald-500/5 group-hover:bg-emerald-500/10 text-emerald-500",
    Configurações: "border-slate-500/20 hover:border-slate-500/50 bg-slate-500/5 group-hover:bg-slate-500/10 text-slate-500",
};

interface ModuleGridProps {
    modules: {
        title: string;
        items: string[];
    }[];
}

export function ModuleGrid({ modules }: ModuleGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
            {modules.map((module) => {
                const Icon = iconMap[module.title] || Settings;
                const colorClass = colorMap[module.title] || "border-slate-500/20 text-slate-500";

                return (
                    <div
                        key={module.title}
                        className={cn(
                            "group relative flex flex-col p-6 rounded-3xl border transition-all duration-300",
                            colorClass
                        )}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className={cn(
                                "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg",
                                module.title === "Líder Tele" ? "bg-amber-500 text-white" :
                                    module.title === "Telepesquisa" ? "bg-blue-500 text-white" :
                                        module.title === "Teleprojeto" ? "bg-indigo-500 text-white" :
                                            module.title === "Recepção" ? "bg-violet-500 text-white" :
                                                module.title === "Comercial" ? "bg-purple-500 text-white" :
                                                    module.title === "Administrativo" ? "bg-fuchsia-500 text-white" :
                                                        module.title === "Pedagógico" ? "bg-pink-500 text-white" :
                                                            module.title === "Financeiro" ? "bg-orange-500 text-white" :
                                                                module.title === "Recursos Humanos" ? "bg-rose-500 text-white" :
                                                                    module.title === "Multifiliais" ? "bg-cyan-500 text-white" :
                                                                        module.title === "Área do Aluno" ? "bg-emerald-500 text-white" :
                                                                            "bg-slate-500 text-white"
                            )}>
                                <Icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-foreground">
                                {module.title}
                            </h3>
                        </div>

                        <ul className="space-y-2 relative z-10">
                            {module.items.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors"
                                >
                                    <ChevronRight size={14} className="opacity-50" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        {/* Background Accent */}
                        <div className="absolute right-4 bottom-4 opacity-[0.03] group-hover:scale-125 transition-transform duration-700 pointer-events-none">
                            <Icon size={120} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
