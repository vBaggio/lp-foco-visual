# Foco Gestão Visual — Landing Page

Landing page B2B para a **[Foco Gestão Visual](https://wa.me/5519983347475)** — soluções de gestão visual industrial sob medida para grandes indústrias (Limeira, SP · 10+ anos · clientes: Continental, FORVIA, Hyundai, Royal Canin, MANN+HUMMEL).

## Estrutura

```
docs/                       Spec do projeto
  DESIGN.md                   Design system, tokens, motion, sistema atmosférico
  LANDING.md                  9 seções da landing + spec do Hero
  MARKETING.md                Posicionamento, personas, copy base

assets/                     Source-of-truth (não servido)
  brand/                      Logo SVG + XCF
  images/                     Fotos validadas para produção

preview/                    Referência visual viva (HTML estático)
src/                        LP de produção (stack TBD)

.claude/skills/foco-builder/  Skill: workflow + verificação para construir seções
```

## Status

| | |
|---|---|
| Design system | ✅ Fechado (`docs/DESIGN.md`) |
| Estrutura de seções | ✅ 9 seções (`docs/LANDING.md`) |
| Hero | ✅ Validado (`preview/index.html`) |
| Stack de produção | ⏳ A definir (candidato: Astro + Vercel) |
| LP em produção | ⏳ A iniciar em `src/` |

## Visualizar referência

```bash
.claude/skills/foco-builder/scripts/serve.sh preview 8080
# http://localhost:8080
```

## Para agentes de IA

`CLAUDE.md` carrega contexto. A skill `foco-builder` (em `.claude/skills/`) é ativada ao trabalhar em qualquer seção da LP.

## License

Proprietary — Foco Gestão Visual.
