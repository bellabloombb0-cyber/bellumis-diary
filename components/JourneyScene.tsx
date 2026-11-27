"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sparkles, useTexture } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

type ScrollRef = { current: number };

const chapters = [
  { id: "bloom", number: "01", label: "Bellumi’s Diary", title: "A world that feels like yours.", note: "Scroll gently to enter." },
  { id: "butterfly", number: "02", label: "The way opens", title: "Follow what feels alive.", note: "The butterfly knows the way." },
  { id: "music", number: "03", label: "Music", title: "The thing I love.", note: "A song can be a home." },
  { id: "portugal", number: "04", label: "Portugal", title: "The place that made me.", note: "Light, wild nature, home." },
  { id: "letter", number: "05", label: "A Letter for You", title: "Come a little closer.", note: "There is no rush here." },
] as const;

function blend(first: THREE.Color, second: THREE.Color, amount: number) {
  return first.clone().lerp(second, amount);
}

function CameraAndLight({ scroll }: { scroll: ScrollRef }) {
  const { camera, scene } = useThree();
  const smooth = useRef(0);
  const from = useMemo(() => new THREE.Color("#160d23"), []);
  const through = useMemo(() => new THREE.Color("#3b2054"), []);
  const portugal = useMemo(() => new THREE.Color("#395b4d"), []);
  const letter = useMemo(() => new THREE.Color("#bca7d0"), []);

  useFrame((_, delta) => {
    smooth.current = THREE.MathUtils.damp(smooth.current, scroll.current, 4.5, delta);
    const progress = smooth.current;
    const background = progress < 0.45
      ? blend(from, through, progress / 0.45)
      : progress < 0.78
        ? blend(through, portugal, (progress - 0.45) / 0.33)
        : blend(portugal, letter, (progress - 0.78) / 0.22);
    scene.background = background;
    camera.position.x = Math.sin(progress * Math.PI * 1.9) * 0.45;
    camera.position.y = Math.cos(progress * Math.PI * 1.2) * 0.22;
    camera.position.z = 7.7 - progress * 2.7;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function LivingWorld({ scroll }: { scroll: ScrollRef }) {
  const flowerMap = useTexture("/images/passiflora-hero.jpeg");
  const guitarMap = useTexture("/images/music/bella-with-guitar.png?v=2");
  const forestMap = useTexture("/images/portugal-forest.jpg");
  const flower = useRef<THREE.Mesh>(null);
  const guitar = useRef<THREE.Mesh>(null);
  const forest = useRef<THREE.Mesh>(null);
  const letter = useRef<THREE.Mesh>(null);
  const orbit = useRef<THREE.Group>(null);
  const petals = useMemo(() => Array.from({ length: 10 }, (_, index) => index), []);

  useEffect(() => {
    [flowerMap, guitarMap, forestMap].forEach((texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = 4;
    });
  }, [flowerMap, guitarMap, forestMap]);

  useFrame((state, delta) => {
    const progress = scroll.current;
    const time = state.clock.getElapsedTime();
    const musicMix = THREE.MathUtils.smoothstep(progress, 0.39, 0.6);
    const portugalMix = THREE.MathUtils.smoothstep(progress, 0.59, 0.81);
    const letterMix = THREE.MathUtils.smoothstep(progress, 0.79, 0.97);

    if (flower.current) {
      flower.current.rotation.z += delta * 0.055;
      flower.current.rotation.x = Math.sin(time * 0.35) * 0.08 - musicMix * 0.44;
      flower.current.position.set(-musicMix * 1.9 - portugalMix * 1.2, 0.1 + portugalMix * 1.5, 0.3 - portugalMix * 0.8);
      flower.current.scale.setScalar(1.38 - musicMix * 0.46 - portugalMix * 0.48);
      (flower.current.material as THREE.MeshBasicMaterial).opacity = 1 - letterMix * 0.58;
    }
    if (guitar.current) {
      guitar.current.rotation.z = 0.48 - musicMix * 0.7 + Math.sin(time * 0.3) * 0.035;
      guitar.current.rotation.y = 0.22 - musicMix * 0.34;
      guitar.current.position.set(2.9 - musicMix * 2.1 - portugalMix * 3.2, -0.12 - portugalMix * 1.5, -0.35 - portugalMix * 0.9);
      guitar.current.scale.setScalar(0.05 + musicMix * 0.95 - portugalMix * 0.43);
      (guitar.current.material as THREE.MeshBasicMaterial).opacity = Math.min(1, musicMix * 2.3) * (1 - letterMix * 0.7);
    }
    if (forest.current) {
      forest.current.rotation.y = -0.16 + Math.sin(time * 0.2) * 0.015;
      forest.current.position.set(portugalMix * 0.2, -0.12, -2.35 + portugalMix * 1.55);
      forest.current.scale.set(6.8 + portugalMix * 2.4, 5.8 + portugalMix * 1.8, 1);
      (forest.current.material as THREE.MeshBasicMaterial).opacity = portugalMix * 0.9 * (1 - letterMix * 0.65);
    }
    if (letter.current) {
      letter.current.position.set(0.5, -0.1, 0.4 + letterMix * 0.7);
      letter.current.rotation.z = -0.07 + Math.sin(time * 0.18) * 0.015;
      letter.current.scale.setScalar(0.4 + letterMix * 1.05);
      (letter.current.material as THREE.MeshBasicMaterial).opacity = letterMix;
    }
    if (orbit.current) {
      orbit.current.rotation.z -= delta * (0.1 + musicMix * 0.14);
      orbit.current.scale.setScalar(1 + musicMix * 0.26 + portugalMix * 0.35);
      orbit.current.position.x = -musicMix * 0.8;
    }
  });

  return <>
    <ambientLight intensity={1.8} />
    <pointLight position={[3, 3, 4]} intensity={35} color="#ddbcf2" />
    <pointLight position={[-4, -1, 2]} intensity={24} color="#ffd493" />
    <Sparkles count={70} speed={0.25} size={2.2} scale={[11, 7, 5]} color="#f6e6ff" />
    <group ref={orbit}>{petals.map((index) => {
      const angle = (index / petals.length) * Math.PI * 2;
      return <mesh key={index} position={[Math.cos(angle) * 3.1, Math.sin(angle) * 3.1, -1.5]} rotation={[0, 0, angle]}>
        <circleGeometry args={[0.86, 32]} />
        <meshStandardMaterial color={index % 2 ? "#b88bd1" : "#e5cfee"} transparent opacity={0.22} roughness={0.45} metalness={0.08} />
      </mesh>;
    })}</group>
    <mesh ref={forest}><planeGeometry args={[1, 1]} /><meshBasicMaterial map={forestMap} transparent opacity={0} toneMapped={false} /></mesh>
    <mesh ref={flower}><circleGeometry args={[2.75, 72]} /><meshBasicMaterial map={flowerMap} transparent opacity={1} toneMapped={false} /></mesh>
    <mesh ref={guitar}><circleGeometry args={[2.8, 72]} /><meshBasicMaterial map={guitarMap} transparent opacity={0} toneMapped={false} /></mesh>
    <mesh ref={letter}><planeGeometry args={[3.7, 4.65]} /><meshBasicMaterial color="#fbf4ff" transparent opacity={0} /></mesh>
  </>;
}

function CanvasWorld({ scroll }: { scroll: ScrollRef }) {
  return <Canvas dpr={[1, 1.5]} gl={{ antialias: true, powerPreference: "high-performance" }} camera={{ fov: 37, position: [0, 0, 7.7] }}>
    <CameraAndLight scroll={scroll} />
    <LivingWorld scroll={scroll} />
  </Canvas>;
}

export function JourneyScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollProgress = useRef(0);
  const [chapter, setChapter] = useState(0);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const setProgress = gsap.quickTo(scrollProgress, "current", { duration: 0.5, ease: "power2.out" });
    const update = () => {
      const bounds = section.getBoundingClientRect();
      const distance = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = THREE.MathUtils.clamp(-bounds.top / distance, 0, 1);
      setProgress(progress);
      section.style.setProperty("--journey-progress", progress.toFixed(3));
      const nextChapter = Math.min(chapters.length - 1, Math.floor(progress * chapters.length));
      setChapter((previous) => previous === nextChapter ? previous : nextChapter);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      setProgress.tween?.kill();
    };
  }, []);
  const active = chapters[chapter];
  return <section id="top" ref={sectionRef} className="journey-immersive" aria-label="Bellumi’s Diary, an immersive journey">
    <div className="journey-immersive__stage" data-chapter={active.id}>
      <div className="journey-immersive__canvas" aria-hidden="true"><CanvasWorld scroll={scrollProgress} /></div>
      <div className="journey-immersive__veil" aria-hidden="true" />
      <video className="journey-butterfly-video" muted autoPlay loop playsInline preload="metadata" aria-hidden="true"><source src="/videos/butterfly-landing.mp4" type="video/mp4" /></video>
      <div className="journey-immersive__chrome" aria-hidden="true"><span>{active.number}</span><i /><span>{active.label}</span></div>
      <div className="journey-immersive__copy">
        <p className="journey-immersive__eyebrow">{active.label}</p>
        <h1>{active.id === "bloom" ? <><span>Bellumi’s</span><em>Diary</em></> : active.title}</h1>
        <p>{active.note}</p>
      </div>
      <div className="journey-immersive__scroll-hint" aria-hidden="true"><span>Scroll to wander</span><i /></div>
      <p className="sr-only">{active.title}</p>
    </div>
  </section>;
}
