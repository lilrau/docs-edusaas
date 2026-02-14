import { getAllDocs } from "@/lib/content";
import { ModuleCard } from "@/components/ModuleCard";
import { Footer } from "@/components/Footer";
import { BookOpen, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const docs = getAllDocs();

  const introSection = docs.filter((d) => d.section === "Introdução");
  const modulesSection = docs.filter((d) => d.section === "Módulos");
  const gestaoSection = docs.filter((d) => d.section === "Gestão");
  const configSection = docs.filter((d) => d.section === "Configuração");
  const ajudaSection = docs.filter((d) => d.section === "Ajuda");
  const primeirosPassos = docs.filter((d) => d.section === "Primeiros Passos");

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--bg-card)]/60">
        {/* Background Image with cinematic overlays */}
        <div className="absolute inset-0">
          <img
            src="/cover_crop.webp"
            alt="EduSaaS Background"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-[var(--bg-primary)]/90 to-[var(--bg-primary)]/30 dark:from-black/100" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[var(--bg-primary)]/100 via-[var(--bg-primary)]/70 to-transparent" />
          <div className="absolute inset-0 backdrop-blur-sm" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/99 to-transparent" />
          <div className="absolute -top-24 right-10 h-64 w-64 rounded-full bg-brand-500/20 blur-[120px]" />
        </div>

        {/* Content */}
        <div className="relative max-w-5xl mx-auto px-6 pt-16 pb-14 lg:px-10 lg:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm font-medium text-white/90 backdrop-blur-sm dark:border-white/20">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
            Manual oficial de operação
          </div>
          <div className="mt-12 flex items-start gap-4">
            <div>
              <h1 className="text-4xl font-bold text-white drop-shadow-lg lg:text-5xl">
                Manual do Usuário - EduSaaS
              </h1>
              <p className="mt-2 text-lg text-white/80">
                Documentação completa para acelerar a operação de captação, matrícula e retenção
                em um único painel.
              </p>
            </div>
          </div>

          <div className="mt-24 flex flex-wrap items-center gap-4">
            <Link
              href="/docs/introducao"
              className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-2.5 text-brand-600 font-semibold shadow-lg shadow-white/20 transition hover:bg-white"
            >
              Explorar documentação
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/docs/fluxo-de-trabalho"
              className="inline-flex items-center gap-2 rounded-full border border-white/50 px-5 py-2.5 text-white/80 backdrop-blur-md transition hover:border-white"
            >
              Ver fluxo operacional
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Start Cards */}
      {primeirosPassos.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 pb-12 mt-6">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
            Primeiros Passos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {primeirosPassos.map((doc) => (
              <ModuleCard
                key={doc.slug}
                title={doc.title}
                description={doc.description}
                icon={doc.icon}
                slug={doc.slug}
              />
            ))}
          </div>
        </section>
      )}

      {/* Intro */}
      {introSection.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 pb-12">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
            Introdução
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {introSection.map((doc) => (
              <ModuleCard
                key={doc.slug}
                title={doc.title}
                description={doc.description}
                icon={doc.icon}
                slug={doc.slug}
              />
            ))}
          </div>
        </section>
      )}

      {/* Modules */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
          Módulos do Sistema
        </h2>
        <p className="text-[var(--text-secondary)] mb-6">
          Explore cada módulo do EduSaaS em detalhe.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {modulesSection.map((doc) => (
            <ModuleCard
              key={doc.slug}
              title={doc.title}
              description={doc.description}
              icon={doc.icon}
              slug={doc.slug}
            />
          ))}
        </div>
      </section>

      {/* Gestão */}
      {gestaoSection.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 pb-12">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
            Gestão & Configuração
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...gestaoSection, ...configSection].map((doc) => (
              <ModuleCard
                key={doc.slug}
                title={doc.title}
                description={doc.description}
                icon={doc.icon}
                slug={doc.slug}
              />
            ))}
          </div>
        </section>
      )}

      {/* Ajuda */}
      {ajudaSection.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 pb-12">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
            Ajuda & Referência
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ajudaSection.map((doc) => (
              <ModuleCard
                key={doc.slug}
                title={doc.title}
                description={doc.description}
                icon={doc.icon}
                slug={doc.slug}
              />
            ))}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
