import Link from "next/link";

const more = ["Legacy", "Finance", "Leadership"];

export const metadata = {
  title: "Lifestyle",
  description:
    "The foundations and causes Julio Herrera Velutini supports in animal welfare, the arts, technology and education.",
};

export default function Lifestyle() {
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
        <div className="text-center">
          <p className="anim-left text-[13px] uppercase tracking-[0.24em] text-gold">Lifestyle</p>
          <h1 className="anim-left delay-1 mx-auto mt-6 max-w-3xl font-display text-5xl font-bold leading-[1.05] lg:text-7xl">
            Beyond the boardroom.
          </h1>
          <p className="anim-left delay-2 mx-auto mt-8 max-w-xl text-[19px] leading-relaxed text-neutral-400">Away 
          from banking: the causes he supports in animal welfare, the arts, technology and education.</p>
        </div>

        {/* Mosaic */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:grid-rows-2">
          {/* Large card */}
          <article className="anim-right group relative flex min-h-[420px] flex-col justify-end overflow-hidden border border-neutral-800 bg-gradient-to-br from-[#2a2110] via-neutral-950 to-black p-10 lg:row-span-2" style={{ animationDelay: "0.3s" }}>
            <span className="absolute -right-4 -top-8 font-display text-[220px] font-bold leading-none text-gold/10 transition group-hover:text-gold/20">B</span>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">Education</p>
            <h2 className="mt-3 font-display text-3xl leading-tight">The Britannia Foundation</h2>
            <p className="mt-4 leading-relaxed text-neutral-300">Two programs for students and young talent: seed 
            funding for young professionals and artists who want to start a business, and internships for scholars 
            who need to work while they study.</p>
          </article>

          <article className="anim-right group relative overflow-hidden border border-neutral-800 bg-neutral-950 p-8 transition hover:border-gold/60" style={{ animationDelay: "0.45s" }}>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">Animal welfare</p>
            <h2 className="mt-3 font-display text-2xl leading-tight">The Lazarus Foundation</h2>
            <p className="mt-4 leading-relaxed text-neutral-400">A London-based animal rescue facility created by 
            Julio, who supports several causes for the protection of animals.</p>
          </article>

          <article className="anim-right group relative overflow-hidden border border-neutral-800 bg-neutral-950 p-8 transition hover:border-gold/60" style={{ animationDelay: "0.6s" }}>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">Arts &amp; technology</p>
            <h2 className="mt-3 font-display text-2xl leading-tight">Bancrédito Foundation</h2>
            <p className="mt-4 leading-relaxed text-neutral-400">A charitable foundation linked to his bank that 
            supports programs in the arts and technology.</p>
          </article>

          <article className="anim-right border border-gold/40 bg-gold/5 p-8 lg:col-span-2" style={{ animationDelay: "0.75s" }}>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">Giving back</p>
            <p className="mt-3 font-display text-2xl leading-snug">Philanthropy sits alongside banking in his work, 
            from helping young entrepreneurs to animal rescue.</p>
          </article>
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