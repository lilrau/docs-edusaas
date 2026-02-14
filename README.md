# EduSaaS Docs

Manual do Usuário da plataforma EduSaaS — Sistema completo de gestão para escolas de cursos profissionalizantes.

## 🚀 Visão Geral

Este site é a documentação oficial da plataforma EduSaaS, construída com:

- **Next.js 14** com App Router
- **TypeScript** para type safety
- **Tailwind CSS** para estilização
- **Dark/Light theme** com next-themes
- **MDX** para conteúdo dinâmico
- **Lucide React** para ícones

## 📚 Conteúdo

A documentação cobre todos os 11 módulos do sistema:

- **Telepesquisa** — Captação de leads
- **Teleprojeto** — Agendamento de visitas
- **Líder Tele** — Supervisão das equipes
- **Recepção** — Check-in e triagem
- **Comercial** — Atendimento e matrículas
- **Administrativo** — Gestão de alunos e contratos
- **Pedagógico** — Acompanhamento acadêmico
- **Financeiro** — Controle financeiro completo
- **Recursos Humanos** — Encaminhamento profissional
- **Multifiliais** — Visão consolidada
- **Área do Aluno** — Aulas interativas

## 🛠️ Desenvolvimento

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start
```

### Estrutura do Projeto

```
src/
├── app/                     # Páginas Next.js (App Router)
│   ├── docs/[slug]/         # Rotas dinâmicas para docs
│   ├── busca/               # Página de busca
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Home page
│   └── not-found.tsx        # Página 404
├── components/              # Componentes React
│   ├── Callout.tsx          # Alertas e dicas
│   ├── FlowDiagram.tsx      # Diagrama de fluxo
│   ├── Footer.tsx           # Rodapé
│   ├── MdxComponents.tsx    # Componentes MDX
│   ├── ModuleCard.tsx       # Cards de módulos
│   ├── Sidebar.tsx          # Menu lateral
│   ├── TableOfContents.tsx  # TOC
│   ├── ThemeProvider.tsx    # Provider de tema
│   └── ThemeToggle.tsx      # Botão de tema
├── content/                 # Arquivos MDX
│   ├── introducao.mdx       # Conteúdo da documentação
│   ├── telepesquisa.mdx
│   └── ...
├── lib/                # Utilitários
│   ├── content.ts      # Funções de conteúdo MDX
│   └── utils.ts        # Utilitários gerais
└── styles/
    └── globals.css     # Estilos globais
```

### Adicionando Novo Conteúdo

1. Crie um arquivo `.mdx` em `src/content/`
2. Adicione frontmatter com título, descrição, ícone, seção e ordem
3. O sistema gera automaticamente o índice de busca

### Personalização

- **Cores:** Edite `tailwind.config.ts`
- **Tema:** Variáveis CSS em `src/styles/globals.css`
- **Componentes:** Modifique arquivos em `src/components/`

## 🌐 Deploy

O site está configurado para exportação estática:

```bash
npm run build
# Gera pasta `out/` com arquivos estáticos
```

## 📄 Licença

© 2026 EduSaaS — Todos os direitos reservados

---

**Desenvolvido com ❤️ para a comunidade EduSaaS**
