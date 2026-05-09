import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Gauge,
  Leaf,
  type LucideIcon,
  MapPin,
  ShieldCheck,
  Sparkles,
  Timer,
  Zap
} from "lucide-react";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Navbar } from "@/components/navbar";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { ButtonLink } from "@/components/ui/button";

const advantages = [
  {
    title: "Obras em ritmo industrial",
    text: "Sistemas construtivos que encurtam cronogramas e reduzem interferências no canteiro.",
    image: "/assets/icons/velocidade.png"
  },
  {
    title: "Conforto termoacústico",
    text: "Paredes com alto desempenho para ambientes mais silenciosos, estáveis e eficientes.",
    image: "/assets/icons/isolamento.png"
  },
  {
    title: "Construção mais limpa",
    text: "Menos desperdício, menos entulho e mais previsibilidade do início à entrega.",
    image: "/assets/icons/sustentavel.png"
  },
  {
    title: "Economia inteligente",
    text: "Projeto integrado, montagem ágil e menor retrabalho para otimizar investimento.",
    image: "/assets/icons/economia.png"
  },
  {
    title: "Precisão técnica",
    text: "Soluções compatibilizadas para performance estrutural, vedação e acabamento.",
    image: "/assets/icons/precisao.png"
  },
  {
    title: "Engenharia integrada",
    text: "Do estudo à execução, decisões técnicas alinhadas para reduzir risco e acelerar obra.",
    image: "/assets/icons/engenharia.png"
  }
];

const metrics = [
  ["28 dias", "referência de execução para casas compactas"],
  ["70%", "menos resíduos em sistemas industrializados"],
  ["4x", "mais velocidade em etapas de vedação"],
  ["360°", "engenharia, obra e tecnologia no mesmo fluxo"]
];

const reasons: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Timer,
    title: "Prazo como critério de projeto",
    text: "A solução construtiva é escolhida para acelerar execução sem criar gargalos no acabamento."
  },
  {
    icon: ShieldCheck,
    title: "Confiabilidade técnica",
    text: "Compatibilização e método reduzem retrabalho, perdas e decisões improvisadas em obra."
  },
  {
    icon: Leaf,
    title: "Eficiência sustentável",
    text: "Menos resíduos, melhor isolamento e sistemas mais leves para construir com responsabilidade."
  },
  {
    icon: Gauge,
    title: "Performance mensurável",
    text: "Cada etapa é pensada para entregar valor em velocidade, conforto, custo total e manutenção."
  }
];

const whatsapp = "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20quero%20planejar%20uma%20obra%20com%20a%20EXO7.";

