"use client";

import { ArrowRight, ArrowDown } from "lucide-react";

const steps = [
  { name: "Telepesquisa", sub: "Captação", color: "bg-blue-500" },
  { name: "Teleprojeto", sub: "Agendamento", color: "bg-indigo-500" },
  { name: "Recepção", sub: "Check-in", color: "bg-violet-500" },
  { name: "Comercial", sub: "Matrícula", color: "bg-purple-500" },
  { name: "Administrativo", sub: "Contrato", color: "bg-fuchsia-500" },
  { name: "Pedagógico", sub: "Ensino", color: "bg-pink-500" },
  { name: "RH", sub: "Emprego", color: "bg-rose-500" },
  { name: "Financeiro", sub: "Controle", color: "bg-orange-500" },
];

export function FlowDiagram() {
  return (
    <div className="my-8">
      {/* Desktop */}
      <div className="hidden md:block">
        <div className="flex items-center justify-center gap-1 flex-wrap">
          {steps.map((step, i) => (
            <div key={step.name} className="flex items-center gap-1">
              <div className="flex flex-col items-center">
                <div
                  className={`${step.color} text-white px-4 py-3 rounded-lg text-center min-w-[120px] shadow-lg`}
                >
                  <div className="font-semibold text-sm">{step.name}</div>
                  <div className="text-xs opacity-80">{step.sub}</div>
                </div>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="w-4 h-4 text-[var(--text-muted)] flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col items-center gap-1">
        {steps.map((step, i) => (
          <div key={step.name} className="flex flex-col items-center">
            <div
              className={`${step.color} text-white px-6 py-3 rounded-lg text-center w-48 shadow-lg`}
            >
              <div className="font-semibold text-sm">{step.name}</div>
              <div className="text-xs opacity-80">{step.sub}</div>
            </div>
            {i < steps.length - 1 && (
              <ArrowDown className="w-4 h-4 text-[var(--text-muted)] my-1" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
