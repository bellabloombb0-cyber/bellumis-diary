"use client";

import { useEffect, useRef, useState } from "react";

const stages = [
  { number: "01", eyebrow: "Bellumi’s Diary", title: null, prompt: "Scroll to begin." },
  { number: "02", eyebrow: "Music", title: "Music", prompt: "Keep scrolling." },
] as const;

/** A quiet opening: Bella's real Passiflora becomes Music without video motion. */
export function JourneyScene() {
  const sceneRef = useRef<HTMLElement>(null);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const updateJourney = () => {
      const bounds = scene.getBoundingClientRect();
      const available = Math.max(1, scene.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -bounds.top / available));
      const stage = Math.min(1, Math.floor(progress * 2.02));

      scene.style.setProperty("--journey-progress", progress.toFixed(3));
      setActiveStage((current) => (current === stage ? current : stage));
    };

    updateJourney();
    window.addEventListener("scroll", updateJourney, { passive: true });
    window.addEventListener("resize", updateJourney);
    return () => {
      window.removeEventListener("scroll", updateJourney);
      window.removeEventListener("resize", updateJourney);
    };
  }, []);

  const stage = stages[activeStage];

  return (
    <section id="top" ref={sceneRef} className="journey-scene" aria-label="The Bellumi’s Diary journey">
      <div className={`journey-scene__sticky journey-scene--quiet-${activeStage + 1}`}>
        <div className="journey-scene__depth journey-scene__depth--back" aria-hidden="true" />
        <div className="journey-scene__depth journey-scene__depth--middle" aria-hidden="true" />

        <div className="journey-flower" aria-hidden="true">
          <div className="journey-flower__shadow" />
          <div className="journey-flower__halo" />
          <div className="journey-flower__photo"><img src="/images/passiflora-hero.jpeg" alt="" /></div>
          <div className="journey-flower__guitar"><img src="/images/music/bella-with-guitar.png?v=2" alt="" /></div>
          <div className="journey-flower__glass" />
        </div>

        <p className="journey-intro-wordmark" aria-hidden="true">Bellumi’s<br /><em>Diary</em></p>
        <div className="journey-scene__counter" aria-hidden="true"><span>{stage.number}</span><i /><span>{stage.eyebrow}</span></div>

        {stage.title && (
          <div className="journey-chapter journey-chapter--quiet-music">
            <p className="section-kicker">02 — Music</p>
            <h2>{stage.title}</h2>
          </div>
        )}

        <p className="journey-scene__prompt">{stage.prompt}</p>
      </div>
    </section>
  );
}
