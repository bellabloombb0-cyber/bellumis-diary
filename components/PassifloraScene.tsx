"use client";

import { useEffect, useRef, useState } from "react";

type PassifloraSceneProps = {
  compact?: boolean;
  openOnScroll?: boolean;
};

export function PassifloraScene({ compact = false, openOnScroll = false }: PassifloraSceneProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [isBlooming, setIsBlooming] = useState(false);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene || compact || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const moveScene = (event: PointerEvent) => {
      const bounds = scene.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
      scene.style.setProperty("--scene-x", x.toFixed(3));
      scene.style.setProperty("--scene-y", y.toFixed(3));
    };

    const resetScene = () => {
      scene.style.setProperty("--scene-x", "0");
      scene.style.setProperty("--scene-y", "0");
    };

    scene.addEventListener("pointermove", moveScene);
    scene.addEventListener("pointerleave", resetScene);
    return () => {
      scene.removeEventListener("pointermove", moveScene);
      scene.removeEventListener("pointerleave", resetScene);
    };
  }, [compact]);

  useEffect(() => {
    if (compact || !openOnScroll) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setIsBlooming(true);
      return;
    }

    const bloomOnScroll = () => {
      // A small first scroll is all it takes: the scene should feel discovered, not controlled.
      if (window.scrollY > Math.max(28, window.innerHeight * 0.06)) setIsBlooming(true);
    };

    bloomOnScroll();
    window.addEventListener("scroll", bloomOnScroll, { passive: true });
    return () => window.removeEventListener("scroll", bloomOnScroll);
  }, [compact, openOnScroll]);

  const bloom = () => {
    setIsBlooming(false);
    window.requestAnimationFrame(() => setIsBlooming(true));
  };

  return (
    <div
      ref={sceneRef}
      className={`passiflora-scene ${compact ? "passiflora-scene--compact" : ""} ${isBlooming ? "is-blooming" : ""}`}
      aria-label="A real passion flower that opens as the story begins"
    >
      {!compact && !openOnScroll && (
        <button type="button" onClick={bloom} className="passiflora-trigger" aria-pressed={isBlooming}>
          <span>Let it bloom</span>
          <span aria-hidden="true">✦</span>
        </button>
      )}

      <div className="passiflora-orbit passiflora-orbit--one" />
      <div className="passiflora-orbit passiflora-orbit--two" />
      <div className="passiflora-shadow" />
      <div className="passiflora-photo passiflora-photo--echo" aria-hidden="true" />
      <div className="passiflora-photo passiflora-photo--main">
        <img src="/images/passiflora-hero.jpeg" alt="A real purple passion flower" />
      </div>
      <div className="passiflora-lens" aria-hidden="true" />
    </div>
  );
}
