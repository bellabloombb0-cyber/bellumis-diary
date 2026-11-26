"use client";

import { useEffect, useRef, useState } from "react";

const chapters = [
  {
    number: "01",
    eyebrow: "Bellumi’s Diary",
    title: "A little world\nopens here.",
    note: "Scroll slowly — the flower has something to say.",
  },
  {
    number: "02",
    eyebrow: "Music",
    title: "A flower becomes\na song.",
    note: "The thing I love — carried anywhere.",
  },
];

/**
 * The first part of the visual story: a real Passiflora turns into music.
 * It stays deliberately small and light while the later chapters remain below.
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
      const chapter = Math.min(1, Math.floor(progress * 2.03));

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
    <section id="top" ref={sceneRef} className="journey-scene" aria-label="The Bellumi’s Diary journey">
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
          <div className="journey-flower__guitar">
            <img src="/images/music/bella-with-guitar.png?v=2" alt="" />
          </div>
          <p className="journey-flower__wordmark">Bellumi’s<br /><em>Diary</em></p>
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

        <p className="journey-scene__prompt">Keep scrolling — the flower becomes music.</p>
      </div>
    </section>
  );
}
