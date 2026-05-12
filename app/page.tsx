import Image from "next/image";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  Hammer,
  Leaf,
  Ruler,
  ShieldCheck,
  ThermometerSun,
  Zap
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { HeroVideo } from "@/components/hero-video";
import { Navbar } from "@/components/navbar";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/contact";

export const metadata: Metadata = {
  title: "EXO7 Build | Engenharia integrada para obra rápida",
  description:
    "Site da EXO7 Build: construção com EPS, paredes prontas termoacústicas, painéis monolíticos e Steel Frame."
};

const whatsapp = buildWhatsAppUrl("Olá, quero planejar uma obra com a EXO7.");

const proof = [
  { value: "28 dias", label: "referência para casas compactas" },
  { value: "4x", label: "mais velocidade em etapas de vedação" },
  { value: "70%", label: "menos resíduos em sistemas industrializados" }
];

const advantages = [
  {
    icon: Clock3,
    title: "Prazo controlado",
    text: "A solução construtiva é escolhida pensando no cronograma real da obra."
  },
  {
    icon: ThermometerSun,
    title: "Conforto termoacústico",
    text: "Paredes com melhor estabilidade térmica e redução de ruído para o uso diário."
  },
  {
    icon: Leaf,
    title: "Menos desperdício",
    text: "Sistemas industrializados reduzem entulho e tornam o canteiro mais limpo."
  },
  {
    icon: Ruler,
    title: "Execução precisa",
    text: "Medidas, encaixes e interferências são resolvidos antes da montagem."
  }
];

const technologies = [
  {
    title: "EPS e Paredes Prontas",
    subtitle: "Vedação rápida com conforto termoacústico.",
    text: "Indicado para obras que precisam reduzir etapas, melhorar isolamento e ganhar previsibilidade no fechamento.",
    image: "/assets/eps-paredes-prontas.png",
    bullets: ["montagem rápida", "menos entulho", "bom isolamento"]
  },
  {
    title: "Steel Frame",
    subtitle: "Estrutura leve para execução limpa.",
    text: "Sistema ideal para construções ágeis, ampliações e projetos que pedem precisão, menor peso e canteiro organizado.",
    image: "/assets/steel-frame.png",
    bullets: ["estrutura leve", "alta precisão", "obra seca"]
  },
  {
    title: "Alvenaria Convencional",
    subtitle: "O padrão tradicional com gestão técnica.",
    text: "Para clientes que preferem o método mais conhecido, a EXO7 coordena projeto, mão de obra, compras e cronograma para reduzir retrabalho.",
    image: "/assets/hero.png",
    bullets: ["padrão conhecido", "obra coordenada", "controle técnico"],
    zoom: true
  }
];

const exoReasons = [
  ["01", "Compatibilização", "Projeto, sistema construtivo e execução definidos no mesmo raciocínio."],
  ["02", "Cronograma", "Tecnologia escolhida pelo impacto real no prazo da obra."],
  ["03", "Canteiro", "Menos entulho, menos etapas úmidas e menos improviso."],
  ["04", "Cliente", "Comunicação clara sobre escolhas, etapas e próximos passos."]
];

