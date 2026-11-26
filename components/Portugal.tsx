import { PassifloraScene } from "./PassifloraScene";
import { ScrollReveal } from "./ScrollReveal";

export function Portugal() {
  return <section id="portugal" className="roots-world relative overflow-hidden px-5 py-24 text-mist sm:px-10 lg:px-16 lg:py-36">
    <div className="roots-world__sun" />
    <div className="roots-world__curve" />
    <ScrollReveal className="relative mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-[1fr_.8fr] lg:gap-20">
      <div>
        <p className="section-kicker text-[#f3d8b2]">02 — My Roots</p>
        <h2 className="mt-8 max-w-3xl font-[family-name:var(--font-display)] text-6xl leading-[.83] sm:text-8xl">I grew up<br /><em className="font-normal text-[#f3d8b2]">in Portugal.</em></h2>
        <div className="mt-9 max-w-xl border-l border-[#f3d8b2]/60 pl-6 text-base leading-8 text-mist/80 sm:text-lg">
          <p>Portugal is the place that taught me lightness, music in the street, wild nature, and the feeling of coming home to myself.</p>
          <p className="mt-5 font-[family-name:var(--font-display)] text-2xl leading-tight text-[#f7e6cd]">I&apos;m finding my way back — one small, honest step at a time.</p>
        </div>
      </div>
      <div className="roots-flower-shell"><PassifloraScene compact /></div>
    </ScrollReveal>
  </section>;
}
