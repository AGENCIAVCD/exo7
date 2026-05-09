import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Layers3,
  Leaf,
  Ruler,
  ShieldCheck,
  Zap
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Navbar } from "@/components/navbar";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/contact";

export const metadata: Metadata = {
  title: "EXO7 Build | Engenharia integrada para construção rápida",
  description:
    "Obras rápidas, limpas e sustentáveis com EPS, paredes prontas termoacústicas, painéis monolíticos e Steel Frame."
};

const whatsapp = buildWhatsAppUrl("Olá, quero planejar uma obra com a EXO7.");

const proof = [
  ["28 dias", "execução de referência para casas compactas"],
  ["4x", "mais velocidade em etapas de vedação"],
  ["70%", "menos resíduos em sistemas industrializados"]
];

const advantages = [
  {
    icon: Clock3,
    title: "Prazo como premissa",
    text: "A solução construtiva nasce junto com o cronograma, reduzindo etapas úmidas, espera e retrabalho."
  },
  {
    icon: ShieldCheck,
    title: "Desempenho previsível",
    text: "Paredes e estruturas compatibilizadas para conforto, vedação, acabamento e manutenção."
  },
  {
    icon: Leaf,
    title: "Canteiro mais limpo",
    text: "Menos desperdício, menos entulho e uma operação mais organizada do início à entrega."
  },
  {
    icon: Ruler,
    title: "Precisão de montagem",
    text: "Sistemas industrializados trazem medidas, encaixes e decisões técnicas para antes da obra."
  }
];

const technologies = [
  {
    label: "EPS e Paredes Prontas",
    title: "Vedação rápida com conforto termoacústico.",
    text: "Painéis e soluções termoacústicas para acelerar fechamentos, reduzir resíduos e entregar melhor estabilidade térmica.",
    image: "/assets/eps-paredes-prontas.png",
    bullets: ["isolamento", "obra seca", "menos retrabalho"]
  },
  {
    label: "Steel Frame",
    title: "Estrutura leve para construir com precisão.",
    text: "Sistema industrializado para obras ágeis, ampliações e projetos que precisam de menor carga e alta previsibilidade.",
    image: "/assets/steel-frame.png",
    bullets: ["leveza estrutural", "montagem precisa", "canteiro limpo"]
  }
];

