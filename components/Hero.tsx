import { PassifloraScene } from "./PassifloraScene";

export function Hero() {
  return <section id="top" className="bellumi-hero relative isolate overflow-hidden px-5 pb-12 pt-32 sm:px-10 lg:min-h-screen lg:px-16 lg:pt-40">
    <div className="hero-grain" />
    <div className="hero-haze hero-haze--one" />
    <div className="hero-haze hero-haze--two" />
    <div className="hero-copy relative z-10 mx-auto flex min-h-[42rem] max-w-7xl flex-col justify-end pb-10 lg:min-h-[calc(100vh-10rem)] lg:pb-16">
      <p className="section-kicker text-lilac-deep">A journey in music, memory &amp; belonging</p>
      <h1 className="mt-6 max-w-4xl font-[family-name:var(--font-display)] text-6xl leading-[.79] text-ink sm:text-8xl lg:text-[9.5rem]">
        Bellumi’s<br /><em className="font-normal text-lilac-deep">Diary.</em>
      </h1>
      <div className="mt-8 flex max-w-xl flex-wrap items-center gap-x-6 gap-y-3 text-sm leading-7 text-ink/70 sm:text-base">
        <p>An honest, living space for music, Portugal, and choosing a softer life.</p>
        <a href="#philosophy" className="hero-scroll-link">Enter slowly</a>
      </div>
    </div>
    <div className="hero-flower-wrap"><PassifloraScene /></div>
    <p className="hero-side-note">Click the flower<br />and watch it bloom.</p>
  </section>;
}
import { PassifloraLogo } from "./PassifloraLogo";

export function Hero() {
  return <section id="top" className="relative isolate flex min-h-[46rem] items-start overflow-hidden bg-[#eee7f5] px-5 pb-16 pt-44 sm:px-10 lg:min-h-screen lg:px-16 lg:pt-52">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,#fff_0,transparent_28%),radial-gradient(circle_at_12%_74%,#d9c9e7_0,transparent_35%),linear-gradient(135deg,#f7f1fb_0%,#eee3f4_55%,#e1d5d7_100%)]" />
    <div className="hero-glow absolute -left-24 top-20 h-96 w-96 rounded-full bg-lilac/20 blur-3xl" />
    <div className="absolute -right-24 top-24 h-96 w-96 rounded-full border border-lilac/30" />
    <div className="hero-copy relative mx-auto w-full max-w-7xl"><div className="flex items-center gap-3 text-lilac-deep"><PassifloraLogo className="float-flower h-10 w-10" /><p className="section-kicker">A journey to freedom</p></div><h1 className="mt-7 max-w-5xl font-[family-name:var(--font-display)] text-6xl leading-[.84] text-ink sm:text-8xl lg:text-9xl">Welcome to<br /><em className="font-normal text-lilac-deep">Bellumi’s Diary.</em></h1><p className="mt-9 max-w-xl text-sm leading-7 text-ink/70 sm:text-base">An honest space for choosing peace over pressure — and turning what you love into a life that feels like yours.</p></div>
  </section>;
}
