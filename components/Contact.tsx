"use client";

import { useEffect, useRef } from "react";
import { ScrollReveal } from "./ScrollReveal";

export function Contact() {
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const photo = photoRef.current;
    if (!photo || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const movePhoto = () => {
      frame = 0;
      const bounds = photo.getBoundingClientRect();
      const progress = (window.innerHeight - bounds.top) / (window.innerHeight + bounds.height);
      const offset = Math.max(-10, Math.min(10, (progress - 0.5) * -20));
      photo.style.transform = `translate3d(0, ${offset}px, 0)`;
    };
    const onScroll = () => { if (!frame) frame = window.requestAnimationFrame(movePhoto); };
    movePhoto();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); if (frame) window.cancelAnimationFrame(frame); };
  }, []);

  return <section id="contact" className="overflow-hidden px-5 py-24 sm:px-10 lg:px-16 lg:py-36">
    <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
      <ScrollReveal className="relative mx-auto w-full max-w-md lg:order-2">
        <div className="absolute -inset-4 -z-10 rotate-3 rounded-[2rem] bg-[#edc1d7]" />
        <div ref={photoRef} className="overflow-hidden rounded-[1.7rem] border-8 border-white bg-[#f58cc2] shadow-2xl shadow-lilac/25 will-change-transform">
          <img src="/images/bellumi-note.jpeg" alt="Bellumi surrounded by little moments from her diary" className="aspect-[3/4] w-full object-cover object-top" />
        </div>
        <p className="mt-4 text-center font-[family-name:var(--font-display)] text-xl italic text-ink/65">A few of my favourite little things.</p>
      </ScrollReveal>
      <ScrollReveal className="text-center lg:order-1 lg:text-left">
        <p className="section-kicker text-lilac-deep">06 — Contact</p>
        <h2 className="mt-5 font-[family-name:var(--font-display)] text-5xl sm:text-7xl">Leave me<br /><em className="font-normal text-lilac-deep">a little note.</em></h2>
        <p className="mt-7 max-w-lg text-base leading-8 text-ink/70 lg:mx-0">For shared ideas, favourite songs, Portugal tips, or simply to say hello.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3 lg:justify-start"><a className="rounded-full bg-ink px-6 py-3 text-sm font-bold text-mist transition hover:-translate-y-0.5 hover:bg-lilac-deep" href="mailto:hello@bellumis-diary.com">Send an email</a>{/* TODO: replace the # with your real Instagram profile URL */}<a className="rounded-full border border-ink/25 px-6 py-3 text-sm font-bold transition hover:-translate-y-0.5 hover:border-lilac-deep hover:text-lilac-deep" href="#" aria-label="Bellumi’s Diary on Instagram">Instagram ↗</a></div>
      </ScrollReveal>
    </div>
  </section>;
}
