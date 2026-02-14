"use client";

import React, { useState } from "react";
import {
    Search,
    Calendar,
    UserCheck,
    GraduationCap,
    FileText,
    HeartHandshake,
    Briefcase,
    BarChart3,
    ArrowRight,
    ChevronRight,
    LucideIcon
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface Step {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    icon: LucideIcon;
    color: string;
    lightColor: string;
}

const steps: Step[] = [
    {
        id: "telepesquisa",
        title: "Cadastro",
        subtitle: "Telepesquisa",
        description: "O marco zero da operação. Aqui, jovens são qualificados e inseridos no EduSaaS após o primeiro contato estratégico.",
        icon: Search,
        color: "bg-blue-500",
        lightColor: "bg-blue-500/10",
    },
    {
        id: "teleprojeto",
        title: "Agendamento",
        subtitle: "Teleprojeto",
        description: "Transformação do interesse em compromisso. O foco é o agendamento da visita presencial da família à unidade.",
        icon: Calendar,
        color: "bg-indigo-500",
        lightColor: "bg-indigo-500/10",
    },
    {
        id: "recepcao",
        title: "Visita",
        subtitle: "Recepção",
        description: "A primeira impressão presencial. Acolhimento, coleta de dados inicial e gestão inteligente da fila de atendimento.",
        icon: UserCheck,
        color: "bg-violet-500",
        lightColor: "bg-violet-500/10",
    },
    {
        id: "comercial",
        title: "Matrícula",
        subtitle: "Comercial",
        description: "O momento da conversão. Apresentação de valores, benefícios e fechamento da matrícula do novo aluno.",
        icon: GraduationCap,
        color: "bg-purple-500",
        lightColor: "bg-purple-500/10",
    },
    {
        id: "administrativo",
        title: "Contrato",
        subtitle: "Administrativo",
        description: "Formalização e conformidade. Geração de contratos, gestão de pagamentos e controle de qualidade (CQ).",
        icon: FileText,
        color: "bg-fuchsia-500",
        lightColor: "bg-fuchsia-500/10",
    },
    {
        id: "pedagogico",
        title: "Retenção",
        subtitle: "Pedagógico",
        description: "Retenção e entrega. Módulo de aulas integrado, gestão de notas e faltas, disparos de mensagem via WhatsApp e controle de eventos.",
        icon: HeartHandshake,
        color: "bg-pink-500",
        lightColor: "bg-pink-500/10",
    },
    {
        id: "rh",
        title: "Profissional",
        subtitle: "Recursos Humanos",
        description: "Entrega de valor final. Conexão entre o talento do aluno e as oportunidades reais no mercado de trabalho.",
        icon: Briefcase,
        color: "bg-rose-500",
        lightColor: "bg-rose-500/10",
    },
    {
        id: "financeiro",
        title: "Pagamentos",
        subtitle: "Financeiro",
        description: "Sustentabilidade do negócio. Controle de pagamentos, inadimplência e gestão financeira de todas as unidades.",
        icon: BarChart3,
        color: "bg-orange-500",
        lightColor: "bg-orange-500/10",
    },
];

export function DescriptiveFlow() {
    const [activeStep, setActiveStep] = useState<number>(0);
    const [mouseX, setMouseX] = useState<number | null>(null);

    return (
        <div className="my-16 space-y-16">
            {/* Visual Header / macOS Style Dock */}
            <div className="relative flex flex-col items-center w-full">
                <div
                    onMouseMove={(e) => setMouseX(e.pageX)}
                    onMouseLeave={() => setMouseX(null)}
                    className="relative flex items-end justify-center gap-3 pb-10 pt-6 px-8 rounded-[2.5rem] bg-muted/20 border border-border/40 backdrop-blur-sm group/dock w-full max-w-6xl"
                >
                    {steps.map((step, idx) => {
                        const isActive = activeStep === idx;
                        const Icon = step.icon;

                        // Proximity scaling logic
                        const baseScale = mouseX !== null ? 0.75 : 1;
                        let scale = baseScale;
                        if (mouseX !== null) {
                            const el = document.getElementById(`dock-item-${idx}`);
                            if (el) {
                                const rect = el.getBoundingClientRect();
                                const centerX = rect.left + rect.width / 2 + window.scrollX;
                                const distance = Math.abs(mouseX - centerX);
                                // Smooth scaling curve
                                scale = Math.max(baseScale, 1.6 - distance / 140);
                            }
                        }

                        return (
                            <div
                                key={step.id}
                                id={`dock-item-${idx}`}
                                className="relative flex flex-col items-center flex-1 group/item"
                            >
                                {/* Subtitle tooltip on hover */}
                                <div className="absolute -top-20 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-foreground text-background text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover/item:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
                                    {step.subtitle}
                                </div>

                                <button
                                    onClick={() => setActiveStep(idx)}
                                    className={cn(
                                        "relative flex flex-col items-center transition-all duration-300 outline-none w-full",
                                        isActive ? "z-20" : "opacity-70 hover:opacity-100"
                                    )}
                                    style={{
                                        transform: `scale(${scale})`,
                                        transformOrigin: 'bottom center',
                                        transition: mouseX === null ? 'all 0.5s ease' : 'transform 0.1s ease-out'
                                    }}
                                >
                                    <div className={cn(
                                        "w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-500",
                                        step.color,
                                        isActive ? "ring-2 ring-foreground ring-offset-4 ring-offset-background" : "group-hover/item:shadow-2xl"
                                    )}>
                                        <Icon size={26} className="text-white" />
                                    </div>

                                    {/* Title - always visible */}
                                    <span className={cn(
                                        "mt-4 text-[10px] font-black uppercase tracking-[0.1em] text-center transition-all duration-300 w-full px-1 leading-tight",
                                        isActive ? "text-foreground" : "text-muted-foreground"
                                    )}>
                                        {step.title}
                                    </span>

                                    {/* Indicator Dot */}
                                    <div className={cn(
                                        "absolute -bottom-3 w-1.5 h-1.5 rounded-full transition-all duration-500",
                                        isActive ? "bg-primary scale-150" : "bg-transparent"
                                    )} />
                                </button>
                            </div>
                        );
                    })}
                </div>

                {/* Floating Indicator for active state */}
                <div className="mt-6 text-xs font-medium text-muted-foreground animate-pulse">
                    Passe o mouse para explorar as etapas
                </div>
            </div>

            {/* Instructional Content Card */}
            <div className="relative group">
                <div className={cn(
                    "absolute -inset-0.5 bg-gradient-to-r blur opacity-20 transition duration-1000 group-hover:opacity-30",
                    steps[activeStep].color.replace('bg-', 'from-')
                )} />

                <div className="relative bg-card border rounded-3xl p-8 md:p-10 shadow-xl overflow-hidden min-h-[300px] flex flex-col md:flex-row gap-8 items-center border-border/50">
                    {/* Large Background Icon */}
                    <div className="absolute -right-12 -bottom-12 opacity-[0.03] group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                        {React.createElement(steps[activeStep].icon, { size: 300 })}
                    </div>

                    {/* Left Side: Illustration/Icon Focus */}
                    <div className="flex-shrink-0">
                        <div className={cn(
                            "w-24 h-24 md:w-32 md:h-32 rounded-[2rem] flex items-center justify-center text-white shadow-2xl transition-all duration-500 rotate-3 group-hover:rotate-0",
                            steps[activeStep].color
                        )}>
                            {React.createElement(steps[activeStep].icon, { size: 48 })}
                        </div>
                    </div>

                    {/* Right Side: Detailed Info */}
                    <div className="flex-1 space-y-4 text-center md:text-left">
                        <div className="space-y-1">
                            <div className="flex items-center justify-center md:justify-start gap-2">
                                <span className={cn(
                                    "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/90",
                                    steps[activeStep].color
                                )}>
                                    Etapa {activeStep + 1}
                                </span>
                                <span className="text-muted-foreground text-sm font-medium">
                                    {steps[activeStep].subtitle}
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                                {steps[activeStep].title}
                            </h2>
                        </div>

                        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                            {steps[activeStep].description}
                        </p>

                        {/* Sector Screenshot */}
                        <div className="relative mt-2 group/img rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-muted/20 max-w-3xl">
                            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent z-10 opacity-0 group-hover/img:opacity-100 transition-opacity" />
                            <img
                                src={`/images/flow/fluxo_${steps[activeStep].id}.png`}
                                alt={`Interface do setor ${steps[activeStep].title}`}
                                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover/img:scale-[1.02]"
                            />
                        </div>

                        <div className="pt-4 flex flex-wrap gap-4 justify-center md:justify-start">
                            <button
                                onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background font-bold text-sm hover:opacity-90 transition-all active:scale-95 shadow-lg"
                            >
                                Próximo Passo
                                <ChevronRight size={16} />
                            </button>

                            <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-border bg-muted/50 text-muted-foreground text-xs font-semibold">
                                Setor Responsável: {steps[activeStep].title}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Grid for quick scan */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {steps.map((step, idx) => (
                    <button
                        key={step.id + "-thumb"}
                        onClick={() => setActiveStep(idx)}
                        className={cn(
                            "p-4 rounded-2xl border text-left transition-all duration-300 group",
                            activeStep === idx
                                ? "bg-card border-primary ring-1 ring-primary/20 shadow-md"
                                : "bg-muted/30 border-transparent hover:bg-muted/50"
                        )}
                    >
                        <div className="flex items-center gap-3">
                            <div className={cn(
                                "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform",
                                activeStep === idx ? step.color + " text-white" : "bg-muted text-muted-foreground group-hover:scale-110"
                            )}>
                                {React.createElement(step.icon, { size: 16 })}
                            </div>
                            <div className="flex flex-col min-w-0">
                                <span className="text-[10px] font-bold uppercase tracking-tighter opacity-50">Etapa 0{idx + 1}</span>
                                <span className="text-sm font-bold truncate">{step.title}</span>
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
