import { createFileRoute } from "@tanstack/react-router";
import {
  Timer, Ticket, SlidersHorizontal, BadgePercent, CalendarDays, LineChart, Filter,
  PencilLine, Scale, CheckCircle2, Baby, Clock, Star, ShieldCheck,
} from "lucide-react";

import { Waitlist } from "@/components/waitlist";

const TITLE = "Haydial · Akıllı alışveriş asistanı";
const DESC = "Listeni yaz, gerisini Haydial halletsin. Online marketleri karşılaştırıp zamanını ve bütçeni koruyan en akıllı sepeti kuran yapay zekâ asistanı.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const steps = [
  { icon: PencilLine, t: "Listeni yaz, söyle ya da fotoğrafla", d: "Nasıl rahatsan öyle. Bir kere yazman yeterli." },
  { icon: Scale, t: "Haydial marketleri karşılaştırır", d: "Fiyatı, teslimat süresini ve tercih ettiğin markaları birlikte tartar." },
  { icon: CheckCircle2, t: "Sepetini onayla", d: "Neyin neden seçildiğini gör, tek dokunuşla onayla." },
];

const features = [
  { icon: Timer, t: "Aciliyet triyajı", d: "Her ürüne “1 saat içinde / bugün / acil değil” işareti. Acil olanlar tek markette toplanır; gerisi daha uygun, yavaş teslimatla ertesi güne kalır. Sepet akıllıca bölünür." },
  { icon: Ticket, t: "Kupon ve ücretsiz teslimat eşiği", d: "Sepet eşiğin biraz altındaysa kahve, soda gibi bozulmayan “joker ürünler”le tamamlamayı önerir. Son ekranda neyin neden eklendiğini gösterir." },
  { icon: SlidersHorizontal, t: "Kademeli marka tercihi", d: "“Fark %10'dan azsa hep bu marka, fazlaysa şu olabilir; bunlar yoksa hiç alma.” Sen seçtikçe öğrenir." },
  { icon: BadgePercent, t: "Gerçek fırsat yakalama", d: "Sık aldığın ürünlerde gerçekten iyi bir indirim varsa haber verir. Bildirim kirliliği yok." },
  { icon: CalendarDays, t: "Haftalık menüden sepet", d: "Bir tarif ya da haftalık menü seç, malzemeler sepete dolsun." },
  { icon: LineChart, t: "Fiyat takibi", d: "Sipariş vermeden de yakındaki marketlerin güncel fiyatlarını ve yarın başlayacak indirimleri izle." },
  { icon: Filter, t: "Kişisel tercih filtreleri", d: "İsteğe bağlı: dilersen kendi seçtiğin markaları dışarıda bırak. Filtreler tamamen senin seçimin; Haydial hiçbir listeyi dayatmaz." },
];

const audience = [
  { icon: Baby, t: "Çalışan ebeveynler", d: "Okul, iş, ev… Market turu listede yer almasın." },
  { icon: Clock, t: "Zamanı kıymetli olanlar", d: "Uygulamaları tek tek gezmek yerine tek listeyle bitir." },
  { icon: Star, t: "Markaya ve kaliteye önem verenler", d: "En ucuzu değil, senin istediğini bulur." },
];

