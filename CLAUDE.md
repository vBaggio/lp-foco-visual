# Foco Gestão Visual

Empresa B2B industrial em Limeira, SP — 10+ anos fabricando e instalando soluções de gestão visual sob medida (quadros Kanban/Kaizen, sinalização, displays, totens) para grandes indústrias. Clientes tier-1: Continental, FORVIA, Hyundai, Royal Canin, MANN+HUMMEL.

## Documentação

| Arquivo | Conteúdo |
|---------|----------|
| `docs/DESIGN.md` | Design system completo — paleta, tipografia, motion, sistema atmosférico, tokens |
| `docs/LANDING.md` | Estrutura das 9 seções + spec do Hero atual |
| `docs/MARKETING.md` | Posicionamento, diferenciais, personas, copy base |

## Estrutura do repositório

```
docs/                           Spec (DESIGN, LANDING, MARKETING)
assets/brand/                   Logo SVG (masters)
assets/images/                  Fotos validadas — source-of-truth canônico
src/                            LP de produção (Next.js 16 + App Router + Tailwind v4)
.claude/skills/foco-builder/    Skill do projeto: workflow + scripts
```

Assets em `assets/` são sincronizados para `src/public/{brand,images}/` automaticamente via `npm run sync-assets` (executado como prebuild/predev). Não editar `src/public/` diretamente.

## Decisão visual atual

**Hero — Industrial Cinematic** (implementado em `src/app/components/Hero.tsx` + `hero.module.css`):
- Full-bleed dark com imagem cinematográfica + gradient bridge para zona de texto
- Slider auto-rotate entre 3 instalações (FORVIA, Hyundai x2)
- Texturas atmosféricas calibradas: dot grid sutil, grain SVG, ambient blob, 2 light streaks
- Easing premium `cubic-bezier(0.16, 1, 0.3, 1)`
- Logo branco via `.logo-white` (CSS mask sobre `/brand/logo.svg`)

## Restrições críticas

1. **Logo** — sem versão para fundos escuros. Em seções dark, usar `.logo-white` via CSS mask. Em seções claras, usar `logo.svg` direto.
2. **Números placeholder** — 60+ clientes e 10+ anos estão confirmados. Prazo médio, total de projetos e estados atendidos são **placeholders** — substituir antes de publicar.
3. **Tom** — B2B industrial, nunca startup. Direto, técnico, confiante. Sem superlativas, sem urgência artificial.
4. **Componentes** — evitar cards/elementos flutuando isolados. Composições integradas (gradient bridges, não hard edges).

## Status (2026-05-27)

✅ Design system fechado
✅ Estrutura de seções aprovada
✅ Hero implementado em `src/app/components/`
✅ Next.js 16 + App Router + Tailwind v4 configurados
✅ Deploy Vercel configurado
⏳ Próximo: construir seções 2 a 9 sequencialmente

## Pendências (aguardando input do cliente)

- [ ] Prazo médio de entrega em dias úteis
- [ ] Total de projetos entregues
- [ ] Número de estados atendidos
- [ ] Logos dos clientes (SVG monocromático)
- [ ] Cases reais com imagem + contexto (3 para seção Portfólio)
- [ ] Depoimentos reais com nome e cargo
- [ ] Contato comercial (WhatsApp ou formulário?) e endereço completo do footer
- [ ] Objetivo do novo site (atrair / reconverter / ambos)

## Para construir seções

Invoque a skill `foco-builder` — encapsula workflow, padrões de código (gradient bridge, navy panels, process bar), regras de tom, decisões de logo e checklist de verificação.
