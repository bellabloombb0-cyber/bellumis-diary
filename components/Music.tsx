"use client";

import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

const paypalMeBaseUrl = "https://paypal.me/Bellahealth";

// TODO: Replace each placeholder file with Bella's own 20–30 second MP3 preview.
// Keep full songs out of /public and only serve them later from a payment-protected flow.
const musicPreviews = [
  { title: "Song 01", source: "/audio/music-preview-01-placeholder.mp3" },
  { title: "Song 02", source: "/audio/music-preview-02-placeholder.mp3" },
  { title: "Song 03", source: "/audio/music-preview-03-placeholder.mp3" },
];

export function Music() {
  const [hatPopId, setHatPopId] = useState(0);
  const celebrateSupport = () => setHatPopId((currentId) => currentId + 1);

  return <section id="music" className="bg-[#e9dff2] px-5 py-24 sm:px-10 lg:px-16 lg:py-36">
    <div className="mx-auto max-w-7xl">
      <ScrollReveal>
        <p className="section-kicker text-lilac-deep">04 — Music</p>
        <h2 className="mt-9 font-[family-name:var(--font-display)] text-5xl leading-[.95] sm:text-7xl">The thing<br /><em className="font-normal text-lilac-deep">I love.</em></h2>
      </ScrollReveal>

      <div className="mt-14 grid items-start gap-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
        <ScrollReveal className="relative overflow-hidden rounded-[2rem] border-8 border-mist bg-lilac/20 shadow-xl shadow-lilac/20">
          <img src="/images/music/bella-with-guitar.png" alt="Bella playing her hand-painted sunflower guitar outdoors" className="aspect-[4/5] w-full object-cover lg:aspect-[3/4]" />
          <p className="border-t border-lilac/15 bg-mist px-5 py-4 text-xs leading-5 text-ink/65">
            Photo &amp; hand-painted guitar artwork by {" "}
            <a className="font-bold text-lilac-deep underline-offset-4 transition hover:underline" href="https://jcollins662.wixsite.com/jcphotography/30-days-diary?lightbox=dataItem-io1y9a60" target="_blank" rel="noreferrer">JC Photography</a>
          </p>
        </ScrollReveal>

        <ScrollReveal className="rounded-[2rem] bg-mist p-6 shadow-sm sm:p-8">
          <p className="font-[family-name:var(--font-display)] text-3xl leading-tight text-ink">My digital street music hat</p>
          <p className="mt-5 max-w-xl text-base leading-8 text-ink/70">Music is my portable home. You&apos;re always welcome to simply listen.</p>

          <div className="mt-7 space-y-3">
            <p className="text-xs font-bold uppercase tracking-[.16em] text-lilac-deep">Three little previews</p>
            {musicPreviews.map((preview) => (
              <div key={preview.source} className="rounded-2xl border border-lilac/30 bg-[#f7f1fb] px-4 py-3.5">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-[family-name:var(--font-display)] text-xl text-ink">{preview.title}</p>
                  <span className="text-xs font-bold uppercase tracking-[.12em] text-lilac-deep">20–30 sec</span>
                </div>
                <audio className="mt-3 w-full" controls preload="metadata" aria-label={`${preview.title} music preview`}>
                  <source src={preview.source} type="audio/mpeg" />
                  Your browser does not support audio playback.
                </audio>
              </div>
            ))}
          </div>

          <div className="relative mt-7">
            {hatPopId > 0 && (
              <span key={hatPopId} className="pointer-events-none absolute -top-16 left-1/2 z-10 -translate-x-1/2" aria-hidden="true">
                <svg className="hat-pop h-16 w-[4.5rem]" viewBox="0 0 72 64" fill="none">
                  <g transform="translate(36 15)">
                    <g className="hat-passiflora">
                    <path d="M0-12C-5-15-8-10-5-6C-10-7-12-2-8 1C-12 4-9 9-4 7C-4 13 2 14 4 8C8 11 12 7 8 3C13 0 10-5 6-4C8-10 3-14 0-12Z" fill="#e9def1" stroke="#70517f" strokeWidth="1.7" strokeLinejoin="round" />
                    <g stroke="#70517f" strokeWidth="1.35" strokeLinecap="round">
                      <path d="M0-8V-12" /><path d="M5-6l4-4" /><path d="M8 0h5" /><path d="M5 6l4 4" /><path d="M0 8v5" /><path d="M-5 6l-4 4" /><path d="M-8 0h-5" /><path d="M-5-6l-4-4" />
                    </g>
                    <circle r="4.5" fill="#352d42" />
                    <circle r="2.2" fill="#e2bd68" />
                    <path d="M-1-4C-3-8-5-10-7-12M1-4C4-7 5-10 6-12M0-4v-7" stroke="#e2bd68" strokeWidth="1.35" strokeLinecap="round" />
                    </g>
                  </g>
                  <path d="M22 18h28l-4 25H26l-4-25Z" fill="#70517f" />
                  <path d="M26 21h20l-1 8H27l-1-8Z" fill="#fbf8ff" opacity=".9" />
                  <path d="M12 43c0-2.2 1.8-4 4-4h40c2.2 0 4 1.8 4 4v2H12v-2Z" fill="#352d42" />
                  <path d="M16 45h40" stroke="#ae96c4" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="11" cy="23" r="2" fill="#e2bd68" />
                  <circle cx="61" cy="30" r="1.5" fill="#e2bd68" />
                </svg>
              </span>
            )}
            <p className="sr-only" aria-live="polite">{hatPopId > 0 ? "A little coin for the hat — thank you." : ""}</p>
            <p className="text-sm leading-6 text-ink/65">If you&apos;d like to leave a coin in my digital hat, thank you. Every contribution supports this journey.</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <a onClick={celebrateSupport} className="rounded-full bg-lilac-deep px-4 py-3 text-center text-sm font-bold text-mist transition hover:-translate-y-0.5 hover:bg-ink" href={`${paypalMeBaseUrl}/1EUR`} target="_blank" rel="noreferrer">Leave €1</a>
              <a onClick={celebrateSupport} className="rounded-full border border-lilac-deep bg-mist px-4 py-3 text-center text-sm font-bold text-lilac-deep transition hover:-translate-y-0.5 hover:bg-lilac-deep hover:text-mist" href={`${paypalMeBaseUrl}/5EUR`} target="_blank" rel="noreferrer">Leave €5</a>
              <a onClick={celebrateSupport} className="rounded-full border border-lilac-deep bg-[#f0e6f6] px-4 py-3 text-center text-sm font-bold text-lilac-deep transition hover:-translate-y-0.5 hover:bg-lilac-deep hover:text-mist" href={paypalMeBaseUrl} target="_blank" rel="noreferrer">Choose an amount (from €1)</a>
            </div>
            <p className="mt-4 text-xs leading-5 text-ink/50">Payments are handled securely by PayPal.</p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>;
}
