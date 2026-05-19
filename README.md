# Alvanito Nayani — Website Institucional

Website institucional premium para a **Alvanito Nayani — Consultoria e Prestação de Serviços**, especializada em consultoria jurídica, contratação pública e assessoria empresarial.

🌐 **Talatona, Luanda, Angola**

## Tecnologias

- **Next.js 16** — App Router, Server Components, SSG
- **TypeScript 5** — Strict mode
- **TailwindCSS v4** — Design system com CSS variables
- **shadcn/ui** — Componentes acessíveis
- **Lucide Icons** — Ícones SVG

## Páginas

| Página | Rota |
|---|---|
| Home | `/` |
| Sobre Nós | `/sobre-nos` |
| Serviços | `/servicos` |
| Contratação Pública | `/contratacao-publica` |
| Blog | `/blog` |
| Contacto | `/contacto` |

## Começar

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build produção
npm run build

# Iniciar produção
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Estrutura

```
├── app/                    # Next.js App Router (pages)
├── components/
│   ├── site/               # Componentes do site
│   └── ui/                 # shadcn/ui primitives
├── lib/
│   ├── site-data.ts        # Dados centralizados
│   └── utils.ts            # Utilities (cn)
└── public/                 # Static assets
```

## SEO

- Metadata por página (title, description, OG, Twitter)
- JSON-LD Schema (`LegalService`)
- Sitemap dinâmico (`/sitemap.xml`)
- Robots.txt dinâmico
- Canonical URLs

## Segurança

- Content Security Policy (CSP)
- HSTS, X-Frame-Options, X-Content-Type-Options
- Permissions-Policy
- Cross-Origin policies

## Licença

Todos os direitos reservados — Alvanito Nayani.