function Phone() {
  const items = [
    ["Süt 1 L", "1 saat", true], ["Ekmek", "1 saat", true], ["Domates 1 kg", "bugün", false],
    ["Kahve", "acil değil", false], ["Deterjan", "acil değil", false],
  ] as const;
  return (
    <div className="mx-auto w-64 rounded-[2.5rem] border-8 border-foreground bg-card p-4 shadow-2xl sm:w-72">
      <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-border" />
      <p className="text-xs text-muted-foreground">Bu haftaki liste</p>
      <p className="font-display text-xl">Sepetim</p>
      <ul className="mt-4 space-y-2">
        {items.map(([n, u, urgent]) => (
          <li key={n} className="flex items-center justify-between rounded-lg border border-border px-3 py-2 text-sm">
            <span>{n}</span>
            <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${urgent ? "bg-brand text-brand-foreground" : "bg-brand-soft"}`}>{u}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 rounded-lg bg-brand-soft p-3 text-xs">
        <p className="font-semibold">2 teslimata bölündü</p>
        <p className="text-muted-foreground">Acil olanlar 1 saat içinde, gerisi yarın.</p>
      </div>
      <div className="mt-3 rounded-full bg-brand py-2 text-center text-xs font-semibold text-brand-foreground">Sepeti onayla</div>
    </div>
  );
}

function Section({ id, title, kicker, children }: { id?: string; title: string; kicker?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-20">
      {kicker && <p className="text-sm font-semibold uppercase tracking-widest text-brand">{kicker}</p>}
      <h2 className="mt-2 font-display text-3xl sm:text-4xl">{title}</h2>
      <div className="mt-10">{children}</div>
    </section>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="font-display text-2xl">Haydial</span>
        <a href="#katil" className="text-sm font-medium hover:text-brand">Erken erişim</a>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-8 md:grid-cols-2">
        <div className="animate-rise">
          <p className="inline-block rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold">“Hadi al” diye okunur</p>
          <h1 className="mt-5 font-display text-4xl leading-tight sm:text-6xl">Listeni yaz, gerisini Haydial halletsin.</h1>
          <p className="mt-5 max-w-lg text-lg text-muted-foreground">
            Yapay zekâ destekli alışveriş asistanı: hangi markette ne var, nerede daha uygun, hangisi bugün lazım; senin yerine o düşünür.
          </p>
          <a href="#katil" className="mt-8 inline-block rounded-full bg-brand px-7 py-3.5 font-semibold text-brand-foreground transition-opacity hover:opacity-90">
            Erken erişim listesine katıl
          </a>
        </div>
        <div className="animate-rise [animation-delay:200ms]"><Phone /></div>
      </section>

      <Section kicker="3 adım" title="Nasıl çalışır">
        <ol className="grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.t} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand font-semibold text-brand-foreground">{i + 1}</span>
                <s.icon className="h-5 w-5 text-brand" />
              </div>
              <h3 className="mt-4 font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section kicker="Özellikler" title="En ucuz değil, en akıllı sepet">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article key={f.t} className="rounded-2xl border border-border bg-card p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft"><f.icon className="h-5 w-5" /></span>
              <h3 className="mt-4 font-semibold">{f.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section kicker="Kimin için" title="Market turuna vakti olmayanlar için">
        <div className="grid gap-6 md:grid-cols-3">
          {audience.map((a) => (
            <div key={a.t} className="flex gap-4">
              <a.icon className="mt-1 h-6 w-6 shrink-0 text-brand" />
              <div><h3 className="font-semibold">{a.t}</h3><p className="mt-1 text-sm text-muted-foreground">{a.d}</p></div>
            </div>
          ))}
        </div>
      </Section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl bg-brand-soft p-8 sm:p-12">
          <ShieldCheck className="h-8 w-8 text-brand" />
          <h2 className="mt-4 font-display text-3xl sm:text-4xl">Verin senin.</h2>
          <ul className="mt-6 space-y-2 text-base">
            <li>Tercihlerin yalnızca senin sepetini iyileştirmek için kullanılır.</li>
            <li>Kişisel verilerin satılmaz.</li>
            <li>KVKK'ya uygun şekilde işlenir.</li>
          </ul>
        </div>
      </section>

      <section id="katil" className="mx-auto max-w-xl scroll-mt-10 px-6 py-24 text-center">
        <h2 className="font-display text-3xl sm:text-4xl">Erken erişim listesine katıl</h2>
        <p className="mt-3 text-muted-foreground">Haydial hazır olduğunda ilk sen dene.</p>
        <div className="mt-8"><Waitlist /></div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <span>© 2026 Haydial · Taslak sürüm · <a href="/aydinlatma" className="underline underline-offset-2 hover:text-foreground">KVKK Aydınlatma Metni</a></span>
          <span>İletişim: merhaba@haydial.ai</span>
        </div>
      </footer>
    </main>
  );
}
