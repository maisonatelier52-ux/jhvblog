import PageShell from "../../components/PageShell";

const stats = [
  { value: "30+", label: "Years in finance" },
  { value: "5", label: "Financial hubs" },
  { value: "7th", label: "Generation of bankers" },
];

const companies = [
  { name: "Bancrédito International Bank & Trust", place: "Puerto Rico · Florida", text: "Online international bank registered in Puerto Rico. Julio is Chairman of the Board." },
  { name: "Consultiva", place: "Puerto Rico · New York", text: "SEC-registered investment advisory firm, acquired by the Bancrédito Group in 2016." },
  { name: "Britannia Financial Group", place: "London · Geneva · Dubai", text: "London-based holding company he founded, spanning brokerage, wealth management, payments and banking." },
];

export const metadata = {
  title: "Finance",
  description: "Bancrédito, Consultiva and Britannia Financial Group: the banking and wealth-management companies linked to Julio Herrera Velutini.",
};

export default function Finance() {
  return (
    <PageShell page="finance">
      <p className="text-xs uppercase tracking-[0.24em] text-gold">Finance</p>
      <h1 className="mt-2 font-display text-3xl font-bold leading-[1.05] sm:text-4xl lg:text-6xl">Banking, across borders.</h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-400 sm:text-base short:hidden compact:hidden">
        Three decades in international banking and wealth management, from Puerto Rico to New York, London, Switzerland and Dubai.
      </p>

      <div className="mt-4 grid grid-cols-3 tiny:hidden gap-px border border-neutral-800 bg-neutral-800 lg:mt-6">
        {stats.map((s) => (
          <div key={s.value} className="bg-black px-3 py-2.5 lg:p-4">
            <p className="font-display text-2xl font-bold text-gold lg:text-4xl">{s.value}</p>
            <p className="text-[11px] leading-snug text-neutral-400 sm:text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 grid gap-3 lg:mt-4 lg:grid-cols-3 lg:gap-4">
        {companies.map((c) => (
          <article key={c.name} className="border border-neutral-800 border-t-2 border-t-gold bg-neutral-950 px-4 py-3 lg:p-5">
            <p className="text-[11px] uppercase tracking-[0.18em] text-gold">{c.place}</p>
            <h2 className="mt-1 font-display text-base leading-snug lg:mt-2 lg:text-xl">{c.name}</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-neutral-400 short:max-lg:hidden">{c.text}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
