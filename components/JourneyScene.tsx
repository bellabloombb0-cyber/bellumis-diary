"use client";

import { useEffect, useRef, useState } from "react";

const chapters = [
  {
    number: "01",
    eyebrow: "Music",
    title: "A flower becomes\na song.",
    note: "The thing I love — carried anywhere.",
  },
  {
    number: "02",
    eyebrow: "My Roots",
    title: "The song finds\nits way home.",
    note: "Portugal, wild light, and the place that still lives in me.",
  },
  {
    number: "03",
    eyebrow: "A Letter for You",
    title: "And then,\na little truth.",
    note: "Something soft to take with you.",
  },
];

/**
 * The visual story between the opening bloom and the detailed chapters below.
 * It uses one real flower photo and composited CSS layers so it feels spatial
 * without loading a heavy 3D canvas on a phone.
 */
export function JourneyScene() {
  const sceneRef = useRef<HTMLElement>(null);
  const [activeChapter, setActiveChapter] = useState(0);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const updateJourney = () => {
      const bounds = scene.getBoundingClientRect();
      const available = Math.max(1, scene.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -bounds.top / available));
      const chapter = Math.min(2, Math.floor(progress * 3.03));

      scene.style.setProperty("--journey-progress", progress.toFixed(3));
      setActiveChapter((current) => (current === chapter ? current : chapter));
    };

    updateJourney();
    window.addEventListener("scroll", updateJourney, { passive: true });
    window.addEventListener("resize", updateJourney);
    return () => {
      window.removeEventListener("scroll", updateJourney);
      window.removeEventListener("resize", updateJourney);
    };
  }, []);

  return (
    <section ref={sceneRef} className="journey-scene" aria-label="The Bellumi’s Diary journey">
      <div className={`journey-scene__sticky journey-scene--chapter-${activeChapter + 1}`}>
        <div className="journey-scene__depth journey-scene__depth--back" aria-hidden="true" />
        <div className="journey-scene__depth journey-scene__depth--middle" aria-hidden="true" />
        <div className="journey-scene__thread" aria-hidden="true" />

        <div className="journey-flower" aria-hidden="true">
          <div className="journey-flower__shadow" />
          <div className="journey-flower__halo" />
          <div className="journey-flower__photo">
            <img src="/images/passiflora-hero.jpeg" alt="" />
          </div>
          <div className="journey-flower__glass" />
        </div>

        <div className="journey-scene__counter" aria-hidden="true">
          <span>{chapters[activeChapter].number}</span>
          <i />
          <span>{chapters[activeChapter].eyebrow}</span>
        </div>

        {chapters.map((chapter, index) => (
          <div key={chapter.number} className={`journey-chapter journey-chapter--${index + 1}`} aria-hidden={activeChapter !== index}>
            <p className="section-kicker">{chapter.number} — {chapter.eyebrow}</p>
            <h2>
              {chapter.title.split("\n").map((line, lineIndex) => (
                <span key={line}><span>{line}</span>{lineIndex === 0 && <br />}</span>
              ))}
            </h2>
            <p>{chapter.note}</p>
          </div>
        ))}

        <p className="journey-scene__prompt">Keep scrolling — the flower carries the story.</p>
      </div>
    </section>
  );
}
