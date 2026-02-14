"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, FileText, ArrowLeft } from "lucide-react";

interface SearchItem {
  slug: string;
  title: string;
  description: string;
  section: string;
}

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [allDocs, setAllDocs] = useState<SearchItem[]>([]);

  useEffect(() => {
    fetch("/search-index.json")
      .then((r) => r.json())
      .then((data) => setAllDocs(data))
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setResults(allDocs);
      return;
    }
    const q = query.toLowerCase();
    const filtered = allDocs.filter(
      (doc) =>
        doc.title.toLowerCase().includes(q) ||
        doc.description.toLowerCase().includes(q) ||
        doc.section.toLowerCase().includes(q)
    );
    setResults(filtered);
  }, [query, allDocs]);

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 lg:py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Voltar ao início
      </Link>

      <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-6">
        Buscar na documentação
      </h1>

      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Digite para buscar..."
          autoFocus
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-lg"
        />
      </div>

      <p className="text-sm text-[var(--text-muted)] mb-4">
        {results.length} resultado{results.length !== 1 ? "s" : ""}{" "}
        {query && `para "${query}"`}
      </p>

      <div className="space-y-2">
        {results.map((doc) => (
          <Link
            key={doc.slug}
            href={`/docs/${doc.slug}`}
            className="block p-4 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-brand-400 transition-colors group"
          >
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-[var(--text-muted)] mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-[var(--text-primary)] group-hover:text-brand-500 transition-colors">
                  {doc.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)] mt-0.5">
                  {doc.section} — {doc.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
        {results.length === 0 && query && (
          <p className="text-center text-[var(--text-muted)] py-8">
            Nenhum resultado encontrado para &quot;{query}&quot;
          </p>
        )}
      </div>
    </div>
  );
}