export default function Home() {
  return (
    <main id="top" className="overflow-hidden bg-[#f7f9fc] text-neutral-950">
      <Navbar />
      <FloatingWhatsApp />

      <section className="relative min-h-[100svh] bg-white pt-20">
        <div className="absolute inset-x-0 top-20 h-px bg-neutral-200" />
        <div className="section-shell grid min-h-[calc(100svh-5rem)] items-center gap-10 py-14 lg:grid-cols-[0.86fr_1.14fr]">
          <Reveal className="max-w-2xl">
            <p className="mb-6 text-xs font-black uppercase tracking-[0.28em] text-exo-blue-900">
              EXO7 Build
            </p>
            <h1 className="text-balance font-display text-[clamp(3.2rem,7.5vw,7rem)] font-semibold leading-[0.88] tracking-[-0.075em] text-[#071632]">
              Obra rápida com engenharia de verdade.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-exo-slate-600 md:text-xl">
              Integramos projeto, sistema construtivo e execução para construir com EPS, paredes prontas e Steel Frame sem improviso no canteiro.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={whatsapp} target="_blank" rel="noreferrer" className="gap-2">
                Falar com a engenharia <ArrowRight size={18} />
              </ButtonLink>
              <ButtonLink href="#tecnologias" variant="secondary">
                Ver sistemas
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute inset-x-8 bottom-4 h-20 rounded-full bg-exo-blue-900/14 blur-3xl" />
              <Image
                src="/assets/hero.png"
                width={1672}
                height={941}
                alt="Casa isométrica moderna construída com sistemas EXO7"
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="relative z-10 w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#071632] py-8 text-white">
        <div className="section-shell grid gap-6 md:grid-cols-3">
          {proof.map(([value, label]) => (
            <div key={value} className="border-l border-white/15 pl-5">
              <strong className="font-display text-4xl font-semibold tracking-[-0.06em]">{value}</strong>
              <p className="mt-2 max-w-xs text-sm leading-6 text-blue-100">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="quem-somos" className="bg-white py-20 md:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <SectionIntro
              eyebrow="Quem somos"
              title="Uma engenharia que organiza a obra antes dela começar."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="max-w-3xl border-t border-neutral-200 pt-7">
              <p className="text-2xl leading-10 tracking-[-0.03em] text-[#18243a] md:text-3xl">
                A EXO7 combina projeto, tecnologia construtiva e execução para reduzir decisões tardias. O resultado é uma obra mais rápida, limpa e previsível.
              </p>
              <p className="mt-6 leading-8 text-exo-slate-600">
                Nosso foco não é “parecer tecnológico”. É usar tecnologia para encurtar prazo, melhorar desempenho e dar clareza técnica para cada etapa da construção.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="vantagens" className="bg-[#f7f9fc] py-20 md:py-28">
        <div className="section-shell">
          <Reveal>
            <SectionIntro
              eyebrow="Vantagens"
              title="Menos ruído visual. Mais controle de obra."
              text="A proposta da EXO7 é simples: projetar para executar melhor."
            />
          </Reveal>
          <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {advantages.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} delay={index * 0.04}>
                <article className="grid grid-cols-[3rem_1fr] gap-5 border-t border-neutral-200 pt-6">
                  <div className="grid size-12 place-items-center rounded-full bg-white text-exo-blue-900 shadow-[0_10px_30px_rgba(15,23,42,.08)]">
                    <Icon size={21} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.045em] text-[#071632]">{title}</h3>
                    <p className="mt-3 leading-7 text-exo-slate-600">{text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="tecnologias" className="bg-white py-20 md:py-28">
        <div className="section-shell">
          <Reveal>
            <SectionIntro
              eyebrow="Tecnologias"
              title="Dois sistemas fortes. Uma execução integrada."
              text="As imagens aparecem onde ajudam a entender a solução, não como decoração."
            />
          </Reveal>
          <div className="mt-16 grid gap-16">
            {technologies.map((technology, index) => (
              <TechnologyFeature key={technology.label} reverse={index % 2 === 1} {...technology} />
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-[#071632] py-20 text-white md:py-28">
        <div className="section-shell">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
              <SectionIntro
                eyebrow="Portfólio"
                title="Imagem de resultado, não vitrine aleatória."
                text="A leitura precisa ser imediata: obra limpa, sistema definido e acabamento compatível com o projeto."
                light
              />
              <p className="max-w-xl leading-8 text-blue-100 lg:justify-self-end">
                A EXO7 organiza o caminho entre estudo, sistema e montagem para que o resultado final seja consequência de método, não sorte.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-14 overflow-hidden rounded-[2rem] bg-white/5 ring-1 ring-white/10">
              <Image
                src="/assets/ultima-cta.png"
                width={1916}
                height={821}
                alt="Casa finalizada com solução construtiva EXO7"
                sizes="(min-width: 1180px) 1180px, 100vw"
                className="w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="por-que" className="bg-white py-20 md:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionIntro
              eyebrow="Por que EXO7"
              title="Construção civil com menos improviso."
              text="Não é sobre trocar alvenaria por um material diferente. É sobre redesenhar o processo para ganhar prazo e previsibilidade."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="divide-y divide-neutral-200 border-y border-neutral-200">
              {[
                "Projeto compatibilizado antes da compra de materiais.",
                "Sistema construtivo escolhido pelo objetivo da obra.",
                "Execução limpa, rápida e com menos interferências.",
                "Comunicação direta entre engenharia, obra e cliente."
              ].map((item) => (
                <div key={item} className="flex gap-4 py-5">
                  <CheckCircle2 className="mt-1 shrink-0 text-exo-green-500" size={20} />
                  <p className="text-lg leading-7 text-[#18243a]">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contato" className="bg-[#071632] py-20 text-white md:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionIntro
              eyebrow="Contato"
              title="Vamos avaliar o melhor sistema para sua obra."
              text="Envie metragem, cidade e tipo de projeto. A resposta deve apontar caminho técnico, não só orçamento genérico."
              light
            />
            <div className="mt-10 grid gap-4 border-y border-white/12 py-7 text-blue-100">
              <p className="flex items-center gap-3"><Zap size={19} /> Estudos para obras residenciais e comerciais.</p>
              <p className="flex items-center gap-3"><Layers3 size={19} /> EPS, paredes prontas, painéis monolíticos e Steel Frame.</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <footer className="bg-[#050f24] py-10 text-white">
        <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Image
            src="/assets/logo/logo-horizontal.png"
            width={170}
            height={58}
            alt="EXO7"
            sizes="170px"
            className="h-9 w-auto brightness-0 invert"
          />
          <p className="max-w-2xl text-sm leading-6 text-blue-100">
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
      <p className={light ? "mb-4 text-xs font-black uppercase tracking-[0.26em] text-blue-200" : "mb-4 text-xs font-black uppercase tracking-[0.26em] text-exo-blue-900"}>
        {eyebrow}
      </p>
      <h2 className={light ? "text-balance font-display text-4xl font-semibold tracking-[-0.065em] text-white md:text-6xl" : "text-balance font-display text-4xl font-semibold tracking-[-0.065em] text-[#071632] md:text-6xl"}>
        {title}
      </h2>
      {text ? (
        <p className={light ? "mt-6 max-w-2xl text-lg leading-8 text-blue-100" : "mt-6 max-w-2xl text-lg leading-8 text-exo-slate-600"}>
          {text}
        </p>
      ) : null}
    </div>
  );
}

function TechnologyFeature({
  label,
  title,
  text,
  image,
  bullets,
  reverse = false
}: {
  label: string;
  title: string;
  text: string;
  image: string;
  bullets: string[];
  reverse?: boolean;
}) {
  return (
    <Reveal>
      <article className={`grid gap-10 border-t border-neutral-200 pt-10 lg:grid-cols-2 lg:items-center ${reverse ? "lg:[&>div:first-child]:order-2" : ""}`}>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-exo-blue-900">{label}</p>
          <h3 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-none tracking-[-0.06em] text-[#071632]">
            {title}
          </h3>
          <p className="mt-6 max-w-xl leading-8 text-exo-slate-600">{text}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {bullets.map((bullet) => (
              <span key={bullet} className="rounded-full border border-neutral-200 bg-[#f7f9fc] px-4 py-2 text-sm font-bold text-[#18243a]">
                {bullet}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] bg-[#f7f9fc] p-4">
          <Image
            src={image}
            width={1448}
            height={1086}
            alt={`Sistema construtivo EXO7: ${title}`}
            sizes="(min-width: 1024px) 520px, 100vw"
            className="w-full object-contain"
          />
        </div>
      </article>
    </Reveal>
  );
}