export default function Home() {
  return (
    <main id="top" className="bg-exo-page text-neutral-950">
      <Navbar />
      <FloatingWhatsApp />

      <section className="border-b border-neutral-200 bg-white pt-14 md:pt-16">
        <div className="section-shell grid gap-8 py-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-10">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow">EXO7 Build</p>
              <h1 className="mt-4 text-balance font-display text-5xl font-semibold leading-[0.95] tracking-[-0.065em] text-exo-ink md:text-7xl">
                Construção rápida, limpa e bem planejada.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-exo-muted">
                Engenharia integrada para executar obras com EPS, paredes prontas termoacústicas e Steel Frame, reduzindo improviso, sujeira e atraso no canteiro.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={whatsapp} target="_blank" rel="noreferrer" className="gap-2">
                  Falar com a EXO7 <ArrowRight size={18} />
                </ButtonLink>
                <ButtonLink href="#tecnologias" variant="secondary">
                  Ver tecnologias
                </ButtonLink>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <HeroVideo />
          </Reveal>
        </div>
      </section>

      <section className="bg-exo-ink text-white">
        <div className="section-shell grid gap-0 py-5 md:grid-cols-3">
          {proof.map((item) => (
            <div key={item.value} className="border-white/12 py-4 md:border-l md:px-6 md:first:border-l-0">
              <strong className="font-display text-4xl font-semibold tracking-[-0.05em]">{item.value}</strong>
              <p className="mt-1 text-sm leading-6 text-blue-100">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="quem-somos" className="section-block bg-white">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <Reveal>
            <SectionIntro
              eyebrow="Quem somos"
              title="A EXO7 organiza a obra antes da primeira montagem."
            />
          </Reveal>
          <Reveal delay={0.06}>
            <div className="content-panel">
              <p className="text-xl leading-9 tracking-[-0.025em] text-exo-ink md:text-2xl">
                O trabalho começa na compatibilização entre projeto, sistema construtivo, materiais e cronograma. Assim, a execução fica mais previsível e o cliente entende o que será feito, quando será feito e por quê.
              </p>
              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                {["Projeto", "Sistema", "Execução"].map((step) => (
                  <div key={step} className="rounded-2xl border border-neutral-200 bg-white p-4">
                    <BadgeCheck className="mb-3 text-exo-blue-900" size={22} />
                    <p className="font-semibold text-exo-ink">{step}</p>
                    <p className="mt-1 text-sm leading-6 text-exo-muted">decisão técnica conectada ao prazo</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="vantagens" className="section-block bg-exo-page">
        <div className="section-shell">
          <Reveal>
            <SectionIntro
              eyebrow="Vantagens"
              title="Benefícios claros, sem promessa vazia."
              text="O sistema construtivo certo reduz gargalos e transforma o canteiro em uma operação mais controlada."
            />
          </Reveal>
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title}>
                <article
                  className="advantage-card h-full rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm"
                  style={{ "--card-index": index } as CSSProperties}
                >
                  <div className="advantage-icon grid size-11 place-items-center rounded-2xl bg-exo-sky-100 text-exo-blue-900">
                    <Icon size={21} />
                  </div>
                  <h3 className="advantage-title mt-5 font-display text-xl font-semibold tracking-[-0.035em] text-exo-ink">{title}</h3>
                  <p className="advantage-text mt-3 text-sm leading-6 text-exo-muted">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="tecnologias" className="section-block bg-white">
        <div className="section-shell">
          <Reveal>
            <SectionIntro
              eyebrow="Tecnologias"
              title="Três caminhos para construir com mais controle."
              text="EPS, Steel Frame e alvenaria convencional entram no mesmo raciocínio: escolher o sistema certo para prazo, orçamento e perfil do cliente."
            />
          </Reveal>
          <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-3 lg:[grid-auto-rows:1fr]">
            {technologies.map((tech) => (
              <Reveal key={tech.title} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm">
                  <div className="bg-[#f2f6fb] p-4">
                    <MediaFrame src={tech.image} alt={`Sistema EXO7: ${tech.title}`} className="aspect-[4/3]" zoom={tech.zoom} />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="eyebrow">{tech.title}</p>
                    <h3 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-[-0.045em] text-exo-ink">
                      {tech.subtitle}
                    </h3>
                    <p className="mt-4 leading-7 text-exo-muted">{tech.text}</p>
                    <div className="mt-auto flex flex-wrap gap-2 pt-5">
                      {tech.bullets.map((bullet) => (
                        <span key={bullet} className="rounded-full bg-exo-sky-100 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-exo-blue-900">
                          {bullet}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="relative isolate overflow-hidden bg-exo-ink text-white">
        <Image
          src="/assets/ultima-cta.png"
          alt="Residência finalizada com acabamento moderno em sistema construtivo EXO7"
          fill
          sizes="100vw"
          className="pointer-events-none absolute inset-0 -z-20 scale-[1.03] object-cover object-[70%_center] opacity-80"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,11,30,.98)_0%,rgba(2,11,30,.94)_28%,rgba(2,11,30,.72)_48%,rgba(2,11,30,.34)_68%,rgba(2,11,30,.16)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_50%,rgba(0,123,255,.16),transparent_34%),linear-gradient(180deg,rgba(2,11,30,.16),rgba(2,11,30,.78))]" />
        <div className="section-shell relative grid min-h-[36rem] items-center py-16 md:py-24">
          <Reveal>
            <div className="max-w-[42rem] rounded-[2rem] border border-white/10 bg-[#06142f]/72 p-7 shadow-[0_30px_90px_rgba(0,0,0,.28)] backdrop-blur-md md:p-9">
              <SectionIntro
                eyebrow="Portfólio"
                title="Resultado final com método por trás."
                text="Acabamento, organização e sistema construtivo bem resolvido em uma entrega limpa, previsível e compatível com o projeto."
                light
              />
              <div className="mt-7 grid gap-3 text-sm leading-6 text-blue-100">
                <p className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"><CheckCircle2 className="mt-0.5 shrink-0 text-exo-green-500" size={18} /> Projeto pensado para execução rápida.</p>
                <p className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"><CheckCircle2 className="mt-0.5 shrink-0 text-exo-green-500" size={18} /> Menos interferência e mais previsibilidade.</p>
                <p className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"><CheckCircle2 className="mt-0.5 shrink-0 text-exo-green-500" size={18} /> Solução compatível com uso, prazo e orçamento.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="por-que" className="section-block bg-white">
        <div className="section-shell">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <SectionIntro
                eyebrow="Por que EXO7"
                title="Mais engenharia, menos tentativa e erro."
                text="Uma distribuição mais completa da operação: planejamento, tecnologia, obra e comunicação no mesmo sistema."
              />
              <div className="rounded-[2rem] bg-exo-ink p-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white/10 text-exo-green-500">
                    <ShieldCheck size={23} />
                  </div>
                  <div>
                    <p className="font-display text-2xl font-semibold tracking-[-0.04em]">Método EXO7</p>
                    <p className="mt-2 leading-7 text-blue-100">
                      A obra é conduzida por decisões técnicas conectadas ao prazo, ao orçamento e à execução.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="flow-track mt-10 grid gap-5 lg:grid-cols-4">
              {exoReasons.map(([number, title, text], index) => (
                <article key={title} className="flow-step relative min-h-60 rounded-[1.75rem] border border-neutral-200 bg-exo-page p-5">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flow-number font-display text-5xl font-semibold tracking-[-0.07em] text-exo-blue-900/18">{number}</span>
                    {index < exoReasons.length - 1 ? (
                      <span className="flow-arrow" aria-hidden="true">
                        <ArrowRight size={18} />
                      </span>
                    ) : null}
                  </div>
                  <div className="mt-10">
                    <h3 className="font-display text-xl font-semibold tracking-[-0.035em] text-exo-ink">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-exo-muted">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contato" className="section-block bg-exo-ink text-white">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <Reveal>
            <SectionIntro
              eyebrow="Contato"
              title="Vamos definir o sistema certo para sua obra."
              text="Envie cidade, metragem aproximada e tipo de projeto. A EXO7 responde com uma direção técnica inicial."
              light
            />
            <div className="mt-7 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <p className="flex gap-3 text-sm leading-6 text-blue-100"><Zap className="mt-0.5 shrink-0 text-exo-blue-500" size={18} /> Atendimento para casas, ampliações e projetos comerciais.</p>
              <p className="mt-3 flex gap-3 text-sm leading-6 text-blue-100"><Hammer className="mt-0.5 shrink-0 text-exo-blue-500" size={18} /> EPS, paredes prontas, painéis monolíticos e Steel Frame.</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <footer className="bg-[#050f24] py-8 text-white">
        <div className="section-shell flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="inline-flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-white text-sm font-black tracking-[-0.08em] text-exo-blue-900">
              E7
            </span>
            <div>
              <p className="font-display text-xl font-black leading-none tracking-[-0.05em] text-white">EXO7</p>
              <p className="mt-1 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-blue-200">Engenharia Integrada</p>
            </div>
          </div>
          <p className="text-sm leading-6 text-blue-100">
            EXO7 Build: engenharia integrada para obras rápidas, limpas, econômicas e sustentáveis.
          </p>
          <a className="focus-ring rounded-full text-sm font-bold text-blue-100 hover:text-white" href="#top">
            Voltar ao topo
          </a>
        </div>
      </footer>
    </main>
  );
}

function SectionIntro({
  eyebrow,
  title,
  text,
  light = false
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className={light ? "eyebrow text-blue-200" : "eyebrow"}>{eyebrow}</p>
      <h2 className={light ? "mt-3 text-balance font-display text-4xl font-semibold leading-tight tracking-[-0.055em] text-white md:text-5xl" : "mt-3 text-balance font-display text-4xl font-semibold leading-tight tracking-[-0.055em] text-exo-ink md:text-5xl"}>
        {title}
      </h2>
      {text ? (
        <p className={light ? "mt-5 max-w-2xl leading-8 text-blue-100" : "mt-5 max-w-2xl leading-8 text-exo-muted"}>
          {text}
        </p>
      ) : null}
    </div>
  );
}

function MediaFrame({
  src,
  alt,
  className,
  priority = false,
  dark = false,
  zoom = false
}: {
  src: string;
  alt: string;
  className: string;
  priority?: boolean;
  dark?: boolean;
  zoom?: boolean;
}) {
  return (
    <div className={`grid place-items-center overflow-hidden rounded-[1.75rem] ${dark ? "bg-white/[0.06]" : "bg-[#eef4fb]"} ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={1916}
        height={1086}
        priority={priority}
        loading={priority ? "eager" : "eager"}
        sizes="(min-width: 1024px) 560px, 100vw"
        className={`h-full w-full object-contain ${zoom ? "scale-125 p-0" : "p-3"}`}
      />
    </div>
  );
}
