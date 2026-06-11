# Foco Gestão Visual — Landing Page

Empresa B2B industrial em Limeira, SP — 10+ anos fabricando e instalando soluções de gestão visual sob medida (quadros Kanban/Kaizen, sinalização, displays, totens) para grandes indústrias. Clientes tier-1: Continental, FORVIA, Hyundai, Royal Canin, MANN+HUMMEL.

## Estado atual (pós-reset)

Repositório passou por um reset estrutural. Foram preservados apenas os materiais consolidados:

- **Stack**: Next.js 16 + App Router + React 19 + TypeScript + Tailwind CSS v4 + static export, hospedagem Vercel
- **Hero section**: implementada em `src/app/components/` (Hero, HeroSlider, Navbar, hero.module.css)
- **Assets**: logo SVG em `assets/brand/`, fotos IA placeholder em `assets/images/`
- **Tipografia**: Plus Jakarta Sans (headings) + Inter (body) + JetBrains Mono (labels técnicos) via next/font
- **Contexto de empresa**: `docs/MARKETING.md` — posicionamento, voz, personas, objetivo da LP

## O que foi dropado e está sendo redefinido

- Paleta de cores
- Estrutura, composição e ordem das seções
- Copy
- Design system (exceto typography)
- Iconografia
- Estilo visual
- Decisões dark/light por seção

Estes itens entrarão em processo de concepção via brainstorming, com spec resultante em `docs/superpowers/specs/`.

## Estrutura do repositório

```
docs/MARKETING.md                       Contexto da empresa + voz + objetivo
assets/brand/                           Logo SVG
assets/images/                          Fotos IA validadas (FORVIA, Hyundai x2)
src/app/                                LP em Next.js 16
src/app/components/Hero,Navbar,HeroSlider, hero.module.css
src/app/globals.css                     Tailwind + typography (mínimo pós-reset)
src/app/layout.tsx                      Carrega 3 fontes via next/font
src/app/page.tsx                        Renderiza Navbar + Hero
src/scripts/sync-assets.mjs             Sincroniza assets para public/ no prebuild
```

## Rodar localmente

```bash
cd src
npm install
npm run dev    # http://localhost:3000
```

## Para agentes de IA

1. **Tom & contexto**: `docs/MARKETING.md` é a referência de voz e posicionamento. B2B industrial, direto, técnico, sem startup.
2. **Decisões visuais e estruturais**: ainda não definidas pós-reset. Aguardar conclusão do brainstorming antes de gerar componentes/seções.
3. **Hero consolidado**: pode ser referência de craft (motion, polish, atenção a detalhe). Mas os tokens visuais (paleta, easing, atmosfera) serão potencialmente redefinidos.
