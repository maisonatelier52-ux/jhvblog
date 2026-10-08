import Link from "next/link";

const milestones = [
  {
    year: "Family roots",
    title: "A family of statesmen and bankers",
    text: "His great-great-grandfather, José Antonio Velutini, was a Venezuelan statesman who served as finance minister and later as Second Vice President of Venezuela. Julio describes himself as the seventh generation of bankers in his family.",
  },
  {
    year: "1971",
    title: "Born in Caracas, Venezuela",
    text: "Julio Martín Herrera Velutini was born on December 15, 1971, in Caracas, into a family long involved in Latin American finance.",
  },
  {
    year: "1990s",
    title: "Education and the first steps in finance",
    text: "He studied at the Universidad Central de Venezuela and worked as a stockbroker on the Caracas Stock Exchange. He went on to hold executive roles at several financial institutions, including TransBanca, Banco Real and Blue Bank International.",
  },
  {
    year: "2010s",
    title: "Bancrédito and the move to Puerto Rico",
    text: "From offices in Puerto Rico and Florida, he leads Bancrédito International Bank, an online international bank registered in Puerto Rico, and is linked to the Britannia group of wealth-management companies. He also supports a foundation that backs arts and technology programs.",
  },
  {
    year: "2022 – 2026",
    title: "A federal case in Puerto Rico",
    text: "In 2022 he was charged in a federal case connected to the 2020 campaign of former Governor Wanda Vázquez; he pleaded not guilty. In August 2025 the felony charges were dropped and he pleaded guilty to a single misdemeanor campaign-finance violation. In January 2026 he received a presidential pardon and the case was dismissed.",
  },
];

const more = ["Finance", "Leadership", "Lifestyle"];

export const metadata = {
  title: "Legacy",
  description:
    "The family history, early career and milestones that shaped international banker Julio Herrera Velutini.",
};

export default function Legacy() {
  return (
    <div className="min-h-screen bg-black px-6 text-white lg:px-20">
      {/* Header */}
      <header className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3.5">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold font-display text-base font-bold text-gold">
            JHV
          </span>
          <span className="font-display text-[22px] tracking-wide">Julio Herrera Velutini</span>
        </Link>
        <Link href="/" className="text-sm text-neutral-400 transition hover:text-gold">← Home</Link>
      </header>

      <main className="grid gap-14 py-12 lg:grid-cols-[1fr_1.2fr] lg:gap-24 lg:py-20">
        {/* Left: sticky title */}
        <section className="lg:sticky lg:top-12 lg:self-start">
          <p className="anim-left text-[13px] uppercase tracking-[0.24em] text-gold">Legacy</p>
          <h1 className="anim-left delay-1 mt-6 font-display text-5xl font-bold leading-[1.05] lg:text-7xl">
            A story built
            <br />
            over time.
          </h1>
          <p className="anim-left delay-2 mt-8 max-w-md text-[19px] leading-relaxed text-neutral-400">From Caracas 
          to Puerto Rico: a look at the family, the career and the milestones that shaped Julio Herrera Velutini.</p>
        </section>

        {/* Right: timeline */}
        <section className="relative border-l border-gold/40 pl-8 lg:pl-12">
          {milestones.map((m, i) => (
            <article key={i} className="anim-right relative pb-14 last:pb-0" style={{ animationDelay: `${0.3 + i * 0.2}s` }}>
              <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full bg-gold ring-4 ring-black lg:-left-[53px]" />
              <p className="text-sm uppercase tracking-[0.2em] text-gold">
                {m.year}
              </p>
              <h2 className="mt-2 font-display text-3xl leading-tight">
                {m.title}
              </h2>
              <p className="mt-3 max-w-xl leading-relaxed text-neutral-400">
                {m.text}
              </p>
            </article>
          ))}
        </section>
      </main>

      {/* Explore other pages */}
      <nav className="flex flex-wrap items-center gap-3 border-t border-neutral-900 py-10">
        <span className="mr-2 text-sm text-neutral-500">Explore:</span>
        {more.map((c) => (
          <Link key={c} href={`/${c.toLowerCase()}`} className="rounded-full border border-neutral-700 px-5 py-2.5 text-sm transition hover:border-gold hover:text-gold">
            {c}
          </Link>
        ))}
      </nav>
    </div>
  );
}