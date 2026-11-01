import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png";
import fachada from "@/assets/fachada-flor-de-lis.png";
import lirios from "@/assets/lirios-rosa.png";
import delicados from "@/assets/lirios-delicados.png";
import vermelhas from "@/assets/rosas-vermelhas.png";
import orquidea from "@/assets/orquidea-pink.png";
import presente from "@/assets/orquidea-presente.png";
import lilas from "@/assets/orquidea-lilas.png";
import laranja from "@/assets/lirios-laranja.png";
import cesta from "@/assets/cesta-amor.png";
import pelucia from "@/assets/buque-pelucia.png";
import chocolates from "@/assets/rosas-chocolates.png";
import girassois from "@/assets/girassois.png";
import claras from "@/assets/rosas-claras.png";
import rosa1 from "@/assets/rosas-1.png";
import rosa2 from "@/assets/rosas-2.png";
import rosa3 from "@/assets/rosas-3.png";
import rosa4 from "@/assets/rosas-4.png";
import rosa5 from "@/assets/rosas-5.png";
import rosa6 from "@/assets/rosas-6.png";

const PHONE = "5547991065803";
const wa = (msg: string) => `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
const MAPS = "https://www.google.com/maps/search/?api=1&query=Floricultura+Flor+de+Lis+Rua+Franz+Volles+1190+Blumenau";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Flor de Lis — Floricultura em Blumenau" },
      { name: "description", content: "Buquês, flores, orquídeas e cestas para presentear em Blumenau. Conheça a Flor de Lis na Itoupava Central e encomende pelo WhatsApp." },
      { property: "og:title", content: "Flor de Lis — Floricultura em Blumenau" },
      { property: "og:description", content: "Flores e presentes para transformar momentos. Fale pelo WhatsApp (47) 99106-5803." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const bouquets = [
  { img: lirios, name: "Lírios em tons de rosa", note: "Delicadeza entre pétalas, mosquitinhos e um laço rosa." },
  { img: vermelhas, name: "Rosas para declarar amor", note: "Rosas vermelhas e flores brancas em uma composição marcante." },
  { img: girassois, name: "Um abraço de girassóis", note: "Amarelo, verde e flores delicadas para iluminar o dia." },
  { img: delicados, name: "Buquê de lírios e astromélias", note: "Uma combinação suave de tons claros e folhagens." },
  { img: orquidea, name: "Orquídea com carinho", note: "Flores vibrantes, laço e balão para um presente especial." },
  { img: cesta, name: "Cesta com amor", note: "Chocolates, doces e um balão para acompanhar o carinho." },
  { img: presente, name: "Orquídea e pelúcia", note: "Uma composição para presentear, com embalagem e laço dourado." },
  { img: chocolates, name: "Rosas e chocolates", note: "Dois clássicos juntos em um buquê cheio de afeto." },
  { img: pelucia, name: "Flores e um abraço", note: "Um buquê em tons de rosa acompanhado de uma pelúcia." },
  { img: lilas, name: "Orquídea em tons suaves", note: "Um presente delicado, com flores claras e embalagem lilás." },
  { img: laranja, name: "Lírios para alegrar", note: "Flores em laranja e amarelo com um toque de branco." },
  { img: claras, name: "Rosas em tons claros", note: "Pétalas creme e flores delicadas em uma combinação elegante." },
];

const reviews = [{ name: "Pedro Machado", text: "Excelente atendimento!" }];
const roseModels = [rosa1, rosa2, rosa3, rosa4, rosa5, rosa6];

function RoseCatalogue() {
  const [quantity, setQuantity] = useState(1);
  return (
    <section id="rosas" className="rose-section py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        <div>
          <p className="eyebrow">PEQUENOS GESTOS, GRANDES SENTIMENTOS</p>
          <h2 className="mt-4 text-5xl font-light md:text-6xl">Diga com <em>rosas.</em></h2>
          <p className="mt-5 max-w-md text-muted-foreground">Da lembrança delicada ao buquê especial. Escolha a quantidade e inspire-se nos modelos da Flor de Lis.</p>
          <div className="mt-7 flex flex-wrap gap-2" role="group" aria-label="Quantidade de rosas">
            {roseModels.map((_, i) => <button type="button" key={i} aria-pressed={quantity === i + 1} onClick={() => setQuantity(i + 1)} className={`rose-choice ${quantity === i + 1 ? "selected" : ""}`}>{i + 1}</button>)}
          </div>
          <div className="rose-price mt-7" aria-live="polite"><span>{quantity} {quantity === 1 ? "rosa" : "rosas"}</span><strong>{(quantity * 22).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</strong></div>
          <p className="mt-4 text-sm text-muted-foreground">Girassóis seguem os mesmos valores. Confirme preço, disponibilidade, complementos e personalização no WhatsApp.</p>
          <div className="mt-7"><WaButton msg={`Olá, Flor de Lis! Vi no site o modelo de ${quantity} ${quantity === 1 ? "rosa" : "rosas"}, por ${(quantity * 22).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}. Podem confirmar o valor e a disponibilidade?`}>Quero este modelo</WaButton></div>
        </div>
        <div className="rose-art">
          <p className="eyebrow">FLOR DE LIS · CATÁLOGO DE ROSAS</p>
          <h3 className="mt-4 text-4xl italic">O carinho ganha forma</h3>
          <img src={roseModels[quantity - 1]} alt={`Modelo de arranjo com ${quantity} ${quantity === 1 ? "rosa" : "rosas"} fornecido pela Flor de Lis`} loading="lazy" width="212" height="320" className="mx-auto mt-7 h-80 w-auto rounded-t-full object-cover" />
          <div className="mt-7 grid grid-cols-3 gap-3 border-t border-primary/20 pt-5">
            {roseModels.map((_, i) => <div key={i} className="text-sm"><span>{i + 1} {i === 0 ? "rosa" : "rosas"}</span><strong className="mt-1 block text-primary">R$ {(i + 1) * 22},00</strong></div>)}
          </div>
          <p className="mt-5 text-xs text-muted-foreground">Modelos de referência. Flores, embalagens e acessórios podem variar.</p>
        </div>
      </div>
    </section>
  );
}

function WaIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function WaButton({ msg, children, big }: { msg: string; children: React.ReactNode; big?: boolean }) {
  return (
    <a
      href={wa(msg)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 rounded-full bg-accent font-medium text-accent-foreground transition-transform active:scale-95 hover:brightness-110 ${big ? "px-7 py-4 text-lg" : "px-5 py-3"}`}
    >
      <WaIcon />
      {children}
    </a>
  );
}

