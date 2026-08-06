import { PassifloraLogo } from "./PassifloraLogo";

export function Hero() {
  return <section id="top" className="relative isolate flex min-h-[46rem] items-end overflow-hidden px-5 pb-16 pt-32 sm:px-10 lg:min-h-screen lg:px-16 lg:pb-24">
    <img src="/images/passiflora-hero.jpeg" alt="A blooming purple passiflora" className="absolute inset-0 -z-20 h-full w-full object-cover object-[58%_center]" />
    <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(37,30,43,.82)_0%,rgba(57,40,68,.58)_42%,rgba(57,40,68,.08)_75%)]" />
    <div className="relative mx-auto w-full max-w-7xl text-white"><div className="flex items-center gap-3 text-[#eee3f4]"><PassifloraLogo className="h-10 w-10" /><p className="section-kicker">My journey to freedom</p></div><h1 className="mt-7 max-w-5xl font-[family-name:var(--font-display)] text-6xl leading-[.84] sm:text-8xl lg:text-9xl">Bellumi’s<br /><em className="font-normal text-[#e8d9f1]">Diary.</em></h1><div className="mt-9 max-w-xl"><p className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl">Building a soft life from scratch.</p><p className="mt-5 text-sm leading-7 text-white/80 sm:text-base">A tender, honest space for choosing peace over pressure — and turning what you love into a life that feels like yours.</p></div><a href="#philosophy" className="mt-11 inline-flex rounded-full bg-[#ede2f4] px-6 py-3 text-sm font-bold text-lilac-deep transition hover:bg-white">Read the manifesto <span className="ml-2">↓</span></a></div>
  </section>;
}
