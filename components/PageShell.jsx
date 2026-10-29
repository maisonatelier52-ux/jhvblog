import Link from "next/link";
import Logo from "./Logo";

export const PAGES = ["finance", "legacy", "leadership", "lifestyle"];

export function Arrow({ href, label }) {
  return (
    <Link href={href} aria-label={label} className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold text-gold hover:bg-gold hover:text-black">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </Link>
  );
}

export default function PageShell({ page, children }) {
  const i = PAGES.indexOf(page);
  const next = i < PAGES.length - 1 ? `/${PAGES[i + 1]}` : "/";
  const nextLabel = i < PAGES.length - 1 ? `Next: ${PAGES[i + 1]}` : "Back to home";

  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-black px-6 text-white lg:px-20">
      <header className="flex h-16 shrink-0 items-center">
        <Link href="/" className="flex items-center gap-3">
          <Logo />
          <span className="font-display text-lg tracking-wide sm:text-xl">Julio Herrera Velutini</span>
        </Link>
      </header>

      <main className="flex min-h-0 flex-1 flex-col justify-center overflow-hidden py-2">{children}</main>

      <footer className="flex h-20 shrink-0 items-center justify-between border-t border-neutral-900">
        <span className="text-sm tracking-[0.2em] text-neutral-500">0{i + 1} / 0{PAGES.length}</span>
        <Arrow href={next} label={nextLabel} />
      </footer>
    </div>
  );
}