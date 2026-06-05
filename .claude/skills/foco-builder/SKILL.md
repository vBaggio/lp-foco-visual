---
name: foco-builder
description: Use when building, modifying, or reviewing any section/component of the Foco Gestão Visual landing page. Loads project context, design system, brand restrictions, asset inventory, code patterns and verification workflow.
---

# Foco Builder

## Quando ativar

Sempre que o usuário pedir para construir, modificar, revisar ou explicar qualquer seção, componente ou estilo da LP da Foco Gestão Visual.

## Workflow obrigatório antes de codar

1. **Identidade & tom** — `docs/MARKETING.md`. B2B industrial, nunca startup. Direto, técnico, confiante.
2. **Spec da seção** — `docs/LANDING.md`. Não improvise estrutura.
3. **Design system** — `docs/DESIGN.md`. Respeitar tokens (cores, tipografia, motion, sistema atmosférico §11 para seções dark).
4. **Referência visual viva** — `preview/index.html` é o padrão de craft do Hero. Replicar gradient bridge, easing, calibração de texturas em outras seções dark.
5. **Assets** — usar apenas `assets/brand/` (logo) e `assets/images/` (fotos).

## Regras críticas

- **Logo sobre fundo escuro**: SEMPRE via `.logo-white` (CSS mask sobre `logo.svg`). Nunca usar PNG branco.
- **Componentes flutuando**: evitar cards isolados sem âncora. Usar gradient bridges para integrar.
- **Easing**: padrão `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out) em todas as entradas. Hover/states curtos: 150-200ms ease.
- **Texturas atmosféricas**: copiadas do preview, calibradas. Não duplicar receita sem necessidade — algumas seções pedem light, não dark.
- **Placeholders**: 60+ clientes e 10+ anos são confirmados. Prazo médio, total de projetos, estados — placeholders ⚠️ até confirmação do cliente.

## Decisão dark vs light por seção

Ver tabela em `docs/LANDING.md` ("Tom dark vs light por seção"). Source-of-truth única — não duplicar aqui.

## Padrões de código

Os blocos canônicos (navbar dark transparente, gradient bridge, navy strip, métricas com dividers, sistema atmosférico) estão em `preview/index.html`. Copiar e adaptar para `src/`, não reescrever do zero.

## Verificação antes de marcar concluído

1. Servidor local — `.claude/skills/foco-builder/scripts/serve.sh [preview|src] [porta]`
2. Desktop largo (≥1440px) — respiro lateral correto via `var(--gutter-x)`?
3. Mobile (375px) — sem horizontal scroll, sem texto cortado?
4. `prefers-reduced-motion: reduce` — animações decorativas desativam?
5. Logo sobre fundo escuro usa `.logo-white` via CSS mask?
6. Contraste texto ≥4.5:1?
7. Tom: nenhuma frase soa startup ou superlativa vazia?

## Anti-patterns (rejeitar)

- "Soluções inovadoras" / "qualidade diferenciada" / "parceiro estratégico" — vago, sem prova
- Cards flutuando isolados (problema identificado no Hero B/C)
- Triptych de 3 imagens não-coerentes (problema identificado no Hero D triptych)
- Gradientes neon, paletas vibrantes, urgência artificial
- Logo branco como arquivo separado — sempre usar `.logo-white` via CSS mask

## Status

- Repositório em fase de produção (brainstorming/spec finalizados)
- Hero validado (`preview/index.html`)
- Próximo: definir stack de produção (Astro recomendado para LP estática + Vercel) e iniciar `src/`
