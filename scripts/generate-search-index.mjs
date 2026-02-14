import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "src/content");
const publicDir = path.join(process.cwd(), "public");

const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));

const index = files
  .map((file) => {
    const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
    const { data } = matter(raw);
    return {
      slug: file.replace(/\.mdx$/, ""),
      title: data.title || "",
      description: data.description || "",
      section: data.section || "",
      order: data.order || 99,
    };
  })
  .sort((a, b) => a.order - b.order);

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(
  path.join(publicDir, "search-index.json"),
  JSON.stringify(index, null, 2)
);

console.log(`Generated search index with ${index.length} entries.`);
