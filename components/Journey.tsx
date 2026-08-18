"use client";

import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

type RootsNote = "shadows" | "wanted" | null;

const notes = {
  shadows: {
    number: "01",
    title: "Face your shadows.",
    text: "This note is still being written.",
  },
  wanted: {
    number: "02",
    title: "WHAT I ACTUALLY WANTED TO SAY",
    text: "",
  },
};

export function Journey() {
  const [openNote, setOpenNote] = useState<RootsNote>(null);
  const activeNote = openNote ? notes[openNote] : null;

  function toggleNote(note: Exclude<RootsNote, null>) {
    setOpenNote((currentNote) => currentNote === note ? null : note);
  }

  return (
    <section id="journey" className="bg-lilac-deep px-5 py-24 text-mist sm:px-10 lg:px-16 lg:py-36">
      <ScrollReveal className="mx-auto max-w-5xl">
        <p className="section-kicker text-[#eadcf3]">02 — Roots</p>
        <h2 className="mt-9 font-[family-name:var(--font-display)] text-5xl leading-[.95] sm:text-7xl">Roots.</h2>
        <p className="mt-6 max-w-xl text-base leading-8 text-[#eadcf3] sm:text-lg">Small notes for coming back to yourself.</p>

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2">
          <button
            type="button"
            aria-expanded={openNote === "shadows"}
            aria-controls="roots-note"
            onClick={() => toggleNote("shadows")}
            className={`group rounded-[1.5rem] border p-6 text-left transition duration-300 sm:p-8 ${openNote === "shadows" ? "border-mist bg-mist text-ink" : "border-mist/30 bg-mist/10 text-mist hover:-translate-y-1 hover:border-mist/70 hover:bg-mist/15"}`}
          >
            <span className={`section-kicker ${openNote === "shadows" ? "text-lilac-deep" : "text-[#eadcf3]"}`}>01 — Note</span>
            <span className="mt-5 block font-[family-name:var(--font-display)] text-3xl leading-tight sm:text-4xl">Face your shadows.</span>
            <span className={`mt-6 inline-flex items-center text-sm font-bold ${openNote === "shadows" ? "text-lilac-deep" : "text-[#eadcf3]"}`}>
              {openNote === "shadows" ? "Close note" : "Open note"}<span className="ml-2 text-base">{openNote === "shadows" ? "↑" : "↓"}</span>
            </span>
          </button>

          <button
            type="button"
            aria-expanded={openNote === "wanted"}
            aria-controls="roots-note"
            onClick={() => toggleNote("wanted")}
            className={`group rounded-[1.5rem] border p-6 text-left transition duration-300 sm:p-8 ${openNote === "wanted" ? "border-mist bg-mist text-ink" : "border-mist/30 bg-mist/10 text-mist hover:-translate-y-1 hover:border-mist/70 hover:bg-mist/15"}`}
          >
            <span className={`section-kicker ${openNote === "wanted" ? "text-lilac-deep" : "text-[#eadcf3]"}`}>02 — Note</span>
            <span className="mt-5 block font-[family-name:var(--font-display)] text-3xl leading-tight sm:text-4xl">What I actually wanted to say.</span>
            <span className={`mt-6 inline-flex items-center text-sm font-bold ${openNote === "wanted" ? "text-lilac-deep" : "text-[#eadcf3]"}`}>
              {openNote === "wanted" ? "Close note" : "Open note"}<span className="ml-2 text-base">{openNote === "wanted" ? "↑" : "↓"}</span>
            </span>
          </button>
        </div>
      </ScrollReveal>

      {activeNote && (
        <article id="roots-note" className="letter-open mx-auto mt-7 max-w-4xl rounded-[2rem] bg-[#f2ecf8] p-7 text-ink shadow-sm sm:mt-9 sm:p-12">
          <p className="section-kicker text-lilac-deep">{activeNote.number} — Roots note</p>
          <h3 className="mt-5 font-[family-name:var(--font-display)] text-4xl leading-tight sm:text-5xl">{activeNote.title}</h3>

          {openNote === "wanted" ? (
            <div className="mt-8 max-w-2xl space-y-10 text-base leading-8 text-ink/75 sm:mt-10 sm:text-lg">
              <p className="font-[family-name:var(--font-display)] text-2xl leading-tight italic text-lilac-deep sm:text-3xl">
                Things we swallow just to keep the peace.
              </p>

              <div className="grid grid-cols-2 gap-3 font-[family-name:var(--font-display)] text-lg leading-tight sm:text-xl">
                {["“It’s fine.”", "“I don’t mind.”", "“No worries.”", "“Whatever you want.”"].map((phrase) => (
                  <p key={phrase} className="rounded-2xl border border-lilac/35 bg-mist px-4 py-4 text-ink/70">{phrase}</p>
                ))}
              </div>

              <section className="rounded-[1.75rem] bg-lilac-deep px-6 py-7 text-mist sm:px-8 sm:py-9">
                <p className="font-[family-name:var(--font-display)] text-3xl leading-tight text-[#eadcf3] sm:text-4xl">But is it?</p>
                <p className="mt-5 leading-8 text-[#f2eafa]">
                  Sometimes we swallow what we actually feel because we don&apos;t want to create conflict, disappoint someone, seem difficult, or be <em className="font-[family-name:var(--font-display)] text-xl text-mist sm:text-2xl">too much.</em>
                </p>
              </section>

              <section>
                <p>And sometimes we do the exact opposite.</p>
                <div className="mt-4 font-[family-name:var(--font-display)] text-3xl leading-[1.15] text-ink sm:text-4xl">
                  <p>We explain.</p>
                  <p className="text-lilac-deep">And explain.</p>
                  <p className="text-lilac-deep">And explain some more.</p>
                </div>
                <p className="mt-5">Trying to find the perfect words that will finally make someone understand why something hurt us.</p>
              </section>

              <section className="border-l-2 border-lilac pl-6 sm:pl-8">
                <p>But there is a space between swallowing everything and explaining everything.</p>
                <p className="mt-5 font-[family-name:var(--font-display)] text-4xl leading-tight text-lilac-deep sm:text-5xl">The truth.</p>
              </section>

              <section className="rounded-[1.75rem] bg-mist p-6 sm:p-8">
                <p className="section-kicker text-lilac-deep">A simpler sentence</p>
                <p className="mt-5 font-[family-name:var(--font-display)] text-xl italic leading-tight text-ink/60 sm:text-2xl">Not: “It’s fine.”</p>
                <p className="mt-3 font-[family-name:var(--font-display)] text-3xl leading-tight text-lilac-deep sm:text-4xl">But: “That hurt me.”</p>
                <p className="mt-7 font-[family-name:var(--font-display)] text-xl leading-tight text-ink/60 sm:text-2xl">Not a ten-minute explanation of why something made you uncomfortable.</p>
              </section>

              <section className="rounded-[1.75rem] border border-lilac/35 bg-[#eadff1] px-6 py-8 text-center sm:px-9 sm:py-10">
                <p className="font-[family-name:var(--font-display)] text-3xl leading-tight text-ink sm:text-4xl">Your feelings don&apos;t need a presentation.</p>
                <div className="mt-6 space-y-4">
                  <p>You don&apos;t have to convince someone that you&apos;re allowed to feel what you feel.</p>
                  <p>And you don&apos;t have to make yourself smaller just to keep the peace.</p>
                  <p>Sometimes one honest sentence is enough.</p>
                </div>
              </section>

              <section className="text-center">
                <p className="section-kicker text-lilac-deep">A tiny pause</p>
                <p className="mt-5">Next time you hear yourself say:</p>
                <p className="mt-3 font-[family-name:var(--font-display)] text-3xl leading-tight text-lilac-deep sm:text-4xl">“It’s fine.”</p>
                <p className="mt-8">Ask yourself:</p>
                <div className="mt-4 space-y-3 font-[family-name:var(--font-display)] text-xl leading-tight text-ink sm:text-2xl">
                  <p>Is it?</p>
                  <p>What are you actually feeling?</p>
                  <p>And what would you say if you didn&apos;t have to justify it?</p>
                </div>
              </section>

              <p className="pt-2 text-center font-[family-name:var(--font-display)] text-4xl leading-[1.05] text-lilac-deep sm:text-5xl">
                Don’t swallow it.<br />
                <em className="font-normal text-ink">Don’t overexplain it.</em><br />
                <em className="font-normal text-ink">Just say it.</em>
              </p>
            </div>
          ) : (
            <p className="mt-7 max-w-2xl text-base leading-8 text-ink/70 sm:text-lg">{activeNote.text}</p>
          )}
        </article>
      )}
    </section>
  );
}
