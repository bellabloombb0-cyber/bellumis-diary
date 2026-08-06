import { PassifloraLogo } from "./PassifloraLogo";

export function Hero() {
  return <section id="top" className="relative isolate flex min-h-[46rem] items-end overflow-hidden bg-[#eee7f5] px-5 pb-16 pt-32 sm:px-10 lg:min-h-screen lg:px-16 lg:pb-24">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,#fff_0,transparent_28%),radial-gradient(circle_at_12%_74%,#d9c9e7_0,transparent_35%),linear-gradient(135deg,#f7f1fb_0%,#eee3f4_55%,#e1d5d7_100%)]" />
    <div className="absolute -right-24 top-24 h-96 w-96 rounded-full border border-lilac/30" />
    <div className="relative mx-auto w-full max-w-7xl"><div className="flex items-center gap-3 text-lilac-deep"><PassifloraLogo className="h-10 w-10" /><p className="section-kicker">My journey to freedom</p></div><h1 className="mt-7 max-w-5xl font-[family-name:var(--font-display)] text-6xl leading-[.84] text-ink sm:text-8xl lg:text-9xl">Bellumi’s<br /><em className="font-normal text-lilac-deep">Diary.</em></h1><div className="mt-9 max-w-xl"><p className="font-[family-name:var(--font-display)] text-3xl text-ink sm:text-4xl">Building a soft life from scratch.</p><p className="mt-5 text-sm leading-7 text-ink/70 sm:text-base">A tender, honest space for choosing peace over pressure — and turning what you love into a life that feels like yours.</p></div><a href="#philosophy" className="mt-11 inline-flex rounded-full bg-lilac-deep px-6 py-3 text-sm font-bold text-white transition hover:bg-ink">Read the manifesto <span className="ml-2">↓</span></a></div>
  </section>;
}
