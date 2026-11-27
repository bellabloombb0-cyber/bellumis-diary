"use client";

import { useEffect, useRef, useState } from "react";

const stages = [
  { number: "01", eyebrow: "Bellumi’s Diary", title: null, note: null, prompt: "Scroll slowly — come closer." },
  { number: "—", eyebrow: "A little flutter", title: null, note: null, prompt: "The butterfly knows the way." },
  { number: "02", eyebrow: "Music", title: "A flower becomes\na song.", note: "The thing I love — carried anywhere.", prompt: "Keep scrolling — the song is waiting below." },
] as const;

/** Bella's original footage: Passiflora zoom → butterfly landing → Music. */
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
      const stage = Math.min(2, Math.floor(progress * 3.04));
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
      <div className={`journey-scene__sticky journey-scene--stage-${activeStage + 1}`}>
        <div className="journey-film" aria-hidden="true">
          <video className="journey-film__clip journey-film__clip--flower" autoPlay loop muted playsInline preload="metadata" poster="/videos/passiflora-zoom-poster.jpg">
            <source src="/videos/passiflora-zoom.mp4" type="video/mp4" />
          </video>
          <video className="journey-film__clip journey-film__clip--butterfly" autoPlay loop muted playsInline preload="metadata" poster="/videos/butterfly-landing-poster.jpg">
            <source src="/videos/butterfly-landing.mp4" type="video/mp4" />
          </video>
          <div className="journey-film__veil" />
          <svg className="journey-butterfly-flight" viewBox="0 0 160 110" role="presentation">
            <path d="M79 53c-22-36-51-36-55-7-4 23 22 30 49 15-15 17-14 32 7 39 18-9 19-23 7-39 26 14 51 8 48-15-4-30-34-30-55 7Z" />
            <path className="journey-butterfly-flight__body" d="M80 43c4 9 4 17 0 29" />
          </svg>
        </div>

        <div className="journey-scene__depth journey-scene__depth--back" aria-hidden="true" />
        <div className="journey-scene__depth journey-scene__depth--middle" aria-hidden="true" />
        <div className="journey-scene__thread" aria-hidden="true" />

        <div className="journey-flower" aria-hidden="true">
          <div className="journey-flower__shadow" />
          <div className="journey-flower__halo" />
          <div className="journey-flower__photo"><img src="/images/passiflora-hero.jpeg" alt="" /></div>
          <div className="journey-flower__guitar"><img src="/images/music/bella-with-guitar.png?v=2" alt="" /></div>
          <div className="journey-flower__glass" />
        </div>

        <p className="journey-intro-wordmark" aria-hidden="true">Bellumi’s<br /><em>Diary</em></p>
        <div className="journey-scene__counter" aria-hidden="true"><span>{stage.number}</span><i /><span>{stage.eyebrow}</span></div>

        {stage.title && stage.note && (
          <div className="journey-chapter journey-chapter--music">
            <p className="section-kicker">{stage.number} — {stage.eyebrow}</p>
            <h2>{stage.title.split("\n").map((line, index) => <span key={line}><span>{line}</span>{index === 0 && <br />}</span>)}</h2>
            <p>{stage.note}</p>
          </div>
        )}
        <p className="journey-scene__prompt">{stage.prompt}</p>
      </div>
    </section>
  );
}
