"use client";
import { useEffect, useState } from "react";
const links = [["A Letter for You", "philosophy"], ["Roots", "journey"], ["Freedom tools", "explore"], ["Music", "music"], ["Portugal", "portugal"]];
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveId(entry.target.id)),
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );
    links.forEach(([, id]) => { const section = document.getElementById(id); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, []);

  const linkClass = (id: string) => `relative text-xs font-semibold tracking-wide transition after:absolute after:-bottom-2 after:left-0 after:h-px after:bg-lilac-deep after:transition-all ${activeId === id ? "text-lilac-deep after:w-full" : "text-ink/70 after:w-0 hover:text-lilac-deep hover:after:w-full"}`;

  return <header className="fixed inset-x-0 top-0 z-50 border-b border-lilac/15 bg-mist/88 backdrop-blur-md"><nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8"><a href="#top" aria-label="Bellumi’s Diary home" className="flex items-center gap-2.5 text-ink"><img src="/images/passiflora-logo.jpeg" alt="Passiflora logo" className="h-9 w-9 rounded-full object-cover ring-2 ring-lilac/30" /><span className="font-[family-name:var(--font-display)] text-2xl tracking-tight">Bellumi’s Diary</span></a><div className="hidden items-center gap-6 md:flex">{links.map(([label,id]) => <a key={id} href={`#${id}`} className={linkClass(id)}>{label}</a>)}</div><button className="rounded-full border border-lilac/35 px-3 py-2 text-xs font-bold md:hidden" onClick={() => setOpen(!open)} aria-expanded={open}>Menu</button></nav>{open && <div className="border-t border-lilac/15 bg-mist px-5 py-5 md:hidden">{links.map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className={`block py-3 text-sm font-semibold ${activeId === id ? "text-lilac-deep" : "text-ink"}`}>{label}</a>)}</div>}</header>;
}
