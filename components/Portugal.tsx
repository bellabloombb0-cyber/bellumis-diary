import { ScrollReveal } from "./ScrollReveal";

export function Portugal() {
  return <section id="portugal" className="roots-world relative overflow-hidden px-5 py-24 text-mist sm:px-10 lg:px-16 lg:py-36">
    <div className="roots-world__sun" />
    <div className="roots-world__curve" />
    <ScrollReveal className="relative mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-[1fr_.8fr] lg:gap-20">
      <div>
        <p className="section-kicker text-[#f3d8b2]">03 — Portugal</p>
        <h2 className="mt-8 max-w-3xl font-[family-name:var(--font-display)] text-6xl leading-[.83] sm:text-8xl">Olá,<br /><em className="font-normal text-[#f3d8b2]">Portugal.</em></h2>
        <p className="mt-9 max-w-xl border-l border-[#f3d8b2]/60 pl-6 text-base leading-8 text-mist/80 sm:text-lg">I grew up surrounded by this light, wild nature and music in the street. I&apos;m finding my way back — one small, honest step at a time.</p>
      </div>
      <figure className="roots-photo-shell overflow-hidden rounded-[2rem] border border-[#f3d8b2]/30 bg-[#305044]/30 p-2 shadow-2xl">
        <img src="/images/portugal-forest.jpg" alt="A sunlit forest path in Portugal" className="h-full w-full rounded-[1.5rem] object-cover object-center" />
      </figure>
    </ScrollReveal>
  </section>;
}
