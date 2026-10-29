import Image from "next/image";
import Link from "next/link";
import Logo from "../components/Logo";
import { Arrow } from "../components/PageShell";

const stats = [
  { value: "30+", label: "Years in finance" },
  { value: "5", label: "Financial hubs" },
  { value: "3", label: "Foundations" },
];

export default function Home() {
  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-black px-5 text-white sm:px-8 lg:px-20 land:pl-[max(2rem,env(safe-area-inset-left))] land:pr-0">
      <header className="relative z-10 flex h-16 shrink-0 items-center gap-3">
        <Logo size="sm" />
        <Link href="/" className="font-display text-base tracking-wide sm:text-[15px]">Julio Herrera Velutini</Link>
      </header>

      <main className="mt-0 land:-mt-16 lg:-mt-16 grid min-h-0 flex-1 grid-cols-1 grid-rows-[minmax(0,1fr)_auto] gap-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] land:grid-cols-2 land:grid-rows-1 land:gap-6 land:pb-0 lg:grid-cols-[1fr_1.5fr] lg:grid-rows-1 lg:gap-10 lg:pb-0">
        {/* Photo (first on phones, right on desktop) */}
        <section className="relative -mx-5 min-h-[35%] overflow-hidden sm:-mx-8 land:order-2 land:m-0 lg:order-2 lg:-mr-20 lg:ml-0">
          <div className="absolute inset-0 stack:inset-auto stack:left-1/2 stack:top-0 stack:aspect-square stack:h-full stack:min-w-[139%] stack:-translate-x-[64%] lg:inset-0 lg:aspect-auto lg:min-w-0 lg:translate-x-0 lg:left-0">
            <Image src="/images/julio.webp" alt="Julio Herrera Velutini" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-[center_top] lg:object-[right_top] [mask-image:linear-gradient(to_bottom,black_85%,transparent)] land:[mask-image:linear-gradient(to_left,black_85%,transparent)] lg:[mask-image:linear-gradient(to_bottom,black_85%,transparent)]" />
          </div>
        </section>

        {/* Text */}
        <section className="flex flex-col justify-center gap-3 land:order-1 land:gap-2 land:pt-14 lg:order-1 lg:gap-[clamp(0.5rem,2.6vh,1.5rem)] lg:pt-[clamp(2rem,8vh,4rem)]">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-gold" />
            <p className="text-xs uppercase tracking-[0.3em] text-gold">JMHV</p>
          </div>

          <h1 className="font-display text-[clamp(1.6rem,7vw,2.5rem)] font-bold uppercase leading-[1.1] tracking-[0.02em] land:text-[clamp(1.4rem,9vh,2.2rem)] lg:text-[clamp(1.75rem,min(3.4vw,9vh),4.5rem)]">
            Julio Herrera <span className="block bg-gradient-to-r from-[#e8cf8a] via-gold to-[#a9812f] bg-clip-text text-transparent">Velutini</span>
          </h1>

          <p className="max-w-[480px] text-sm leading-relaxed text-neutral-400 sm:text-base max-lg:tiny:hidden land:line-clamp-2 land:block lg:text-[clamp(15px,2.4vh,19px)]">
            Banking, family and legacy, told through the life of Julio Herrera Velutini.
          </p>

          <div className="hidden items-start gap-[clamp(1rem,2.5vw,2rem)] border-t border-neutral-800 pt-[clamp(0.75rem,2.4vh,1.25rem)] lg:flex">
            {stats.map((x) => (
              <div key={x.label}>
                <p className="font-display text-[clamp(1.25rem,4vh,1.875rem)] font-bold text-gold">{x.value}</p>
                <p className="whitespace-nowrap text-[11px] uppercase tracking-[0.14em] text-neutral-500 xl:text-xs xl:tracking-[0.18em]">{x.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-1 flex items-center gap-4">
            <Arrow href="/finance" label="Start reading" />
            <span className="text-sm uppercase tracking-[0.2em] text-neutral-400">Explore</span>
          </div>
        </section>
      </main>
    </div>
  );
}