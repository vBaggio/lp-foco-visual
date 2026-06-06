# Foco Gestão Visual — Landing Page

Landing page B2B para a **[Foco Gestão Visual](https://wa.me/5519983347475)** — soluções de gestão visual industrial sob medida para grandes indústrias (Limeira, SP · 10+ anos · clientes: Continental, FORVIA, Hyundai, Royal Canin, MANN+HUMMEL).

## Estrutura

```
docs/                       Spec do projeto
  DESIGN.md                   Design system, tokens, motion, sistema atmosférico
  LANDING.md                  9 seções da landing + spec do Hero
  MARKETING.md                Posicionamento, personas, copy base

assets/                     Source-of-truth canônico
  brand/                      Logo SVG (masters)
  images/                     Fotos validadas para produção

src/                        LP em Next.js 16 + App Router + Tailwind v4
  app/                        App Router
  app/components/             Navbar, Hero, HeroSlider, ClientStrip
  scripts/sync-assets.mjs     Sincroniza assets/ → public/ no prebuild

.claude/skills/foco-builder/  Skill: workflow + verificação para construir seções
```

## Status

| | |
|---|---|
| Design system | ✅ Fechado (`docs/DESIGN.md`) |
| Estrutura das 9 seções | ✅ Specced (`docs/LANDING.md`) |
| Hero — Industrial Cinematic | ✅ Implementado (`src/app/components/`) |
| Stack | ✅ Next.js 16 + Tailwind v4, deploy Vercel static export |
| Seções 2–9 | ⏳ A construir |

## Rodar localmente

```bash
cd src
npm install
npm run dev    # http://localhost:3000
```

## Para agentes de IA

`CLAUDE.md` carrega contexto. A skill `foco-builder` (em `.claude/skills/`) é ativada ao trabalhar em qualquer seção da LP.

## License

Proprietary — Foco Gestão Visual.
