import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface DocMeta {
  slug: string;
  title: string;
  description: string;
  icon: string;
  section: string;
  order: number;
}

export interface Doc extends DocMeta {
  content: string;
}

const contentDir = path.join(process.cwd(), "src/content");

export function getAllDocs(): DocMeta[] {
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));
  const docs = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
    const { data } = matter(raw);
    return {
      slug,
      title: data.title || slug,
      description: data.description || "",
      icon: data.icon || "FileText",
      section: data.section || "Geral",
      order: data.order ?? 99,
    };
  });
  return docs.sort((a, b) => a.order - b.order);
}

export function getDocBySlug(slug: string): Doc | null {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title || slug,
    description: data.description || "",
    icon: data.icon || "FileText",
    section: data.section || "Geral",
    order: data.order ?? 99,
    content,
  };
}

export function getDocSlugs(): string[] {
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export interface SidebarSection {
  title: string;
  items: DocMeta[];
}

export function getSidebarSections(): SidebarSection[] {
  const docs = getAllDocs();
  const sectionMap = new Map<string, DocMeta[]>();
  for (const doc of docs) {
    const items = sectionMap.get(doc.section) || [];
    items.push(doc);
    sectionMap.set(doc.section, items);
  }
  const sectionOrder = [
    "Introdução",
    "Primeiros Passos",
    "Módulos",
    "Gestão",
    "Configuração",
    "Ajuda",
  ];
  const sections: SidebarSection[] = [];
  for (const title of sectionOrder) {
    const items = sectionMap.get(title);
    if (items) {
      sections.push({ title, items });
      sectionMap.delete(title);
    }
  }
  for (const [title, items] of sectionMap) {
    sections.push({ title, items });
  }
  return sections;
}

export function getAdjacentDocs(slug: string): {
  prev: DocMeta | null;
  next: DocMeta | null;
} {
  const docs = getAllDocs();
  const idx = docs.findIndex((d) => d.slug === slug);
  return {
    prev: idx > 0 ? docs[idx - 1] : null,
    next: idx < docs.length - 1 ? docs[idx + 1] : null,
  };
}
