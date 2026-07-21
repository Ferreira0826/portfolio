# Portfólio — Gabriel Ferreira

Portfólio de projetos de dados construído com **Astro + Tailwind**. Site estático, rápido, e hospedado no Vercel (sempre no ar, sem "dormir").

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:4321`.

## Build de produção

```bash
npm run build      # gera a pasta dist/
npm run preview    # testa o build localmente
```

## Editar o conteúdo

Todo o conteúdo dos cases vive em **um único arquivo**:

```
src/data/projects.js
```

- Cada objeto no array `projects` vira uma página automática em `/projetos/[slug]`.
- Edite `problem`, `layers`, `decisions`, `metrics` e `stack` de cada projeto.
- Os dados do topo (nome, intro, links) ficam no objeto `profile` no fim do arquivo.

Não precisa mexer em nenhum outro arquivo pra atualizar os projetos.

## Publicar no Vercel

1. Suba este projeto para um repositório no GitHub.
2. Em [vercel.com](https://vercel.com), clique em **Add New → Project** e importe o repositório.
3. O Vercel detecta Astro automaticamente. É só clicar em **Deploy**.
4. Cada `git push` na branch principal republica o site sozinho.

Framework preset: **Astro** · Build command: `npm run build` · Output: `dist`

## Estrutura

```
src/
  data/projects.js          ← EDITE AQUI (todo o conteúdo)
  pages/
    index.astro             ← home (hero + grid + sobre)
    projetos/[slug].astro   ← case completo de cada projeto
  components/               ← Header, Footer, ProjectCard, Icon
  layouts/Base.astro        ← layout + <head> + scroll reveal
  styles/global.css         ← tema (cores/fontes via @theme), grid de fundo, animações
```

Stack: Astro 7 + Tailwind v4 (via `@tailwindcss/vite`). O tema — cores e fontes — fica no bloco `@theme` dentro de `src/styles/global.css`, não em arquivo de config separado.
