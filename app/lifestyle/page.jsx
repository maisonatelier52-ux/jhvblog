import PageShell from "../../components/PageShell";

export const metadata = {
  title: "Lifestyle",
  description: "The foundations and causes Julio Herrera Velutini supports in animal welfare, the arts, technology and education.",
};

const causes = [
  { tag: "Education", name: "The Britannia Foundation", text: "Seed funding for young entrepreneurs and artists, and internships for scholars who work while they study." },
  { tag: "Animal welfare", name: "The Lazarus Foundation", text: "A London-based animal rescue facility created by Julio." },
  { tag: "Arts & technology", name: "Bancrédito Foundation", text: "Supports programs in the arts and technology." },
];

export default function Lifestyle() {
  return (
    <PageShell page="lifestyle">
      <p className="text-xs uppercase tracking-[0.24em] text-gold">Lifestyle</p>
      <h1 className="mt-2 font-display text-3xl font-bold leading-[1.05] sm:text-4xl lg:text-6xl">Beyond the boardroom.</h1>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-400 sm:text-base short:hidden compact:hidden">
        Away from banking: the causes he supports in animal welfare, the arts, technology and education.
      </p>

      <div className="mt-4 grid gap-3 lg:mt-8 lg:grid-cols-3 lg:gap-4">
        {causes.map((c) => (
          <article key={c.name} className="border border-neutral-800 border-t-2 border-t-gold bg-neutral-950 px-4 py-3 lg:p-6">
            <p className="text-[11px] uppercase tracking-[0.18em] text-gold">{c.tag}</p>
            <h2 className="mt-1 font-display text-base leading-snug lg:mt-2 lg:text-xl">{c.name}</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-neutral-400 short:max-lg:hidden">{c.text}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
