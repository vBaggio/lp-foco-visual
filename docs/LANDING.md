# Landing Page — Estrutura de Seções

*Spec de seções para implementação em `src/`. Implementação canônica do Hero em `src/app/components/Hero.tsx` + `hero.module.css`.*

---

## Visão Geral

**Padrão de conversão:** Trust & Authority → Prova Social → Diferenciais → Processo → Produto → Evidências + Voz → FAQ → CTA
**Público:** Gestores de produção e engenheiros industriais de grandes empresas (B2B)
**Objetivo primário:** Gerar leads qualificados (orçamento / contato comercial)
**Tom:** Direto, técnico, confiante — nunca exagerado ou genérico

**Filosofia de placeholders:** Conteúdo marcado com ⚠️ é placeholder intencional. Desenvolver layout completo com dados fictícios realistas (depoimentos no estilo correto, números plausíveis). Substituir pelos reais após aceite do cliente — nunca bloquear desenvolvimento aguardando dados finais.

---

## Seções (em ordem)

### Seção 1 — Hero (Industrial Cinematic)

**Objetivo:** Capturar atenção e comunicar o valor em 5 segundos com peso premium.

**Headline:** "Gestão visual que transforma linhas de produção"
**Subheadline:** "Soluções sob medida para grandes indústrias. Da engenharia à instalação, tudo in-house."

**Composição:**
- Background dark (`--color-primary-darkest` / `#050B1A`) com imagem full-bleed em color grading cinematográfico
- Imagem ocupa toda a viewport com `object-position: 70% center` para deixar zona escura à esquerda
- Gradient bridge (ver DESIGN.md §11) cria zona de texto integrada — texto NÃO flutua em card
- Slider auto-rotate a cada ~6s entre 3 instalações (FORVIA UAP 04, Hyundai Painting, Hyundai FOCUS), crossfade de 1.4s com `--ease-premium`
- Pips minimais bottom-right (28px → 44px quando ativo)
- Sistema atmosférico aplicado (ver DESIGN.md §11): dot grid na zona dark, grain, ambient blob, 2 light streaks, lens flare

**Elementos do texto (zona dark à esquerda):**
- Overline em JetBrains Mono, 11px, `--color-primary-bright` com tick decorativo: "Gestão Visual Industrial · Limeira, SP"
- Headline em Plus Jakarta Sans 800, `clamp(40px, 5.5vw, 76px)`, branco com palavra-chave "transforma" em gradiente azul brilhante
- Subheadline em Inter 400, 17px, `rgba(255,255,255,0.78)`
- CTA primário filled branco: "Solicitar Orçamento" → WhatsApp `https://wa.me/5519983347475`
- CTA ghost: "Ver Portfólio →"
- Métricas em strip horizontal com dividers verticais: `60+ Clientes Ativos`, `10+ Anos de Mercado`, `In-House Fabricação e Instalação`

**Navbar:**
- Transparente com gradient escuro sutil no topo
- Logo via `.logo-white` (CSS mask sobre `assets/brand/logo.svg`)
- CTA "Orçamento" como botão glass (`rgba(255,255,255,0.08)` + backdrop-filter blur)
- Background sólido com blur quando scrollY > 4

**Restrições:**
- Logo SEMPRE via `.logo-white` (CSS mask) — nunca arquivo separado
- Nunca usar `#000000` puro — sempre `--color-primary-darkest`
- Nenhum card ou componente flutuante isolado — gradient bridge é a única forma de criar zonas
- Easing premium (`--ease-premium`) em todas as entradas; stagger de ~150ms entre elementos

**Referência viva:** `src/app/components/Hero.tsx`

---

### Seção 2 — Clientes

**Objetivo:** Reconhecimento imediato — "empresas como a sua já confiam"

**Headline da seção:** "Empresas que confiam na Foco" (pequena, uppercase, neutra)

**Clientes a exibir (logos monocromáticos `#A0AEC0`):**
- Continental
- FORVIA
- Hyundai
- Royal Canin
- MANN+HUMMEL
- [+ outros a definir com o cliente ⚠️]

**Elementos:**
- Strip de logos em linha única, layout flexbox com gap
- Logos em grayscale / cor neutra `#A0AEC0` — sem destaque individual
- Fundo branco ou off-white

**Nota:** Logos reais precisam ser obtidos com o cliente. Usar versões públicas em SVG monocromático.

---

### Seção 3 — Métricas

**Objetivo:** Transformar reconhecimento em evidência quantificável

