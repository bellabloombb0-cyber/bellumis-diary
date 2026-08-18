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
    title: "What I actually wanted to say.",
    text: "This note is still being written.",
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
        <h2 className="mt-9 font-[family-name:var(--font-display)] text-5xl leading-[.95] sm:text-7xl">
          Roots.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-8 text-[#eadcf3] sm:text-lg">
          Small notes for coming back to yourself.
        </p>

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
        <article id="roots-note" className="letter-open mx-auto mt-7 max-w-5xl rounded-[2rem] bg-[#f2ecf8] p-7 text-ink shadow-sm sm:mt-9 sm:p-12">
          <p className="section-kicker text-lilac-deep">{activeNote.number} — Roots note</p>
          <h3 className="mt-5 font-[family-name:var(--font-display)] text-4xl leading-tight sm:text-5xl">{activeNote.title}</h3>
          <p className="mt-7 max-w-2xl text-base leading-8 text-ink/70 sm:text-lg">{activeNote.text}</p>
        </article>
      )}
    </section>
  );
}