const occasions = ["Aniversário", "Namoro / amor", "Dia das Mães", "Pedido de desculpas", "Agradecimento", "Só porque sim"];
const colors = ["Vermelho", "Rosa", "Branco", "Colorido", "Lilás", "Vocês escolhem"];

const Chips = ({ list, value, set }: { list: string[]; value: string; set: (v: string) => void }) => (
    <div className="flex flex-wrap gap-2">
      {list.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => set(o)}
          aria-pressed={value === o}
          className={`rounded-full border px-4 py-2 text-sm transition-colors ${value === o ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-primary"}`}
        >
          {o}
        </button>
      ))}
    </div>
  );


function OrderBuilder() {
  const [occasion, setOccasion] = useState<string>("Aniversário");
  const [color, setColor] = useState<string>("Vermelho");
  const [mode, setMode] = useState("Entrega");
  const [when, setWhen] = useState("Hoje");
  const msg = `Olá, Flor de Lis! Quero um buquê.\n• Ocasião: ${occasion}\n• Cores: ${color}\n• Preferência: ${mode} — ${when}\nPodem confirmar disponibilidade, opções e valores?`;


  return (
    <div className="space-y-7">
      <fieldset className="space-y-3">
        <legend className="mb-3 font-display text-xl">Qual a ocasião?</legend>
        <Chips list={occasions} value={occasion} set={setOccasion} />
      </fieldset>
      <fieldset className="space-y-3">
        <legend className="mb-3 font-display text-xl">Cores preferidas</legend>
        <Chips list={colors} value={color} set={setColor} />
      </fieldset>
      <div className="grid gap-7 sm:grid-cols-2">
        <fieldset>
          <legend className="mb-3 font-display text-xl">Como recebe?</legend>
          <Chips list={["Entrega", "Retiro na loja"]} value={mode} set={setMode} />
        </fieldset>
        <fieldset>
          <legend className="mb-3 font-display text-xl">Para quando?</legend>
          <Chips list={["Hoje", "Amanhã", "Outra data"]} value={when} set={setWhen} />
        </fieldset>
      </div>
      <div className="rounded-sm border border-dashed border-border bg-card p-4 text-sm whitespace-pre-line text-muted-foreground">{msg}</div>
      <WaButton msg={msg} big>Enviar pedido no WhatsApp</WaButton>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen pb-24 md:pb-0">
      {/* top strip */}
      <div className="bg-wine-deep py-2 text-center text-sm text-primary-foreground">
        Flores, buquês e cestas · Itoupava Central, Blumenau
      </div>

      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="/" className="flex items-center gap-3">
          <img src={logo} alt="Flor de Lis" className="size-16 rounded-full object-cover" />
          <span className="font-display text-xl italic">Flor de Lis</span>
        </a>
        <nav className="hidden gap-8 text-sm md:flex">
          <a href="#buques" className="hover:text-primary">Buquês</a>
          <a href="#rosas" className="hover:text-primary">Rosas e valores</a>
          <a href="#pedido" className="hover:text-primary">Montar pedido</a>
          <a href="#loja" className="hover:text-primary">Loja</a>
        </nav>
        <a href={wa("Olá! Gostaria de fazer um pedido.")} target="_blank" rel="noopener noreferrer" className="hidden items-center gap-2 text-sm font-medium text-accent md:flex">
          <WaIcon className="size-4" /> (47) 99106-5803
        </a>
      </header>

      {/* hero */}
      <section className="mx-auto grid max-w-6xl gap-10 px-5 pt-6 pb-20 md:grid-cols-12 md:pt-14">
        <div className="md:col-span-6 md:pt-10">
          <p className="eyebrow mb-6">FLORICULTURA EM BLUMENAU</p>
          <h1 className="bloom-in text-5xl leading-[1.02] font-light tracking-tight md:text-7xl">
            Transformando momentos em <em className="text-primary">carinho.</em>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            Tem sentimentos que flores dizem melhor. Encontre buquês, orquídeas e cestas para celebrar, agradecer ou surpreender quem faz parte da sua vida.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <WaButton msg="Olá, Flor de Lis! Quero encomendar um buquê." big>Pedir pelo WhatsApp</WaButton>
            <a href="#buques" className="underline decoration-border underline-offset-4 hover:decoration-primary">Ver buquês</a>
          </div>
          <a href="#avaliacoes" className="mt-10 flex items-center gap-3 text-sm">
            <span className="text-primary" aria-hidden>★★★★★</span>
            <span><strong>5,0</strong> no Google · 1 avaliação</span>
          </a>
        </div>
        <div className="relative md:col-span-6">
          <img src={lirios} alt="Buquê real de lírios rosa da Flor de Lis" fetchPriority="high" width="551" height="799" className="aspect-[4/5] w-full rounded-sm object-cover md:ml-auto md:w-[85%]" />
          <img src={vermelhas} alt="Rosas vermelhas da Flor de Lis" width="548" height="800" className="absolute -bottom-10 -left-2 hidden w-44 rounded-sm border-8 border-background object-cover md:block" />
        </div>
      </section>

      {/* bouquets */}
      <section id="buques" className="border-t border-border py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-lg text-4xl leading-tight font-light md:text-5xl">Um presente para cada sentimento</h2>
            <p className="max-w-xs text-muted-foreground">Conheça algumas criações da Flor de Lis. Toque no seu favorito para consultar opções, valores e disponibilidade.</p>
          </div>
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {bouquets.map((b, i) => (
              <a
                key={b.name}
                href={wa(`Olá! Vi no site o produto "${b.name}" e quero um parecido. Quais tamanhos e valores vocês têm?`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block ${i === 1 ? "lg:mt-16" : ""}`}
              >
                <div className="overflow-hidden rounded-sm">
                  <img src={b.img} alt={b.name} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>
                <h3 className="mt-4 text-2xl">{b.name}</h3>
                <p className="mt-1 text-muted-foreground">{b.note}</p>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-accent">
                  <WaIcon className="size-4" /> Quero um assim
                </span>
              </a>
            ))}
            <div className="flex flex-col justify-center gap-4 rounded-sm bg-primary p-8 text-primary-foreground sm:col-span-2 lg:col-span-3 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:p-12">
              <div>
                <p className="font-display text-3xl leading-tight italic">Tem uma ideia diferente?</p>
                <p className="mt-3 max-w-md opacity-85">Mande uma foto de referência, a cor favorita ou só o orçamento. A gente cria.</p>
              </div>
              <a href={wa("Olá! Tenho uma ideia de buquê personalizado, posso mandar uma referência?")} target="_blank" rel="noopener noreferrer" className="self-start rounded-full bg-primary-foreground px-6 py-3.5 font-medium text-primary lg:shrink-0">
                Falar com a florista
              </a>
            </div>
          </div>
        </div>
      </section>

      <RoseCatalogue />

      {/* how it works */}
      <section className="bg-secondary py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-3">
          {[
            ["Você chama no WhatsApp", "Conta a ocasião, as cores e quanto quer investir."],
            ["Escolha com a nossa ajuda", "Consulte os modelos, valores e a disponibilidade das flores."],
            ["Combine os detalhes", "Confirme pelo WhatsApp a data, a retirada ou a possibilidade de entrega."],
          ].map(([t, d]: string[], i) => (
            <div key={t} className="border-t border-primary/40 pt-5">
              <span className="font-display text-5xl font-light text-primary">{i + 1}</span>
              <h3 className="mt-3 text-2xl">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* order builder */}
      <section id="pedido" className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="text-4xl leading-tight font-light md:text-5xl">Um presente com a sua intenção</h2>
            <p className="mt-5 max-w-sm text-muted-foreground">Escolha as opções e a mensagem chega pronta no nosso WhatsApp. Respondemos com sugestões e valores.</p>
            <img src={lilas} alt="Orquídea com embalagem lilás da Flor de Lis" loading="lazy" className="mt-10 hidden aspect-square w-full rounded-sm object-cover md:block" />
          </div>
          <div className="md:col-span-7">
            <OrderBuilder />
          </div>
        </div>
      </section>

      {/* reviews */}
      <section id="avaliacoes" className="bg-wine-deep py-20 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5">
          <p className="font-display text-7xl font-light md:text-8xl">5,0<span className="ml-3 inline-block text-xl opacity-70">em 1 avaliação no Google</span></p>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name}>
                <blockquote className="font-display text-xl leading-relaxed font-light italic">“{r.text}”</blockquote>
                <figcaption className="mt-4 text-sm opacity-70">{r.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* store */}
      <section id="loja" className="py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
          <img src={fachada} alt="Fachada da Floricultura Flor de Lis, com letreiro roxo e entrada na Rua Franz Volles, 1190, em Blumenau" loading="lazy" width="960" height="806" className="h-auto w-full rounded-sm" />
          <div>
            <h2 className="text-4xl leading-tight font-light md:text-5xl">O seu próximo gesto de carinho começa aqui.</h2>
            <p className="mt-5 text-lg text-muted-foreground">Venha conhecer a Flor de Lis na Itoupava Central. Um espaço de flores, presentes e acolhimento em Blumenau.</p>
            <address className="mt-8 space-y-1 not-italic">
              <p>R. Franz Volles, 1190 — Itoupava Central</p>
              <p>Blumenau, SC · CEP 89066-101</p>
              <p>(47) 99106-5803</p>
              <p className="pt-4">Segunda a sexta: 08h–12h e 13h30–18h30</p>
              <p>Sábado: 08h–12h</p>
              <p className="text-sm text-muted-foreground">Confirme horários de feriados pelo WhatsApp.</p>
            </address>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <WaButton msg="Olá! Quero fazer um pedido agora.">Pedir agora</WaButton>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="underline decoration-border underline-offset-4 hover:decoration-primary">Como chegar</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        Flor de Lis · Floricultura · Blumenau ·{" "}
        <a href="https://instagram.com/flordelisblumenau" target="_blank" rel="noopener noreferrer" className="underline">Instagram</a>
      </footer>

      {/* sticky mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
        <a href={wa("Olá, Flor de Lis! Quero encomendar um buquê.")} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-full bg-accent py-3.5 font-medium text-accent-foreground">
          <WaIcon /> Pedir pelo WhatsApp
        </a>
      </div>
      {/* desktop floating */}
      <a href={wa("Olá, Flor de Lis! Quero encomendar um buquê.")} target="_blank" rel="noopener noreferrer" aria-label="Pedir pelo WhatsApp" className="fixed right-6 bottom-6 z-50 hidden size-16 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg md:flex">
        <WaIcon className="size-8" />
      </a>
    </div>
  );
}
