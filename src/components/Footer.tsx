export function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] mt-16">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center">
              <img
                src="/logo.png"
                alt="EduSaaS"
                className="w-5 h-5 dark:hidden"
              />
              <img
                src="/logo-dark.png"
                alt="EduSaaS"
                className="w-5 h-5 hidden dark:block"
              />
            </div>
            <span className="font-semibold text-[var(--text-primary)]">
              EduSaaS Docs
            </span>
          </div>
          <p className="text-sm text-[var(--text-muted)]">
            © {new Date().getFullYear()} EduSaaS — Manual do Usuário v1.0
          </p>
        </div>
      </div>
    </footer>
  );
}
