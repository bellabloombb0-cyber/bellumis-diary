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
