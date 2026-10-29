import PageShell from "../../components/PageShell";

const roles = [
  { no: "01", role: "Chairman · Bancrédito", title: "Leading an international bank", text: "Chairman of the Board of Bancrédito International Bank & Trust." },
  { no: "02", role: "Founder · Britannia", title: "Building a global holding company", text: "Founded London-based Britannia Financial Group and serves as its chairman." },
  { no: "03", role: "Growth", title: "Expanding through acquisition", text: "The Bancrédito Group acquired Consultiva Wealth Management in 2016." },
  { no: "04", role: "Family tradition", title: "Seven generations of banking", text: "He describes himself as the seventh generation of bankers in his family." },
];

export const metadata = {
  title: "Leadership",
  description: "The roles, companies and decisions that define how Julio Herrera Velutini leads in finance.",
};

export default function Leadership() {
  return (
    <PageShell page="leadership">
      <p className="text-xs uppercase tracking-[0.24em] text-gold">Leadership</p>
      <h1 className="mt-2 font-display text-3xl font-bold leading-[1.05] sm:text-4xl lg:text-6xl">Led by experience.</h1>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-400 sm:text-base short:hidden compact:hidden">
        The roles, companies and decisions that define how Julio Herrera Velutini leads in finance.
      </p>

      <div className="mt-4 border-t border-neutral-800 lg:mt-6">
        {roles.map((r) => (
          <article key={r.no} className="grid gap-0.5 border-b border-neutral-800 py-2.5 lg:grid-cols-[70px_1fr_1.2fr] lg:items-center lg:gap-6 lg:py-3.5">
            <span className="hidden font-display text-3xl font-bold text-neutral-700 lg:block">{r.no}</span>
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-gold">{r.role}</p>
              <h2 className="font-display text-base leading-tight lg:mt-1 lg:text-xl">{r.title}</h2>
            </div>
            <p className="text-sm leading-relaxed text-neutral-400 short:max-lg:hidden">{r.text}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
