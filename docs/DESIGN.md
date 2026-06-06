# Foco Gestão Visual — Branding Kit

> Fonte única de verdade da identidade visual. Todas as decisões de design devem respeitar este documento.

---

## 1. Paleta de Cores

Paleta monocromática em azul + neutros. Sem cor de destaque separada. Tema claro como padrão.

### Primárias

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-primary` | `#1E56A0` | Cor âncora da marca. Links, acentos visuais |
| `--color-primary-heading` | `#1B4587` | Headings, botões, texto de destaque. Meio-termo entre primário e navy — legível como azul em qualquer tela |
| `--color-primary-light` | `#2B6CB0` | Azul mais saturado. Acentos e variações |
| `--color-primary-lightest` | `#E8EEF6` | Azul superfície. Backgrounds de destaque, badges, chips |
| `--color-primary-bright` | `#6EB0FF` | **Acento em seções dark** — glow, streaks, gradientes de texto, indicadores ativos |

### Tons Dark (seções cinematográficas)

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-primary-dark` | `#152D5B` | Navy. Fundo de seções dark de transição, ancoragem em fundos claros |
| `--color-primary-darker` | `#0A1530` | Navy profundo. Faixas dark contínuas (client strip, gradient bridge) |
| `--color-primary-darkest` | `#050B1A` | Quase-preto azulado. Base do hero cinematic — nunca usar `#000000` puro (OLED smear, falta de profundidade) |

### Neutros

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-white` | `#FFFFFF` | Superfícies elevadas (cards, modais, navbar) |
| `--color-neutral-50` | `#F7F8FA` | Fundo padrão da página (off-white) |
| `--color-neutral-100` | `#F1F3F5` | Fundo alternativo para seções |
| `--color-neutral-200` | `#E2E8F0` | Bordas, divisores |
| `--color-neutral-300` | `#CBD5E0` | Bordas secundárias, separadores |
| `--color-neutral-400` | `#A0AEC0` | Texto desabilitado, placeholders |
| `--color-neutral-500` | `#718096` | Texto terciário, metadados |
| `--color-neutral-600` | `#4A5568` | Texto secundário, descrições |
| `--color-neutral-700` | `#2D3748` | Texto de corpo principal |
| `--color-neutral-800` | `#1A202C` | Texto de headings |
| `--color-neutral-900` | `#1A1A1A` | Texto de máximo contraste |

### Regras de Uso

**Seções light (padrão):**
- 70% neutros (branco, off-white, cinzas) — fundos, superfícies, texto
- 25% azuis — elementos de marca, CTAs, acentos
- 5% preto (`#1A1A1A`) — ancoragem tipográfica, headings de impacto
- Fundo padrão: off-white (`--color-neutral-50`), nunca branco puro
- Branco puro reservado para superfícies elevadas (cards, navbar) com sombra sutil ou borda
- Azul primário nunca como fundo de grandes áreas — sempre como acento sobre fundo claro

**Seções dark (Hero, Métricas, CTA Final):**
- Base: `--color-primary-darkest` (`#050B1A`) — nunca preto puro
- Texto branco em duas intensidades: `#FFFFFF` (headlines) e `rgba(255,255,255,0.78)` (corpo)
- Acentos em `--color-primary-bright` (`#6EB0FF`) com glow sutil para indicadores/streaks
- Dividers em `rgba(255,255,255,0.10)` (linhas) e `rgba(255,255,255,0.06)` (bordas de navbar)

---

## 2. Tipografia

Stack dual: **personalidade nos títulos, neutralidade no corpo**. Ambas gratuitas no Google Fonts.

### Famílias

| Papel | Família | Pesos | Uso |
|-------|---------|-------|-----|
| **Display + Headings** | Plus Jakarta Sans | 600, 700, 800 | Hero, H1–H4, números de destaque, CTAs |
| **Body + UI** | Inter | 400, 500, 600 | Texto corrido, labels, navegação, tabelas, formulários |

### Escala Tipográfica

| Nível | Família | Tamanho | Peso | Line-height |
|-------|---------|---------|------|-------------|
| Display | Plus Jakarta Sans | 56px (3.5rem) | 800 | 1.1 |
| H1 | Plus Jakarta Sans | 40px (2.5rem) | 800 | 1.15 |
| H2 | Plus Jakarta Sans | 30px (1.875rem) | 700 | 1.2 |
| H3 | Plus Jakarta Sans | 24px (1.5rem) | 700 | 1.3 |
| H4 | Plus Jakarta Sans | 20px (1.25rem) | 600 | 1.35 |
| Body | Inter | 16px (1rem) | 400 | 1.7 |
| Body Small | Inter | 14px (0.875rem) | 400 | 1.6 |
| Caption | Inter | 12px (0.75rem) | 500 | 1.5 |