export default function Home() {
  return (
    <main id="top" className="overflow-hidden">
      <Navbar />
      <FloatingWhatsApp />

      <section className="relative min-h-[100svh] pt-20">
        <div className="absolute inset-0 -z-10 blueprint-grid opacity-70" />
        <div className="absolute right-[-16rem] top-20 -z-10 size-[42rem] rounded-full bg-exo-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-[-14rem] -z-10 size-[34rem] rounded-full bg-exo-green-500/15 blur-3xl" />
        <div className="section-shell grid min-h-[calc(100svh-5rem)] items-center gap-10 py-12 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal className="max-w-2xl">
            <p className="mb-5 inline-flex rounded-full bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-exo-blue-900 shadow-[0_12px_40px_rgba(15,23,42,.08)]">
              EXO7 Build
            </p>
            <h1 className="text-balance font-display text-[clamp(3.4rem,8vw,7.25rem)] font-bold leading-[0.86] tracking-[-0.075em] text-slate-950">
              Engenharia que acelera o futuro da obra.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 md:text-xl">
              Construção integrada com EPS, paredes prontas termoacústicas, painéis monolíticos e Steel Frame para entregar mais rápido, com precisão e menos desperdício.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={whatsapp} target="_blank" rel="noreferrer" className="gap-2">
                Planejar minha obra <ArrowRight size={18} />
              </ButtonLink>
              <ButtonLink href="#tecnologias" variant="secondary">
                Ver tecnologias
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="relative">
            <div className="absolute inset-x-10 bottom-8 h-20 rounded-full bg-exo-blue-900/20 blur-3xl" />
            <Image
              src="/assets/hero.png"
              width={1672}
              height={941}
              alt="Casa isométrica moderna construída com tecnologias EXO7"
              priority
              className="relative z-10 w-full drop-shadow-[0_36px_80px_rgba(0,48,135,.22)]"
            />
          </Reveal>
        </div>
      </section>

      <section id="quem-somos" className="py-20 md:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal>
            <SectionHeader
              eyebrow="Quem somos"
              title="Integramos projeto, sistema construtivo e execução."
              text="A EXO7 nasce para reduzir o atrito da construção civil: menos improviso, mais compatibilização e tecnologia aplicada onde ela realmente encurta prazo."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              {metrics.map(([value, label]) => (
                <div key={value} className="border-t border-slate-200 pt-6">
                  <strong className="font-display text-4xl tracking-[-0.06em] text-exo-blue-900">{value}</strong>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="vantagens" className="bg-white py-20 md:py-28">
        <div className="section-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Vantagens"
              title="Mais velocidade sem abrir mão de desempenho."
              text="A combinação entre engenharia e sistemas industrializados entrega um canteiro mais previsível, limpo e eficiente."
            />
          </Reveal>
          <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <article className="group relative min-h-64 border-t border-slate-200 pt-6">
                  <Image
                    src={item.image}
                    width={1254}
                    height={1254}
                    alt={`Ícone isométrico EXO7: ${item.title}`}
                    className="mb-2 size-28 object-contain transition duration-500 group-hover:-translate-y-2 group-hover:scale-105"
                  />
                  <h3 className="font-display text-2xl font-bold tracking-[-0.04em] text-slate-950">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="tecnologias" className="relative bg-exo-blue-950 py-20 text-white md:py-28">
        <div className="absolute inset-0 blueprint-grid opacity-25" />
        <div className="section-shell relative">
          <Reveal>
            <SectionHeader
              eyebrow="Tecnologias"
              title="Sistemas construtivos para montar com precisão."
              text="Escolhemos a tecnologia conforme o objetivo da obra: prazo, desempenho, leveza, isolamento, sustentabilidade e custo total."
              light
            />
          </Reveal>
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <Reveal>
              <TechnologyPanel
                title="EPS + Paredes Prontas Termoacústicas"
                text="Painéis de alto desempenho para reduzir etapas, aumentar isolamento e acelerar fechamentos com acabamento previsível."
                image="/assets/eps-paredes-prontas.png"
                bullets={["Conforto térmico", "Menos entulho", "Montagem acelerada"]}
              />
            </Reveal>
            <Reveal delay={0.1}>
              <TechnologyPanel
                title="Steel Frame"
                text="Estrutura leve, precisa e industrializada, ideal para obras rápidas, ampliações e soluções com menor carga sobre fundações."
                image="/assets/steel-frame.png"
                bullets={["Leveza estrutural", "Precisão milimétrica", "Execução limpa"]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 md:py-28">
        <div className="section-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Cases e portfólio"
              title="Obras com leitura clara: velocidade, acabamento e confiança."
              text="Do estudo ao fechamento, cada projeto é pensado como um sistema integrado, com tecnologia aplicada para simplificar decisões e execução."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-14 overflow-hidden rounded-[2.5rem] bg-exo-blue-950 shadow-[0_30px_90px_rgba(0,48,135,.22)]">
              <Image
                src="/assets/ultima-cta.png"
                width={1916}
                height={821}
                alt="Render isométrico de casa finalizada com solução construtiva EXO7"
                className="h-auto w-full object-cover"
              />
              <div className="grid gap-8 p-8 text-white md:grid-cols-[1fr_auto] md:p-10">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-200">Residencial de alta performance</p>
                  <h3 className="mt-3 font-display text-3xl font-bold tracking-[-0.05em]">Casa pronta para evoluir junto com o terreno, o clima e o prazo.</h3>
                </div>
                <ButtonLink href={whatsapp} variant="ghost" target="_blank" rel="noreferrer" className="self-center">
                  Quero um projeto assim
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="por-que" className="bg-white py-20 md:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <SectionHeader
              eyebrow="Por que EXO7"
              title="A obra deixa de ser sequência de problemas e vira sistema."
              text="A diferença está em conectar engenharia, materiais, montagem e cronograma desde o primeiro desenho."
            />
          </Reveal>
          <div className="grid gap-5">
            {reasons.map(({ icon: Icon, title, text }) => (
              <Reveal key={title}>
                <div className="grid grid-cols-[3rem_1fr] gap-5 border-t border-slate-200 pt-5">
                  <div className="grid size-12 place-items-center rounded-2xl bg-exo-blue-900 text-white">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-[-0.04em] text-slate-950">{title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="relative bg-exo-blue-950 py-20 text-white md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,123,255,.26),transparent_28rem),radial-gradient(circle_at_80%_70%,rgba(0,168,107,.22),transparent_24rem)]" />
        <div className="section-shell relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeader
              eyebrow="Contato"
              title="Vamos desenhar a obra mais inteligente para o seu terreno."
              text="Envie uma mensagem com o tipo de projeto, cidade e prazo desejado. A EXO7 retorna com o melhor caminho técnico."
              light
            />
            <div className="mt-8 space-y-4 text-blue-100">
              <p className="flex items-center gap-3"><MapPin size={20} /> Atendimento para projetos residenciais e comerciais.</p>
              <p className="flex items-center gap-3"><Zap size={20} /> Resposta rápida para estudos de viabilidade.</p>
              <p className="flex items-center gap-3"><Sparkles size={20} /> Soluções com EPS, paredes prontas e Steel Frame.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <form className="rounded-[2rem] bg-white p-5 text-slate-950 shadow-[0_30px_90px_rgba(0,0,0,.24)] md:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Nome" placeholder="Seu nome" />
                <Field label="WhatsApp" placeholder="(00) 00000-0000" />
              </div>
              <Field label="E-mail" placeholder="voce@email.com" type="email" />
              <Field label="Tipo de obra" placeholder="Casa, comércio, ampliação..." />
              <label className="mt-4 block">
                <span className="text-sm font-bold text-slate-700">Mensagem</span>
                <textarea
                  className="focus-ring mt-2 min-h-32 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base outline-none transition focus:bg-white"
                  placeholder="Conte rapidamente onde será a obra, metragem aproximada e objetivo de prazo."
                />
              </label>
              <ButtonLink href={whatsapp} target="_blank" rel="noreferrer" className="mt-6 w-full gap-2">
                Enviar pelo WhatsApp <ArrowRight size={18} />
              </ButtonLink>
            </form>
          </Reveal>
        </div>
      </section>

      <footer className="bg-[#061636] py-10 text-white">
        <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Image src="/assets/logo/logo-horizontal.png" width={170} height={58} alt="EXO7" className="h-9 w-auto brightness-0 invert" />
          <p className="max-w-2xl text-sm leading-6 text-blue-100">
            EXO7 Build — engenharia integrada para obras rápidas, limpas, econômicas e sustentáveis.
          </p>
          <a className="focus-ring rounded-full text-sm font-bold text-blue-100 hover:text-white" href="#top">
            Voltar ao topo
          </a>
        </div>
      </footer>
    </main>
  );
}

function TechnologyPanel({
  title,
  text,
  image,
  bullets
}: {
  title: string;
  text: string;
  image: string;
  bullets: string[];
}) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.06] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,.14)] backdrop-blur">
      <Image
        src={image}
        width={1448}
        height={1086}
        alt={`Imagem isométrica da tecnologia ${title}`}
        className="aspect-[1.25] w-full rounded-[1.5rem] object-contain drop-shadow-[0_30px_70px_rgba(0,0,0,.25)] transition duration-500 group-hover:scale-[1.03]"
      />
      <div className="p-3 md:p-5">
        <h3 className="font-display text-3xl font-bold tracking-[-0.05em]">{title}</h3>
        <p className="mt-4 leading-7 text-blue-100">{text}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {bullets.map((bullet) => (
            <span key={bullet} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm font-bold text-white">
              <CheckCircle2 size={16} className="text-exo-green-500" />
              {bullet}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <label className="mt-4 block">
      <span className="text-sm font-bold text-slate-700">{label}</span>
      <input
        type={type}
        className="focus-ring mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-base outline-none transition focus:bg-white"
        placeholder={placeholder}
      />
    </label>
  );
}
