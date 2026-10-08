import Link from "next/link";

const stats = [
  { value: "30+", label: "Years in banking and finance" },
  { value: "5", label: "Financial hubs: Puerto Rico, Florida, London, Geneva, Dubai" },
  { value: "7th", label: "Generation of bankers in his family (his own description)" },
];

const companies = [
  {
    name: "Bancrédito International Bank & Trust",
    place: "Puerto Rico · Florida",
    text: "An online international bank registered in Puerto Rico, with offices in Puerto Rico and Florida. Julio serves as Chairman of the Board.",
  },
  {
    name: "Consultiva",
    place: "Puerto Rico · New York",
    text: "An investment advisory firm registered with the U.S. Securities and Exchange Commission. The Bancrédito Group expanded by acquiring it in 2016.",
  },
  {
    name: "Britannia Financial Group",
    place: "London · Geneva · Dubai",
    text: "A London-based holding company he founded. Its group includes brokerage, wealth management, payments, securities and a bank and trust, with a presence in the UK, Switzerland and the Middle East.",
  },
];

const more = ["Legacy", "Leadership", "Lifestyle"];

export const metadata = {
  title: "Finance",
  description:
    "Bancrédito, Consultiva and Britannia Financial Group: the banking and wealth-management companies linked to Julio Herrera Velutini.",
};

export default function Finance() {
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
        <p className="anim-left text-[13px] uppercase tracking-[0.24em] text-gold">Finance</p>
        <h1 className="anim-left delay-1 mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.05] lg:text-7xl">
          Banking, across borders.
        </h1>
        <p className="anim-left delay-2 mt-8 max-w-2xl text-[19px] leading-relaxed text-neutral-400">Three decades 
        in international banking and wealth management, built from a base in Puerto Rico and reaching into New York, 
        London, Switzerland and Dubai.</p>

        {/* Stats */}
        <div className="mt-14 grid gap-px overflow-hidden border border-neutral-800 bg-neutral-800 md:grid-cols-3">
          {stats.map((s, i) => (
            <div key={s.value} className="anim-right bg-black p-8" style={{ animationDelay: `${0.3 + i * 0.15}s` }}>
              <p className="font-display text-6xl font-bold text-gold">{s.value}</p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Companies */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {companies.map((c, i) => (
            <article key={c.name} className="anim-right group border border-neutral-800 border-t-2 border-t-gold bg-neutral-950 p-8 transition hover:-translate-y-1 hover:border-gold/60" style={{ animationDelay: `${0.6 + i * 0.15}s` }}>
              <p className="text-xs uppercase tracking-[0.2em] text-gold">{c.place}</p>
              <h2 className="mt-4 font-display text-2xl leading-snug">{c.name}</h2>
              <p className="mt-4 leading-relaxed text-neutral-400">{c.text}</p>
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