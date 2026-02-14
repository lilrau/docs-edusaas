import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getDocBySlug, getDocSlugs, getAdjacentDocs } from "@/lib/content";
import { mdxComponents } from "@/components/MdxComponents";
import { TableOfContents } from "@/components/TableOfContents";
import { Footer } from "@/components/Footer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  const slugs = getDocSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const doc = getDocBySlug(params.slug);
  if (!doc) return { title: "Não encontrado" };
  return {
    title: `${doc.title} — EduSaaS Docs`,
    description: doc.description,
  };
}

export default function DocPage({ params }: { params: { slug: string } }) {
  const doc = getDocBySlug(params.slug);
  if (!doc) notFound();

  const { prev, next } = getAdjacentDocs(params.slug);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="flex gap-10">
          {/* Main content */}
          <article className="flex-1 min-w-0 max-w-3xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-[var(--text-muted)] mb-6">
              <Link
                href="/"
                className="hover:text-[var(--text-primary)] transition-colors"
              >
                Início
              </Link>
              <span>/</span>
              <span className="text-[var(--text-secondary)]">{doc.title}</span>
            </nav>

            {/* Header */}
            <header className="mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-3">
                {doc.title}
              </h1>
              {doc.description && (
                <p className="text-lg text-[var(--text-secondary)]">
                  {doc.description}
                </p>
              )}
            </header>

            {/* MDX Content */}
            <div className="prose-docs">
              <MDXRemote source={doc.content} components={mdxComponents} />
            </div>

            {/* Prev/Next Navigation */}
            <nav className="flex items-stretch gap-4 mt-16 pt-8 border-t border-[var(--border-color)]">
              {prev ? (
                <Link
                  href={`/docs/${prev.slug}`}
                  className="flex-1 group flex items-center gap-3 p-4 rounded-lg border border-[var(--border-color)] hover:border-brand-400 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-[var(--text-muted)] group-hover:text-brand-500 transition-colors" />
                  <div>
                    <p className="text-xs text-[var(--text-muted)] mb-0.5">
                      Anterior
                    </p>
                    <p className="text-sm font-medium text-[var(--text-primary)] group-hover:text-brand-500 transition-colors">
                      {prev.title}
                    </p>
                  </div>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
              {next ? (
                <Link
                  href={`/docs/${next.slug}`}
                  className="flex-1 group flex items-center justify-end gap-3 p-4 rounded-lg border border-[var(--border-color)] hover:border-brand-400 transition-colors text-right"
                >
                  <div>
                    <p className="text-xs text-[var(--text-muted)] mb-0.5">
                      Próximo
                    </p>
                    <p className="text-sm font-medium text-[var(--text-primary)] group-hover:text-brand-500 transition-colors">
                      {next.title}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[var(--text-muted)] group-hover:text-brand-500 transition-colors" />
                </Link>
              ) : (
                <div className="flex-1" />
              )}
            </nav>
          </article>

          {/* Table of Contents */}
          <TableOfContents />
        </div>
      </div>
      <Footer />
    </div>
  );
}
