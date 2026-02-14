import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Sidebar } from "@/components/Sidebar";
import { getSidebarSections } from "@/lib/content";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "EduSaaS Docs",
  description: "Manual do Usuário da plataforma EduSaaS",
  icons: {
    icon: [
      { url: "/logo.png", sizes: "any", type: "image/png" },
      { url: "/logo-dark.png", sizes: "any", type: "image/png", media: "(prefers-color-scheme: dark)" },
    ],
    shortcut: ["/logo.png"],
    apple: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sections = getSidebarSections();

  const sidebarData = sections.map((s) => ({
    title: s.title,
    items: s.items.map((i) => ({
      slug: i.slug,
      title: i.title,
      icon: i.icon,
    })),
  }));

  return (
    <html lang="pt-BR" suppressHydrationWarning className={inter.variable}>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Sidebar sections={sidebarData} />
          <main className="lg:pl-[280px] min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