**Layout:** 3 cards com número grande + label + descrição curta

| Número | Label | Descrição |
|--------|-------|-----------|
| 60+ | Clientes Ativos | Grandes indústrias que voltam a encomendar |
| 10+ | Anos de Mercado | Solidez construída em entregas consistentes |
| ⚠️ X dias | Prazo Médio | Da aprovação do briefing à entrega no cliente |

*60+ e 10+ confirmados. Prazo médio: substituir antes de publicar.*

**Estilo dos cards:**
- Número em Plus Jakarta Sans 800, ~64px, branco
- Label em Plus Jakarta Sans 600, uppercase, azul-claro `#2B6CB0`
- Descrição em Inter 400, rgba(255,255,255,0.6)
- Background: navy `#152D5B` — usar `.logo-white` se logo aparecer, ou tipografia como âncora
- Pequeno elemento decorativo geométrico sutil no canto (opcional)

---

### Seção 4 — Diferenciais + Como Funciona

**Objetivo:** Responder "por que a Foco e não um concorrente" e reduzir percepção de risco do processo

#### 4a — Por que a Foco

**Headline:** "Por que a Foco"
**Subheadline:** "Não somos uma revendedora. Fabricamos, instalamos e garantimos."

**4 cards de diferencial:**

| Ícone | Título | Descrição |
|-------|--------|-----------|
| `factory` | Parque Fabril Próprio | Corte a laser de precisão em MDF e acrílico, dobra, impressão de alta resolução — tudo in-house |
| `hard-hat` | Instalação In-House | Equipe própria de montagem, instalação e adesivação. Sem terceirização |
| `ruler` | 100% Sob Medida | Cada produto é projetado para o ambiente e a identidade visual do cliente |
| `map-pin` | Limeira, SP | Atendimento presencial para clientes SP e região |

**Estilo:** Cards sobre fundo off-white, borda sutil `#E2E8F0`, ícone Lucide outline, título em Plus Jakarta Sans 700.

#### 4b — Como Funciona

**Objetivo:** Mostrar o processo — reduzir barreira de entrada para quem nunca comprou produto custom

**Layout:** 4 passos em linha horizontal (desktop) / empilhado (mobile), conectados por seta ou linha

| Passo | Ícone | Título | Descrição curta |
|-------|-------|--------|-----------------|
| 1 | `clipboard` | Briefing | Entendemos seu ambiente, fluxo e identidade visual |
| 2 | `pencil-ruler` | Projeto | Desenvolvemos a solução sob medida para sua operação |
| 3 | `wrench` | Fabricação | Produzimos in-house com corte a laser e impressão de alta resolução |
| 4 | `truck` | Entrega e Instalação | Nossa equipe instala e garante o resultado no local |

**Estilo:** Fundo neutro-100 `#F1F3F5`, passos numerados em azul primário, ícones Lucide outline, linha conectora discreta entre passos.

---

### Seção 5 — Produtos

**Objetivo:** Mostrar o portfólio — o que a Foco fabrica

**Headline:** "Soluções de Gestão Visual"

**Categorias:**

| Produto | Descrição curta |
|---------|----------------|
| Quadros Kanban / Kaizen | Controle de produção visual e gestão lean |
| Sinalização Industrial | Placas, indicativos, identificação de áreas |
| Totens e Displays | Comunicação interna e visual management |
| Letreiros e Adesivos | Identidade visual aplicada ao ambiente |

**Layout:** Grid 2×2 ou 4 colunas com imagem de produto + título + descrição curta
**Imagens:** gerar via IA com mesmo grading visual das fotos do hero (`assets/images/`). Cada categoria precisa de 1 imagem representativa.

---

### Seção 6 — Portfólio + Depoimentos

**Objetivo:** "Mostrar, não contar" — prova visual da qualidade com voz humana integrada

**Headline:** "Projetos Entregues"

**Estrutura de cada card (3 cards):**
- Imagem do produto instalado (landscape, 16:9)
- Nome do cliente (ou setor se confidencial) + tipo de produto
- Contexto: "Linha de montagem automotiva" / "Área de armazenagem" etc.
- Citação curta de alguém do cliente (em itálico, com nome + cargo abaixo)

**Exemplo de card:**
```
[Imagem — Sala de gestão instalada]
Continental — Sala de Gestão Diária
Linha de montagem automotiva, São Paulo

"O quadro chegou pronto para usar. Instalação concluída em um dia,
sem impacto na linha."
— ⚠️ Nome, Gerente de Produção
```

