import { PassifloraScene } from "./PassifloraScene";

export function Hero() {
  return <section id="top" className="cinematic-hero">
    <div className="hero-stage">
      <div className="hero-grain" />
      <div className="hero-haze hero-haze--one" />
      <div className="hero-haze hero-haze--two" />
      <div className="hero-copy">
        <p className="section-kicker text-lilac-deep">Music, memory &amp; belonging</p>
        <h1 className="font-[family-name:var(--font-display)] text-5xl leading-[.83] text-ink sm:text-7xl lg:text-8xl">Bellumi’s<br /><em className="font-normal text-lilac-deep">Diary.</em></h1>
      </div>
      <div className="hero-flower-wrap"><PassifloraScene openOnScroll /></div>
      <p className="hero-side-note">Scroll slowly.<br />Let it open.</p>
      <div className="hero-next-chapter" aria-hidden="true"><span>01 — Music</span><strong>The story begins with a song.</strong></div>
    </div>
  </section>;
}
