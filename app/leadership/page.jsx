import Link from "next/link";

const roles = [
  {
    no: "01",
    role: "Chairman · Bancrédito",
    title: "Leading an international bank",
    text: "Chairman of the Board of Bancrédito International Bank & Trust, an online international bank registered in Puerto Rico.",
  },
  {
    no: "02",
    role: "Founder · Britannia Financial Group",
    title: "Building a global holding company",
    text: "Founded the London-based Britannia Financial Group and serves as its chairman. The group holds stakes in financial firms across several markets.",
  },
  {
    no: "03",
    role: "Growth",
    title: "Expanding through acquisition",
    text: "In 2016 the Bancrédito Group acquired Consultiva Wealth Management, an SEC-registered investment advisory firm in Puerto Rico and New York.",
  },
  {
    no: "04",
    role: "Family tradition",
    title: "Seven generations of banking",
    text: "He describes himself as the seventh generation of bankers in his family, carrying a long history in Latin American finance into new markets.",
  },
];

const more = ["Legacy", "Finance", "Lifestyle"];

export const metadata = {
  title: "Leadership",
  description:
    "The roles, companies and decisions that define how Julio Herrera Velutini leads in finance.",
};

export default function Leadership() {
  return (
    <div className="min-h-screen bg-black px-6 text-white lg:px-20">
      <header className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3.5">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold font-display text-base font-bold text-gold">
            JHV
          </span>
          <span className="font-display text-[22px] tracking-wide">Julio Herrera Velutini</span>
        </Link>
        <Link href="/" className="text-sm text-neutral-400 transition hover:text-gold">← Home</Link>
      </header>

      <main className="py-12 lg:py-20">
        <div className="grid items-end gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="anim-left text-[13px] uppercase tracking-[0.24em] text-gold">Leadership</p>
            <h1 className="anim-left delay-1 mt-6 font-display text-5xl font-bold leading-[1.05] lg:text-8xl">
              Led by
              <br />
              experience.
            </h1>
          </div>
          <p className="anim-left delay-2 max-w-md text-[19px] leading-relaxed text-neutral-400">The roles, 
          companies and decisions that define how Julio Herrera Velutini leads in finance.</p>
        </div>

        {/* Numbered rows */}
        <div className="mt-16 border-t border-neutral-800">
          {roles.map((r, i) => (
            <article key={r.no} className="anim-right group grid gap-4 border-b border-neutral-800 py-10 transition hover:bg-neutral-950 lg:grid-cols-[140px_1fr_1.2fr] lg:items-center lg:px-6" style={{ animationDelay: `${0.3 + i * 0.15}s` }}>
              <span className="font-display text-6xl font-bold text-neutral-800 transition group-hover:text-gold">
                {r.no}
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold">{r.role}</p>
                <h2 className="mt-2 font-display text-3xl leading-tight">{r.title}</h2>
              </div>
              <p className="leading-relaxed text-neutral-400">{r.text}</p>
            </article>
          ))}
        </div>
      </main>

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