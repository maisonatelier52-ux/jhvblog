import Image from "next/image";
import Link from "next/link";

const categories = ["Finance", "Legacy", "Leadership", "Lifestyle"];

const stats = [
  { value: "30+", label: "Years in finance" },
  { value: "5", label: "Financial hubs" },
  { value: "3", label: "Foundations" },
];

export default function Home() {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden bg-black px-5 text-white sm:px-8 lg:h-dvh lg:px-20">
      {/* Background glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_55%_at_80%_40%,rgba(201,162,75,0.14),transparent),radial-gradient(45%_45%_at_0%_100%,rgba(201,162,75,0.07),transparent)]"/>

      {/* Header */}
      <header className="relative z-10 flex h-20 shrink-0 items-center gap-3 sm:gap-3.5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold font-display text-[10px] font-bold text-gold shadow-[0_0_16px_rgba(201,162,75,0.25)] sm:h-9 sm:w-9 sm:text-xs">
          JHV
        </div>
        <Link href="/" className="font-display text-lg tracking-wide sm:text-[15px]">Julio Herrera Velutini</Link>
      </header>

      {/*
        MOBILE:  image on top, title sits INSIDE the image (same grid cell),
                 then intro, tags and stats underneath.
        DESKTOP: text on the left, image on the right.
      */}
      <main className="relative z-10 grid min-h-0 flex-1 grid-cols-1 pb-12 lg:grid-cols-[1fr_1.15fr] lg:grid-rows-[minmax(0,1fr)] lg:gap-20">
        {/* Left column ("contents" on mobile so its children become grid items) */}
        <section className="contents lg:flex lg:flex-col lg:gap-[clamp(1rem,3vh,1.75rem)] lg:self-center">
          {/* Title block: overlays the image on mobile */}
          <div className="relative z-20 col-start-1 row-start-1 mx-auto flex w-full max-w-md flex-col gap-3 self-end p-6 sm:max-w-lg sm:p-8 lg:col-start-auto lg:row-start-auto lg:mx-0 lg:max-w-none lg:gap-[clamp(1rem,3vh,1.75rem)] lg:self-auto lg:p-0">
            <div className="anim-left flex items-center gap-4">
              <span className="h-px w-10 bg-gold sm:w-12" />
              <p className="text-xs uppercase tracking-[0.3em] text-gold sm:text-[13px]">The Blog</p>
            </div>

            <h1 className="anim-left delay-1 font-display text-[clamp(1.6rem,7.2vw,2.75rem)] font-bold uppercase leading-[1.1] tracking-[0.02em] lg:text-[clamp(1.75rem,min(3.4vw,9vh),4.5rem)]">
              Julio Herrera
              <br />
              <span className="bg-gradient-to-r from-[#e8cf8a] via-gold to-[#a9812f] bg-clip-text text-transparent">
                Velutini
              </span>
            </h1>
          </div>

          {/* Intro */}
          <p className="anim-left delay-2 mx-auto mt-8 w-full max-w-md text-base leading-relaxed text-neutral-400 sm:max-w-lg sm:text-[19px] lg:mx-0 lg:mt-0 lg:max-w-[480px]">
            The family legacy, the career in finance and the causes behind international banker Julio Herrera Velutini.</p>

          {/* Tags */}
          <div className="anim-left delay-3 mx-auto mt-6 flex w-full max-w-md flex-wrap gap-2.5 sm:max-w-lg sm:gap-3 lg:mx-0 lg:mt-0 lg:max-w-none">
            {categories.map((c) => (
              <Link key={c} href={`/${c.toLowerCase()}`} className="group flex items-center gap-2 rounded-full border border-neutral-700 bg-white/[0.02] px-4 py-2.5 text-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-black sm:px-5">
                {c}
                <span className="-ml-3 hidden w-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:ml-0 group-hover:w-4 group-hover:opacity-100 lg:inline">
                  →
                </span>
              </Link>
            ))}
          </div>

          {/* Stats: desktop (hidden on very short screens so nothing is cut off) */}
          <div className="anim-left delay-3 hidden items-center gap-8 border-t border-neutral-800 pt-[clamp(1rem,3vh,1.75rem)] lg:[@media(min-height:760px)]:flex">
            {stats.map((x, i) => (
              <div key={x.label} className="flex items-center gap-8">
                {i > 0 && <span className="h-10 w-px bg-neutral-800" />}
                <div>
                  <p className="font-display text-3xl font-bold text-gold">
                    {x.value}
                  </p>
                  <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                    {x.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Right: single image with effects (first row on mobile) */}
        <section className="anim-right relative col-start-1 row-start-1 mx-auto min-h-0 w-full min-w-0 max-w-md sm:max-w-lg lg:col-start-auto lg:row-start-auto lg:mx-0 lg:h-full lg:max-w-none">
          {/* ---- Background shapes behind the photo ---- */}
          {/* soft gold glow */}
          <div className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-gold/10 blur-3xl" />
          {/* big gold circle */}
          <div className="pointer-events-none absolute -right-8 -top-8 aspect-square h-[55%] rounded-full bg-gradient-to-br from-gold/40 via-gold/10 to-transparent lg:-right-12 lg:-top-12 lg:h-[65%]" />
          {/* slowly rotating dashed ring */}
          <div className="pointer-events-none absolute -left-8 top-[18%] h-40 w-40 animate-[spin_40s_linear_infinite] rounded-full border border-dashed border-gold/50 lg:-left-14 lg:h-72 lg:w-72" />
          {/* second ring, rotating the other way */}
          <div className="pointer-events-none absolute -bottom-6 -right-6 h-32 w-32 animate-[spin_30s_linear_infinite_reverse] rounded-full border border-gold/30 border-t-gold lg:-bottom-10 lg:-right-10 lg:h-56 lg:w-56" />
          {/* dot grid */}
          <div className="pointer-events-none absolute -left-4 bottom-6 h-24 w-24 bg-[radial-gradient(circle,rgba(201,162,75,0.7)_1.5px,transparent_1.5px)] [background-size:16px_16px] lg:-left-6 lg:bottom-8 lg:h-40 lg:w-40" />
          {/* pulsing diamonds */}
          <div className="pointer-events-none absolute -top-4 left-1/3 h-3 w-3 rotate-45 animate-pulse bg-gold" />
          <div className="pointer-events-none absolute -right-2 top-1/2 h-2.5 w-2.5 rotate-45 animate-pulse bg-gold/70 [animation-delay:1s] lg:-right-3" />
          {/* offset gold outline */}
          <div className="pointer-events-none absolute inset-0 translate-x-3 translate-y-3 rounded-[1.5rem] border border-gold/40 lg:translate-x-4 lg:translate-y-4 lg:rounded-[2rem]" />

          {/* photo */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] bg-neutral-950 shadow-2xl shadow-black transition duration-700 hover:scale-[1.015] lg:aspect-auto lg:h-full lg:rounded-[2rem]">
            <Image src="/images/julio.webp" alt="Julio Herrera Velutini" fill priority sizes="(min-width: 1024px) 50vw, (min-width: 640px) 512px, 100vw" className="anim-zoom object-cover object-top"/>
            {/* fade into black at the bottom (taller on mobile so the title is readable) */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/90 via-black/50 to-transparent lg:h-1/2 lg:from-black/80 lg:via-transparent" />
            {/* moving gold light */}
            <div className="anim-shine pointer-events-none absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
          </div>
        </section>
      </main>
    </div>
  );
}