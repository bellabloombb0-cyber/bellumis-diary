import { PassifloraLogo } from "./PassifloraLogo";
import { ScrollReveal } from "./ScrollReveal";

export function Footer() {
  return (
    <footer className="border-t border-lilac/15 bg-[#f4effa] px-5 py-8 sm:px-10 lg:px-16">
      <ScrollReveal className="mx-auto mb-10 max-w-md text-center">
        <div className="rounded-[1.75rem] border border-lilac/25 bg-mist/70 px-7 py-8 shadow-sm">
          <PassifloraLogo className="float-flower mx-auto h-12 w-12 text-lilac-deep" />
          <p className="mt-5 font-[family-name:var(--font-display)] text-2xl leading-tight text-ink">You made it all the way here.</p>
          <p className="mt-2 text-sm leading-6 text-ink/60">Keep going gently.</p>
          <a href="/a-little-gift" className="mt-5 inline-flex rounded-full border border-lilac-deep bg-mist px-5 py-2.5 text-sm font-bold text-lilac-deep transition hover:-translate-y-0.5 hover:bg-lilac-deep hover:text-mist">
            Here’s a little gift for you →
          </a>
        </div>
      </ScrollReveal>

      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5">
        <a href="#top" className="flex items-center gap-2.5">
          <img src="/images/passiflora-logo.jpeg" alt="Passiflora logo" className="h-8 w-8 rounded-full object-cover ring-2 ring-lilac/30" />
          <span className="font-[family-name:var(--font-display)] text-xl">Bellumi’s Diary</span>
        </a>
        <p className="text-xs text-ink/55">© {new Date().getFullYear()} Bellumi’s Diary. Collected with love.</p>
      </div>
    </footer>
  );
}
