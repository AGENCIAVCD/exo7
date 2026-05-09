# EXO7 Build — Design System

## Visual Thesis

Engenharia integrada apresentada como tecnologia construtiva premium: fundo limpo, azul técnico profundo, acentos de energia e sustentabilidade, imagens isométricas 3D como peças de um sistema de montagem rápido, preciso e confiável.

## Paleta de Cores

| Token | Hex | Uso |
| --- | --- | --- |
| `exo-blue-950` | `#001B4D` | Fundos institucionais profundos, footer, overlays técnicos |
| `exo-blue-900` | `#003087` | Cor primária oficial, CTAs principais, navbar ativa |
| `exo-blue-700` | `#0052CC` | Estados de hover, gradientes, destaques de tecnologia |
| `exo-blue-500` | `#007BFF` | Acentos digitais, links, linhas de interface |
| `exo-green-500` | `#00A86B` | Sustentabilidade, economia, ganhos ambientais |
| `exo-sky-100` | `#EAF4FF` | Áreas suaves com tom tecnológico |
| `exo-slate-900` | `#0F172A` | Texto principal |
| `exo-slate-600` | `#475569` | Texto secundário |
| `exo-slate-500` | `#64748B` | Metadados, labels, descrições |
| `exo-slate-100` | `#F1F5F9` | Divisórias, superfícies sutis |
| `exo-cloud` | `#F8FAFC` | Fundo principal claro |
| `exo-white` | `#FFFFFF` | Superfícies e texto sobre azul |

## Gradientes

- `hero-field`: radial azul claro no topo direito + linear branco para `#EAF4FF`.
- `blueprint`: `#001B4D` → `#003087`, com linhas finas translúcidas simulando blueprint.
- `sustainability-glow`: `rgba(0,168,107,.18)` usado em halos de impacto ambiental.
- `velocity-line`: `#007BFF` → `#00A86B`, usado em divisórias e detalhes de velocidade.

## Tipografia

- Fonte principal sugerida: `Plus Jakarta Sans`, moderna, técnica e altamente legível.
- Fonte de apoio sugerida: `Space Grotesk`, usada em números, métricas e chamadas curtas.
- Implementação atual: stack local `Aptos` / `Segoe UI` para eliminar dependência externa de fontes e manter carregamento imediato.
- Fallback: `system-ui, sans-serif`.

### Escala

| Token | Tamanho | Uso |
| --- | --- | --- |
| `display` | `clamp(3.5rem, 8vw, 7.5rem)` | Hero e marca |
| `h1` | `clamp(3rem, 6vw, 6rem)` | Headline principal |
| `h2` | `clamp(2.25rem, 4vw, 4.75rem)` | Títulos de seção |
| `h3` | `1.5rem–2rem` | Blocos de tecnologia e cases |
| `lead` | `1.125rem–1.35rem` | Texto de apoio |
| `body` | `1rem` | Texto padrão |
| `label` | `0.75rem–0.875rem` | Eyebrows, botões, navegação |

## Spacing Scale

Base 4px, com ritmo amplo para aspecto premium.

- `xs`: 8px
- `sm`: 12px
- `md`: 16px
- `lg`: 24px
- `xl`: 32px
- `2xl`: 48px
- `3xl`: 64px
- `4xl`: 96px
- `5xl`: 128px

Regra: seções principais usam `96px–128px` no desktop e `64px–80px` no mobile.

## Shadow System

- `soft`: `0 18px 60px rgba(15, 23, 42, 0.10)` para superfícies claras.
- `float`: `0 30px 90px rgba(0, 48, 135, 0.18)` para imagens isométricas.
- `blue-glow`: `0 24px 80px rgba(0, 123, 255, 0.22)` para CTAs e planos técnicos.
- `green-glow`: `0 20px 70px rgba(0, 168, 107, 0.20)` para sustentabilidade.
- `inset-line`: borda interna `1px solid rgba(255,255,255,.18)` em áreas escuras.

## Componentes Reutilizáveis

- `Navbar`: fixa, translúcida, blur, logo à esquerda, navegação âncora e CTA WhatsApp.
- `Button`: variantes `primary`, `secondary`, `ghost`, `whatsapp`; cantos arredondados, foco visível e microinteração.
- `SectionHeader`: eyebrow técnico, título forte e texto curto.
- `Reveal`: wrapper de animação para entrada no scroll.
- `Metric`: número em `Space Grotesk`, legenda objetiva.
- `AdvantageRail`: lista de vantagens com ícones isométricos grandes e texto enxuto.
- `TechnologyPanel`: bloco editorial para EPS/Paredes Prontas e Steel Frame com imagem dominante.
- `CaseShowcase`: área de portfólio com imagem ampla e metadados.
- `ContactForm`: formulário visual pronto para integração futura.
- `FloatingWhatsApp`: botão persistente, acessível e com label.

## Regras do Estilo Isométrico EXO7

- Usar imagens em ângulo 30°/60° como protagonistas, não como decoração pequena.
- Aplicar sombras suaves azuis para sensação de objeto técnico flutuando.
- Evitar excesso de cards competindo com os renders.
- Combinar linhas finas de blueprint, grids discretos e halos para reforçar engenharia.
- As imagens devem ter `alt` descritivo e carregamento otimizado via `next/image`.
- Motion: entrada em camada, parallax leve e hover com elevação sutil, nunca animação frenética.
- Fundo claro com contraste azul profundo; verde só para benefício ambiental/economia.

## Motion

- Hero: texto sobe com fade, imagem isométrica entra com escala suave e leve flutuação.
- Scroll: seções revelam em stagger; imagens têm parallax mínimo.
- Hover: botões avançam 2px, painéis elevam e linhas técnicas aparecem.
- Respeitar `prefers-reduced-motion` via Framer Motion e CSS.

## Acessibilidade e SEO

- Hierarquia única de `h1`, seções com `h2`.
- Contraste mínimo AA em textos e CTAs.
- Foco visível em links, botões e campos.
- Formulário com labels reais.
- Metadados completos para SEO local e social sharing.
- Conteúdo em português do Brasil, tom técnico, claro e persuasivo.
