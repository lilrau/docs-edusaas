import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6">
      <h1 className="text-6xl font-bold text-brand-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-2">
        Página não encontrada
      </h2>
      <p className="text-[var(--text-secondary)] mb-8 text-center max-w-md">
        A página que você está procurando não existe ou foi movida.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white rounded-lg font-medium transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Voltar ao início
      </Link>
    </div>
  );
}