### Justificativa

- **Plus Jakarta Sans** (headings): sans-serif geométrica com caráter nos pesos altos (700/800). Projeta modernidade e confiança sem recorrer a serifas editoriais — alinhada com a estética industrial limpa das referências Festo/Schmalz/Bosch Rexroth.
- **Inter** (body): desenhada especificamente para leitura em tela. Neutra, alta legibilidade em tamanhos pequenos, suporta bem tabelas, formulários e longos blocos técnicos. Desaparece para o conteúdo falar.
- **Por que dual em vez de single:** uma única fonte (Plus Jakarta Sans em tudo) tende ao genérico SaaS. Par dual cria hierarquia visual perceptível sem clash — padrão validado por Stripe, Linear, Vercel.
- **Por que dual em vez de triple:** três famílias (stack anterior com Source Serif 4) introduzia dois "idiomas" de heading competindo entre si — custo de decisão alto e ganho estético marginal.

---

## 3. Iconografia

### Biblioteca

**Lucide** — fork moderna e bem mantida do Feather Icons.

### Estilo

- Tipo: **outline**
- Stroke: 1.5–2px
- Cantos: **retos** (não arredondados)
- Tamanho padrão: 24px (com variantes 16px e 20px)

### Regras

- Cor padrão: `--color-neutral-600` sobre fundo claro
- Cor sobre azul: `--color-white`
- A lupa do logo pode ser usada como **elemento decorativo pontual** (ex: ícone de seção "foco em qualidade"), mas **nunca como ícone funcional de busca** — para busca, usar o ícone padrão do Lucide

---

## 4. Logo — Variações

> As variações abaixo são especificações. A execução vetorial deve ser feita por um designer gráfico.

### Variantes necessárias

| Variante | Composição | Uso | Tamanho mínimo |
|----------|-----------|-----|----------------|
| **Completo** | "FOCO VISUAL" + lupa integrada ao F | Navbar, materiais institucionais | 120px largura |
| **Compacto** | "FOCO" + lupa integrada ao F | Espaços reduzidos, assinaturas | 80px largura |
| **Ícone** | F + lupa integrados | Favicon, avatar, ícone de app | 32px |

### Versões de cor

- **Primária:** azul (`#0F4A92`) + quase-preto (`#040709`) sobre fundo branco/claro — **uso padrão e único em tela**
- **Monocromática:** preto para uso em documentos impressos P&B

### Versão branca (fundos escuros)

Não existe arquivo separado de logo branco. Em seções dark, gerar a versão branca via `mask-image` CSS sobre o `logo.svg` original:

```css
.logo-white {
  background-color: white;
  -webkit-mask-image: url('../assets/brand/logo.svg');
  mask-image: url('../assets/brand/logo.svg');
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-position: left center;
  mask-position: left center;
}
```

Por que funciona: o SVG tem fundo transparente — apenas dois `<path>` coloridos. O `mask-image` usa o canal alpha do SVG como máscara e aplica `background-color` arbitrário. Suporte: todos os browsers modernos (com prefixo `-webkit-` para Safari).

Usar em seções navy (`#152D5B`) como Hero, Métricas e CTA Final.

### Clearspace

Manter espaço livre ao redor do logo igual à altura da letra "O" de FOCO em todos os lados.

---

## 5. Fotografia / Imagens

### Origem

Imagens geradas por IA a partir de referências reais. Arquivos prontos para produção em `assets/images/`.

### Estilo Visual

- **Ambiente:** chão de fábrica industrial moderno, limpo, bem iluminado (luz difusa, sem sombras duras)
- **Enquadramento:** produto como protagonista, ambiente como contexto de escala
- **Tom de cor:** neutro a levemente frio, alinhado com a paleta azul da marca
- **Acabamento:** realista — sem parecer render 3D, stock genérico ou hiper-estilizado
- **Pessoas:** se houver, usar EPI (capacete, colete) — reforça contexto industrial e credibilidade
- **Color grading em uso (hero dark):** `filter: saturate(0.85) contrast(1.05) brightness(0.7)` — calibrado para integração com gradient bridge sem perder leitura do produto

### Logos de Clientes

