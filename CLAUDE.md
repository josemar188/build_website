# Instruções para o Claude

Este repositório contém **vários websites independentes**, um por pasta em `sites/<nome>/`.

- Fala com o utilizador em português de Portugal.
- Cada site é um projeto autónomo: corre `npm install`, `npm run dev`, `npm run build` e `npm run lint` **dentro da pasta do site**, nunca na raiz.
- Há sites em Next.js e sites em Vite + React; vê o `package.json` de cada um.
- Antes de mexer num site Next.js, lê o `AGENTS.md` dessa pasta (a versão do Next.js tem mudanças que não conheces).
- Site novo: cria-o em `sites/<nome-em-minusculas-com-hifens>/` e acrescenta-o à tabela "Sites" do `README.md`.
- Usa a skill `ui-ux-pro-max` para decisões de design (cores, tipografia, layout, acessibilidade).
- Servidores MCP do projeto: `21st` (componentes de UI; precisa da variável `API_KEY_21ST`) e `higgsfield` (geração de imagem e vídeo; login por browser).
- Não ponhas chaves nem segredos em ficheiros do repositório.
- Textos provisórios ficam marcados com `EDITAR` para o utilizador substituir.
