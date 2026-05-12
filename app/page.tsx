import Image from "next/image";
import type { Metadata } from "next";
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
  }
];

export default function Home() {
  return (
    <main id="top" className="bg-exo-page text-neutral-950">
      <Navbar />
      <FloatingWhatsApp />

      <section className="border-b border-neutral-200 bg-white pt-24">
        <div className="section-shell grid gap-8 py-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-14">
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
            <MediaFrame
              src="/assets/hero.png"
              alt="Projeto residencial isométrico da EXO7"
              priority
              className="aspect-[16/10]"
            />
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
            {advantages.map(({ icon: Icon, title, text }) => (
              <Reveal key={title}>
                <article className="h-full rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
                  <div className="grid size-11 place-items-center rounded-2xl bg-exo-sky-100 text-exo-blue-900">
                    <Icon size={21} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold tracking-[-0.035em] text-exo-ink">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-exo-muted">{text}</p>
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
              title="Duas frentes para acelerar sem bagunçar a obra."
              text="Cada tecnologia aparece com uma imagem contida, descrição objetiva e uso claro."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {technologies.map((tech) => (
              <Reveal key={tech.title}>
                <article className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm">
                  <div className="bg-[#f2f6fb] p-4">
                    <MediaFrame src={tech.image} alt={`Sistema EXO7: ${tech.title}`} className="aspect-[4/3]" />
                  </div>
                  <div className="p-6">
                    <p className="eyebrow">{tech.title}</p>
                    <h3 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-[-0.045em] text-exo-ink">
                      {tech.subtitle}
                    </h3>
                    <p className="mt-4 leading-7 text-exo-muted">{tech.text}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
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

      <section id="portfolio" className="relative overflow-hidden bg-exo-ink text-white">
        <img
          src="/assets/ultima-cta.png"
          alt=""
          className="pointer-events-none absolute inset-y-0 right-[-6%] hidden h-full w-[76%] object-cover object-right opacity-90 lg:block"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,15,36,.96)_0%,rgba(5,15,36,.84)_38%,rgba(5,15,36,.34)_72%,rgba(5,15,36,.18)_100%)]" />
        <div className="section-shell relative grid min-h-[34rem] items-center py-16 md:py-20 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <SectionIntro
              eyebrow="Portfólio"
              title="Resultado final com método por trás."
              text="A imagem entra como atmosfera da seção: acabamento, organização e sistema construtivo bem resolvido."
              light
            />
            <div className="mt-7 grid gap-3 text-sm leading-6 text-blue-100">
              <p className="flex gap-2"><CheckCircle2 className="mt-0.5 shrink-0 text-exo-green-500" size={18} /> Projeto pensado para execução rápida.</p>
              <p className="flex gap-2"><CheckCircle2 className="mt-0.5 shrink-0 text-exo-green-500" size={18} /> Menos interferência e mais previsibilidade.</p>
              <p className="flex gap-2"><CheckCircle2 className="mt-0.5 shrink-0 text-exo-green-500" size={18} /> Solução compatível com uso, prazo e orçamento.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="por-que" className="section-block bg-white">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal>
            <SectionIntro
              eyebrow="Por que EXO7"
              title="Mais engenharia, menos tentativa e erro."
            />
          </Reveal>
          <Reveal delay={0.06}>
            <div className="grid gap-3">
              {[
                ["Compatibilização", "Projeto, sistema construtivo e execução definidos no mesmo raciocínio."],
                ["Cronograma", "Tecnologia escolhida pelo impacto real no prazo da obra."],
                ["Canteiro", "Menos entulho, menos etapas úmidas e menos improviso."],
                ["Cliente", "Comunicação clara sobre escolhas, etapas e próximos passos."]
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-neutral-200 bg-exo-page p-5">
                  <h3 className="font-display text-xl font-semibold tracking-[-0.035em] text-exo-ink">{title}</h3>
                  <p className="mt-2 leading-7 text-exo-muted">{text}</p>
                </div>
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