- Exibidos em **monocromático cinza** (`--color-neutral-400` / ~`#A0AEC0`) para uniformidade visual
- Não competem com a identidade da Foco
- Nenhum cliente tem destaque visual sobre outro

---

## 6. Personalidade Visual

### Deve parecer

- **Preciso** — cada elemento tem propósito, nada é decorativo sem função
- **Confiável** — solidez de quem entrega há 10+ anos para grandes indústrias
- **Sofisticado** — elegância industrial, não genérico

### Nunca deve parecer

- **Amador** — layouts desalinhados, fontes inconsistentes, fotos de baixa qualidade
- **Genérico** — templates prontos, stock photos de escritório, frases vazias
- **Startup** — paletas neon, gradientes chamativos, informalidade excessiva

### Referências Visuais

Marcas B2B industriais com posicionamento similar: Festo, Schmalz, Bosch Rexroth.

### Tom de Voz (diretrizes visuais)

- Direto, técnico sem ser hermético, confiante sem arrogante
- Fala de igual para igual com gestores e engenheiros industriais
- Prefere dados e fatos a adjetivos — mostrar, não dizer
- Evita superlativas vazias ("melhor do mercado"), promessas genéricas ("soluções inovadoras") e urgência artificial

> Tom de voz completo em `docs/MARKETING.md`.

---

## 7. Botões

Três variantes com hierarquia clara:

| Variante | Estilo | Uso |
|----------|--------|-----|
| **Primário** | Background `#1B4587`, texto branco | Ação principal — um por viewport |
| **Outline** | Borda `2px #1B4587`, texto `#1B4587`, fundo transparente | Ações secundárias, cards, formulários |
| **Ghost** | Apenas texto `#1B4587`, sem borda ou fundo | Ações terciárias, links de navegação contextuais |

- Border-radius: `6px` — arredondamento sutil, não genérico
- Padding: `0.875rem 2rem`
- Font: Plus Jakarta Sans 700, `0.9375rem`, `letter-spacing: -0.01em`

---

## 8. Bordas e Sombras

- **Elevação de cards:** sombra sutil (`0 1px 3px rgba(0,0,0,0.08)`) ou borda fina (`1px solid var(--color-neutral-200)`)
- **Elevação da navbar:** borda inferior (`1px solid var(--color-neutral-200)`) ou sombra leve
- **Sem sombras pesadas** — a marca é limpa e funcional
- Em seções dark: bordas em `rgba(255,255,255,0.06–0.12)`; shadows em `rgba(0,0,0,0.3–0.5)` para CTAs flutuantes

---

## 9. Motion

| Token | Valor | Uso |
|-------|-------|-----|
| `--ease-premium` | `cubic-bezier(0.16, 1, 0.3, 1)` | Entradas e revelações de hero/seção. Curva expo-out — projeta sensação premium |
| `--ease-out` | `cubic-bezier(0.0, 0, 0.2, 1)` | Hovers, transições de estado |
| `--dur-fast` | `150ms` | Microinterações (hover de botão, mudança de cor) |
| `--dur-base` | `300ms` | Transições de estado padrão |
| `--dur-reveal` | `700ms` | Entradas de hero (texto, métricas) |
| `--dur-image` | `1400ms` | Crossfade entre slides do hero |

Regras:
- Respeitar `prefers-reduced-motion: reduce` — desativar animações decorativas, manter transições funcionais
- Stagger entre elementos: 150–200ms entre overline → headline → sub → CTA → métricas
- Nunca animar `width`/`height`/`top`/`left` — usar `transform`/`opacity`

---

## 10. Design Tokens