**Nota sobre placeholders ⚠️:** Imagens, contextos, citações e nomes são placeholders para aprovação do layout. Substituir por cases e depoimentos reais após aceite do cliente. No prototipo, usar as 3 fotos disponíveis em `assets/images/` (FORVIA, Hyundai x2) e depoimentos fictícios no estilo dos exemplos em `docs/MARKETING.md`.

**Justificativa do design:** Depoimento integrado ao case é mais forte que seção separada — o visitante vê o produto *e* ouve alguém sobre ele no mesmo momento. Elimina redundância entre duas seções de prova social e mantém o fluxo de leitura.

---

### Seção 7 — FAQ

**Objetivo:** Eliminar objeções de quem está quase decidido

**Headline:** "Perguntas Frequentes"

**Perguntas (3-4, expansíveis — accordion):**

| Pergunta | Resposta |
|----------|----------|
| "Vocês atendem fora de São Paulo?" | "Sim. Atendemos clientes em todo o Brasil. Para instalação presencial fora de SP, avaliamos logística no orçamento." ⚠️ confirmar com cliente |
| "Como funciona o processo de orçamento?" | "Enviamos um briefing simples por WhatsApp ou e-mail. Em até 48h você recebe uma proposta com especificações e prazo." ⚠️ confirmar prazo com cliente |
| "A instalação está inclusa?" | "Sim. Temos equipe própria de instalação — sem terceirização. O projeto só é dado como entregue quando está montado e aprovado." ⚠️ confirmar política |
| "Por que o preço é diferente de outros fornecedores?" | "Produto sob medida tem custo diferente de produto de prateleira. Clientes que nos escolhem pelo preço não são nosso público. Clientes que nos escolhem pela entrega, voltam." |

**Estilo:** Accordion simples, fundo off-white, borda sutil, ícone `+` / `−` Lucide.

---

### Seção 8 — CTA Final

**Objetivo:** Converter visitante em lead

**Headline:** "Pronto para transformar sua linha de produção?"
**Subheadline:** "Fale com nosso time e receba uma proposta personalizada."

**CTA:**
- Primário (filled): "Solicitar Orçamento via WhatsApp" → link direto wa.me
- Secundário: formulário minimalista abaixo com texto introdutório "Prefere que a gente entre em contato?" — campos: Nome, Empresa, Produto de interesse, Enviar
- O formulário é visualmente subordinado: menor, sem competir com o botão principal

**Número WhatsApp:** +55 19 98334-7475 → `https://wa.me/5519983347475`

**Estilo:** Fundo navy `#152D5B`, texto branco, CTA em azul primário ou branco filled.
**Logo:** Usar `.logo-white` (CSS mask) se logo aparecer nesta seção — ver DD-007.

---

### Seção 9 — Footer

**Objetivo:** Informações institucionais e contato

**Elementos:**
- Logo (esquerda, sobre fundo branco ou claro — usar versão padrão, não `.logo-white`)
- Coluna: R. Facunda Lange Adrien, 453 — Jardim Sen. Vergueiro, Limeira - SP, 13482-378 + Telefone ⚠️ + Email ⚠️
- Coluna: Links (Produtos, Portfólio, Sobre, Contato)
- Linha inferior: Copyright + "Todos os direitos reservados"

**Fundo:** Branco ou off-white — logo padrão funciona. Nunca navy nesta seção.

---

## Tom dark vs light por seção

| Seção | Tom | Justificativa |
|---|---|---|
| 1. Hero | **Dark** | Cinematic premium — validado |
| 2. Clientes | Light | Logos monocromáticos sobre off-white |
| 3. Métricas | **Dark** | Números grandes brancos sobre navy ancoram a credibilidade |
| 4. Diferenciais + Processo | Light | Cards técnicos pedem clareza |
| 5. Produtos | Light | Grid de imagens |
| 6. Portfólio | Light | Cases com texto |
| 7. FAQ | Light | Accordion, leitura |
| 8. CTA Final | **Dark** | Conversão com peso |
| 9. Footer | Light | Logo padrão funciona |

Transições dark → light devem ser limpas (sem gradient bridge entre seções; cada seção é autocontida). O contraste é deliberado.

## Referências de implementação

- Design tokens, paleta, motion, sistema atmosférico: `docs/DESIGN.md`
- Tom de voz, copy base, glossário: `docs/MARKETING.md`
- Referência visual viva do Hero: `src/app/components/Hero.tsx`
- Assets prontos: `assets/brand/` (logo) e `assets/images/` (fotos)
