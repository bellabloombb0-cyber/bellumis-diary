"use client";

import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

export function Philosophy() {
  const [isOpen, setIsOpen] = useState(false);

  return <section id="philosophy" className="bg-mist px-5 py-24 sm:px-10 lg:px-16 lg:py-36">
    <ScrollReveal className="mx-auto max-w-5xl text-center">
      <p className="section-kicker text-lilac-deep">01 — A letter for you</p>
      <h2 className="mt-5 font-[family-name:var(--font-display)] text-5xl leading-tight sm:text-6xl">A small letter,<br /><em className="font-normal text-lilac-deep">from my heart to yours.</em></h2>
      <p className="mx-auto mt-6 max-w-lg text-base leading-8 text-ink/65">A story about self-acceptance, freedom, and building a life around what makes you feel alive.</p>
      <button type="button" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls="letter-content" className="group mt-9 inline-flex items-center rounded-full bg-lilac-deep px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-ink">{isOpen ? "Close the letter" : "A letter for you"}<span className="ml-3 text-base transition-transform duration-300 group-hover:translate-y-1">{isOpen ? "↑" : "↓"}</span></button>
    </ScrollReveal>

    {isOpen && <article id="letter-content" className="letter-open mx-auto mt-16 max-w-3xl rounded-[2rem] bg-[#f2ecf8] p-7 text-left shadow-sm sm:p-12">
      <div className="space-y-6 text-base leading-8 text-ink/75">
        <p className="font-[family-name:var(--font-display)] text-3xl leading-tight text-ink">True freedom isn&apos;t expensive. It&apos;s an inside job.</p>
        <p>I was once told that being creative and making people feel good wasn&apos;t enough to be a valuable member of society. For years, I tried to fit into boxes that weren&apos;t made for me — until I started questioning everything I had accepted as truth.</p>
        <p>Who taught me what makes a person valuable?<br />Where did these beliefs come from?<br /><strong>Are they actually true — and are they even mine?</strong></p>
        <p>I realized that if I wanted to change my life, I had to go back to the roots — face my shadows, question old patterns, and find out who I am underneath everything I was taught to be. Today, I&apos;m learning to value what I once made small.</p>
        <p className="font-[family-name:var(--font-display)] text-3xl leading-tight text-lilac-deep"><strong>You are allowed to do what you love — and build something from it.</strong></p>
        <p>Right now, I&apos;m in Germany, trying different ways to earn money remotely and documenting the journey from scratch — clumsy, chaotic, but with all my heart. I&apos;m slowly finding my way back to Portugal, where I grew up and where my soul comes alive — with a home on wheels and street music along the way. One day, I would also love to create a safe space for women there.</p>
        <p>You don&apos;t need to become somebody else.</p>
        <p className="font-[family-name:var(--font-display)] text-3xl leading-tight text-lilac-deep"><strong>Maybe you just need to come back to who you already are.</strong></p>
        <p className="pt-3 font-[family-name:var(--font-display)] text-2xl italic text-ink">With love,<br />Bella 💜</p>
      </div>
    </article>}
  </section>;
}
