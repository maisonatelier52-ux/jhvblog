import PageShell from "../../components/PageShell";

const milestones = [
  { year: "Family roots", title: "Statesmen and bankers", text: "His great-great-grandfather José Antonio Velutini served as Venezuela's finance minister and Second Vice President." },
  { year: "1971", title: "Born in Caracas", text: "Born December 15, 1971, into a family long involved in Latin American finance." },
  { year: "1990s", title: "First steps in finance", text: "Studied at the Universidad Central de Venezuela and worked as a stockbroker on the Caracas Stock Exchange." },
  { year: "2010s", title: "Bancrédito and Puerto Rico", text: "Leads Bancrédito International Bank from offices in Puerto Rico and Florida." },
  { year: "2022 – 2026", title: "A federal case", text: "Charged in 2022 over a 2020 campaign matter; felonies dropped in 2025 with a single misdemeanor plea, then a presidential pardon in January 2026." },
];

export const metadata = {
  title: "Legacy",
  description: "The family history, early career and milestones that shaped international banker Julio Herrera Velutini.",
};

export default function Legacy() {
  return (
    <PageShell page="legacy">
      <p className="text-xs uppercase tracking-[0.24em] text-gold">Legacy</p>
      <h1 className="mt-2 font-display text-3xl font-bold leading-[1.05] sm:text-4xl lg:text-6xl">A story built over time.</h1>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-400 sm:text-base short:hidden compact:hidden">
        From Caracas to Puerto Rico: the family, the career and the milestones that shaped Julio Herrera Velutini.
      </p>

      <div className="mt-4 grid gap-3 border-t border-gold/40 pt-4 lg:mt-8 lg:grid-cols-5 lg:gap-6 lg:pt-6">
        {milestones.map((m) => (
          <article key={m.title}>
            <p className="text-[11px] uppercase tracking-[0.2em] text-gold">{m.year}</p>
            <h2 className="mt-0.5 font-display text-base leading-tight lg:mt-1.5 lg:text-lg">{m.title}</h2>
            <p className="mt-1 text-[13px] leading-relaxed text-neutral-400 short:max-lg:hidden">{m.text}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}