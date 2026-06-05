# Preview — Referência visual

Este diretório contém a **direção visual validada** para a landing page da Foco Gestão Visual. É HTML/CSS estático criado durante a fase de design e serve como **referência/inspiração**, não como código de produção.

O código de produção vai morar em `src/` (a stack ainda será definida — provável Astro hospedado na Vercel).

## Conteúdo

- `index.html` — hero finalizado (Industrial Cinematic com slider, gradient bridge, blueprint atmosphere)
- `images/` — assets necessários para renderizar (logo + 3 fotos IA validadas)

## Visualizar

```bash
cd preview
python3 -m http.server 8080
# Abrir http://localhost:8080
```

## Decisões encodadas

Ver `docs/DESIGN.md` para tokens e sistema atmosférico. Resumo do que esta página mostra:

- **Composição** — full-bleed dark com imagem cinematográfica + gradient bridge para zona de texto à esquerda. Sem componentes flutuando.
- **Slider** — 3 instalações reais (FORVIA, Hyundai x2) com crossfade de 1.4s e auto-rotate de 6s.
- **Texturas atmosféricas** — dot grid azul sutil na zona escura, grain SVG, ambient blob com drift lento, 2 light streaks + lens flare.
- **Tipografia** — Plus Jakarta Sans 800 no headline, Inter 400 no corpo, JetBrains Mono nos accents técnicos.
- **Easing** — `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out premium) em todas as entradas.
- **Logo** — `.logo-white` via CSS mask (única forma de usar o logo sobre fundo escuro).

## O que NÃO está aqui

As outras 8 seções da landing (clientes, métricas, diferenciais, produtos, portfólio, FAQ, CTA, footer) ainda não foram prototipadas. Estão especificadas em `docs/LANDING.md` e serão construídas direto em `src/` após definição de stack.
