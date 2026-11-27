"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Music", href: "#music", id: "music" },
  { label: "Portugal", href: "#portugal", id: "portugal" },
  { label: "A Letter for You", href: "#philosophy", id: "philosophy" },
  { label: "Leave Me a Note", href: "#contact", id: "contact" },
  { label: "A Gift for You", href: "/a-little-gift" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveId(entry.target.id)),
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );
    links.filter((link) => link.id).forEach((link) => {
      const section = document.getElementById(link.id!);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  const linkClass = (id?: string) => `relative text-[.68rem] font-semibold uppercase tracking-[.11em] transition after:absolute after:-bottom-2 after:left-0 after:h-px after:bg-lilac-deep after:transition-all ${id && activeId === id ? "text-lilac-deep after:w-full" : "text-ink/70 after:w-0 hover:text-lilac-deep hover:after:w-full"}`;

  return <header className="bellumi-nav fixed inset-x-0 top-0 z-50">
    <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
      <a href="#top" aria-label="Bellumi’s Diary home" className="flex items-center gap-2.5 text-ink"><img src="/images/passiflora-logo.jpeg" alt="Passiflora logo" className="h-9 w-9 rounded-full object-cover ring-2 ring-lilac/30" /><span className="font-[family-name:var(--font-display)] text-2xl tracking-tight">Bellumi’s Diary</span></a>
      <div className="hidden items-center gap-4 lg:flex">{links.map((link) => <a key={link.href} href={link.href} className={linkClass(link.id)}>{link.label}</a>)}</div>
      <button className="rounded-full border border-lilac/35 px-3 py-2 text-xs font-bold lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open}>Menu</button>
    </nav>
    {open && <div className="border-t border-lilac/15 bg-mist/95 px-5 py-5 backdrop-blur-xl lg:hidden">{links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className={`block py-3 text-sm font-semibold ${link.id === activeId ? "text-lilac-deep" : "text-ink"}`}>{link.label}</a>)}</div>}
  </header>;
}
