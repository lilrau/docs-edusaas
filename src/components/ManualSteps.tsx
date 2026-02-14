"use client";

import React from "react";
import {
    Search,
    Calendar,
    UserCheck,
    GraduationCap,
    FileText,
    HeartHandshake,
    Briefcase,
    BarChart3,
    LucideIcon
} from "lucide-react";

interface StepItemProps {
    number: number;
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
}

const StepItem = ({ number, title, description, icon: Icon, color }: StepItemProps) => {
    return (
        <div className="relative pl-14 pb-12 last:pb-0 group">
            {/* Connector Line */}
            <div className="absolute left-[19px] top-10 bottom-0 w-[2px] bg-gradient-to-b from-border via-border/50 to-transparent last:hidden" />

            {/* Icon Badge */}
            <div className={`absolute left-0 top-0 w-10 h-10 rounded-xl ${color} flex items-center justify-center text-white shadow-lg z-10 border-4 border-background transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                <Icon size={18} />
            </div>

            <div className="flex flex-col gap-1 transition-all duration-300 group-hover:translate-x-1">
                <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground opacity-50">
                        Fase {number.toString().padStart(2, '0')}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-border/50 to-transparent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mt-1 group-hover:text-primary transition-colors">
                    {title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-2xl text-[15px]">
                    {description}
                </p>
            </div>
        </div>
    );
};

export function ManualSteps() {
    const workflowData = [
        {
            title: "Telepesquisa",
            description: "Operador encontra jovens (leads) em bases de dados, realiza o primeiro contato qualificatório e cadastra no sistema.",
            icon: Search,
            color: "bg-blue-500",
        },
        {
            title: "Teleprojeto",
            description: "Operador liga para agendar a visita presencial do jovem acompanhado do responsável legal na unidade escolar.",
            icon: Calendar,
            color: "bg-indigo-500",
        },
        {
            title: "Recepção",
            description: "Recepcionista acolhe o jovem, preenche a ficha de atendimento inicial e gerencia a fila de espera até a liberação.",
            icon: UserCheck,
            color: "bg-violet-500",
        },
        {
            title: "Comercial",
            description: "O Divulgador realiza a entrevista, apresenta os cursos disponíveis, benefícios e conclui a matrícula do aluno.",
            icon: GraduationCap,
            color: "bg-purple-500",
        },
        {
            title: "Administrativo",
            description: "Geração formal do contrato, realização do Controle de Qualidade (CQ) e baixa administrativa do pagamento inicial.",
            icon: FileText,
            color: "bg-fuchsia-500",
        },
        {
            title: "Pedagógico",
            description: "Boas-vindas oficial ao aluno, confirmação de horários e acompanhamento próximo até a efetiva primeira aula.",
            icon: HeartHandshake,
            color: "bg-pink-500",
        },
        {
            title: "Recursos Humanos",
            description: "Prospecção de empresas parceiras, gestão de vagas de emprego e encaminhamento estratégico dos alunos para o mercado.",
            icon: Briefcase,
            color: "bg-rose-500",
        },
        {
            title: "Financeiro",
            description: "Gestão completa do fluxo de caixa, conciliação bancária, emissão de boletos e análise detalhada de extratos.",
            icon: BarChart3,
            color: "bg-orange-500",
        },
    ];

    return (
        <div className="py-8 space-y-2">
            {workflowData.map((step, index) => (
                <StepItem
                    key={step.title}
                    number={index + 1}
                    title={step.title}
                    description={step.description}
                    icon={step.icon}
                    color={step.color}
                />
            ))}
        </div>
    );
}
