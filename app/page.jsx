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
    <div className="flex h-dvh flex-col overflow-hidden bg-black px-5 text-white sm:px-8 lg:px-20">
      <header className="relative z-10 flex h-16 shrink-0 items-center gap-3">
        <Logo size="sm" />
        <Link href="/" className="font-display text-base tracking-wide sm:text-[15px]">Julio Herrera Velutini</Link>
      </header>

      <main className="-mt-16 grid min-h-0 flex-1 grid-cols-1 grid-rows-[minmax(0,1fr)_auto] gap-5 pb-5 lg:grid-cols-[1fr_1.5fr] lg:grid-rows-1 lg:gap-10 lg:pb-0">
        {/* Photo (first on phones, right on desktop) */}
        <section className="relative -mx-5 min-h-0 overflow-hidden sm:-mx-8 lg:order-2 lg:-mr-20 lg:ml-0">
          <Image src="/images/julio.webp" alt="Julio Herrera Velutini" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-[right_top] [mask-image:linear-gradient(to_bottom,black_85%,transparent)]" />
        </section>

        {/* Text */}
        <section className="flex flex-col justify-center gap-3 lg:order-1 lg:gap-6 lg:pt-16">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-gold" />
            <p className="text-xs uppercase tracking-[0.3em] text-gold">JMHV</p>
          </div>

          <h1 className="font-display text-[clamp(1.6rem,7vw,2.5rem)] font-bold uppercase leading-[1.1] tracking-[0.02em] lg:text-[clamp(2rem,min(3.4vw,9vh),4.5rem)]">
            Julio Herrera <span className="block bg-gradient-to-r from-[#e8cf8a] via-gold to-[#a9812f] bg-clip-text text-transparent">Velutini</span>
          </h1>

          <p className="max-w-[480px] text-sm leading-relaxed text-neutral-400 sm:text-base lg:text-[19px] short:hidden lg:short:block">
            Banking, family and legacy, told through the life of Julio Herrera Velutini.
          </p>

          <div className="hidden items-center gap-8 border-t border-neutral-800 pt-5 lg:flex lg:short:hidden">
            {stats.map((x) => (
              <div key={x.label}>
                <p className="font-display text-3xl font-bold text-gold">{x.value}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">{x.label}</p>
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
