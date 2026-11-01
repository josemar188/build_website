# build_website

Repositório com vários websites. Cada site vive na sua própria pasta dentro de `sites/` e é independente: tem as suas dependências, a sua build e pode ser publicado à parte.

```
build_website/
├── .claude/
│   ├── settings.json          ← aprova os servidores MCP do projeto
│   └── skills/ui-ux-pro-max/  ← skill de design partilhada por todos os sites
├── .mcp.json                  ← servidores MCP (21st, Higgsfield)
└── sites/
    ├── lia-psicologa/         ← site da psicóloga Lia (Next.js, PT/UK)
    ├── entregas-montagem/     ← entregas IKEA e montagem de móveis (Next.js, PT)
    ├── entregas-montagem-glass/ ← versão escura com vidro líquido (Vite + React)
    ├── joao-dourique/         ← Restaurante João d'Ourique (Next.js, PT)
    └── rota-dos-petiscos/     ← Rota dos Petiscos · Terra & Mar (Next.js, PT)
```

## Sites

| Pasta | Descrição | Tecnologia |
|---|---|---|
| [`sites/lia-psicologa`](sites/lia-psicologa) | Psicóloga Lia, consultas online, PT/UK | Next.js 16, TypeScript, Tailwind 4, Motion |
| [`sites/entregas-montagem`](sites/entregas-montagem) | Entrega de compras IKEA e montagem de móveis, Grande Lisboa e Setúbal, pedidos por WhatsApp | Next.js 16, TypeScript, Tailwind 4, Motion |
| [`sites/entregas-montagem-glass`](sites/entregas-montagem-glass) | Versão escura e cinematográfica do site de entregas (vídeo de fundo, vidro líquido) | Vite, React, TypeScript, Tailwind 4, Framer Motion |
| [`sites/joao-dourique`](sites/joao-dourique) | Restaurante João d'Ourique (Amora, Seixal): escuro e dourado, ementa, reservas por telefone | Next.js 16, TypeScript, Tailwind 4, Motion |
| [`sites/rota-dos-petiscos`](sites/rota-dos-petiscos) | Rota dos Petiscos · Terra & Mar (Amora): editorial claro, ementa Terra/Mar, sangrias, reservas | Next.js 16, TypeScript, Tailwind 4, Motion |

## Trabalhar num site

Entra na pasta do site e corre:

```bash
cd sites/lia-psicologa
npm install
npm run dev
```

Abre o endereço que aparece no terminal (Next.js: http://localhost:3000, Vite: http://localhost:5173).

## Criar um site novo

Pede ao Claude Code, por exemplo: *"cria um site novo em `sites/restaurante-x` para um restaurante"*. Cada site novo fica numa pasta própria dentro de `sites/`, com nome em minúsculas e hífenes.

## Publicar (Vercel)

Ao importar o repositório na Vercel, escolhe em **Root Directory** a pasta do site (por exemplo `sites/lia-psicologa`). Para publicar outro site do mesmo repositório, cria outro projeto na Vercel com a pasta desse site.

## Segurança

Os sites são estáticos: não têm servidor próprio, base de dados, contas nem API. Mesmo assim:

- **Cabeçalhos de segurança** (CSP, HSTS, `nosniff`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, COOP):
  - sites Next.js: em `next.config.ts` (e `X-Powered-By` desligado);
  - site Vite: em `vercel.json` (Vercel), `public/_headers` (Netlify/Cloudflare Pages) e `security-headers.json` (`npm run preview`).
- **Novo domínio externo** (vídeo, imagens, fontes): junta-o à CSP, senão o browser bloqueia-o.
- **Formulários**: só preparam uma mensagem para o WhatsApp; o texto é limitado, limpo e codificado. Nada é guardado.
- **Segredos**: nunca no repositório. Ficheiros `.env*` e `.claude/settings.local.json` estão no `.gitignore`; o `.mcp.json` só lê a variável `API_KEY_21ST`.
- **Dependências**: corre `npm audit --omit=dev` em cada site antes de publicar.