```css
:root {
  /* ─── Cores Primárias ─── */
  --color-primary:           #1E56A0;
  --color-primary-heading:   #1B4587;
  --color-primary-light:     #2B6CB0;
  --color-primary-lightest:  #E8EEF6;
  --color-primary-bright:    #6EB0FF; /* acento em dark sections */

  /* ─── Cores Dark (cinematic) ─── */
  --color-primary-dark:      #152D5B; /* navy padrão */
  --color-primary-darker:    #0A1530; /* navy profundo */
  --color-primary-darkest:   #050B1A; /* base hero (nunca #000) */

  /* ─── Neutros ─── */
  --color-white:       #FFFFFF;
  --color-neutral-50:  #F7F8FA;
  --color-neutral-100: #F1F3F5;
  --color-neutral-200: #E2E8F0;
  --color-neutral-300: #CBD5E0;
  --color-neutral-400: #A0AEC0;
  --color-neutral-500: #718096;
  --color-neutral-600: #4A5568;
  --color-neutral-700: #2D3748;
  --color-neutral-800: #1A202C;
  --color-neutral-900: #1A1A1A;

  /* ─── Tipografia ─── */
  --font-heading: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  --font-body:    'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono:    'JetBrains Mono', ui-monospace, monospace; /* labels técnicos, overlines */

  /* ─── Escala tipográfica ─── */
  --text-display:  3.5rem;
  --text-h1:       2.5rem;
  --text-h2:       1.875rem;
  --text-h3:       1.5rem;
  --text-h4:       1.25rem;
  --text-body:     1rem;
  --text-sm:       0.875rem;
  --text-caption:  0.75rem;

  /* ─── Bordas e Sombras (light) ─── */
  --border-default: 1px solid #E2E8F0;
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.06);
  --radius-sm: 4px;
  --radius-md: 8px;

  /* ─── Motion ─── */
  --ease-premium: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-out:     cubic-bezier(0.0, 0, 0.2, 1);
  --dur-fast:     150ms;
  --dur-base:     300ms;
  --dur-reveal:   700ms;
  --dur-image:    1400ms;

  /* ─── Layout ─── */
  --gutter-x: clamp(1.5rem, 4.5vw, 6rem); /* respiro lateral progressivo */
  --max-w:    1600px;
  --nav-h:    76px;
}
```

### Google Fonts — Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

---

## 11. Sistema Atmosférico (seções dark)

Receita calibrada para seções cinematográficas. Aplicar como camadas sobre a imagem de fundo. Implementação canônica em `src/app/components/hero.module.css`.

### Camadas (z-index do menor para o maior)

| Camada | Z | Função |
|---|---|---|
| Imagem | 1 | Full-bleed com `object-fit: cover` e color grading |
| Gradient grade | 2 | Cria a zona dark à esquerda que ancora o texto |
| Dot grid | 2 (pseudo) | Textura de blueprint na zona dark, máscara fade à direita |
| Grain | 2 (pseudo) | Ruído sutil SVG sobre toda a área |
| Ambient blob | 2 | Glow azul que faz drift lento (22s) |
| Light streaks | 3 | 2 raios angulados do canto superior direito |
| Lens flare | 3 | Bloom radial difuso no canto superior direito |
| Particles | 4 | Pontos esparsos com `mix-blend-mode: screen` |
| Conteúdo | 10+ | Texto, CTAs, métricas, navbar |

### Receitas

**Gradient bridge (zona dark à esquerda):**
```css
background: linear-gradient(100deg,
  rgba(5,11,26,0.98) 0%,
  rgba(5,11,26,0.94) 28%,
  rgba(10,21,48,0.72) 44%,
  rgba(10,21,48,0.32) 60%,
  rgba(10,21,48,0.10) 75%,
  transparent 90%);
```

**Dot grid (blueprint):**
```css
background-image: radial-gradient(circle, rgba(110,176,255,0.13) 1px, transparent 1.5px);
background-size: 24px 24px;
mask-image: linear-gradient(90deg, #000 0%, #000 50%, transparent 100%);
```

**Ambient blob (drift lento):**
```css
width: 600px; height: 600px; border-radius: 50%;
background: radial-gradient(circle, rgba(110,176,255,0.10) 0%, transparent 60%);
filter: blur(40px);
animation: blobDrift 22s cubic-bezier(0.45, 0, 0.55, 1) infinite alternate;
/* translate(0,0) → translate(-80px, 60px) */
```

**Light streak:**
```css
background: linear-gradient(180deg,
  transparent 0%, rgba(110,176,255,0.32) 30%, rgba(110,176,255,0.14) 70%, transparent 100%);
filter: blur(0.6px);
width: 1.2px–1.5px; height: 78–92%;
transform: rotate(-10deg | -14deg); opacity: 0.38 | 0.55;
```

**Lens flare:**
```css
background: radial-gradient(ellipse at center,
  rgba(110,176,255,0.10) 0%, rgba(110,176,255,0.04) 25%, transparent 65%);
filter: blur(10px);
width: 38%; height: 50%; position: top right;
```

**Grain:** SVG noise inline com `mix-blend-mode: overlay`, opacidade `0.12`.

### Calibração

Estes valores estão atenuados (~50% de intensidade vs. iteração anterior). Não amplificar sem necessidade — o objetivo é atmosfera percebida, não ruído.
