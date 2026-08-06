"use client";
import { useState } from "react";
import { PassifloraLogo } from "./PassifloraLogo";
const links = [["About", "philosophy"], ["Journeys", "journey"], ["Explore", "explore"], ["Music", "music"], ["Portugal", "portugal"], ["Contact", "contact"]];
export function Navbar() {
  const [open, setOpen] = useState(false);
  const go = () => setOpen(false);
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/8 bg-mist/88 backdrop-blur-md"><nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
    <a href="#top" aria-label="Bellumi’s Diary home" className="flex items-center gap-2 text-ink"><PassifloraLogo className="h-8 w-8" /><span className="font-[family-name:var(--font-display)] text-2xl tracking-tight">Bellumi’s Diary</span></a>
    <div className="hidden items-center gap-6 md:flex">{links.map(([label, id]) => <a key={id} href={`#${id}`} className="text-xs font-semibold tracking-wide text-ink/70 transition hover:text-lilac-deep">{label}</a>)}</div>
    <button className="rounded-full border border-ink/15 px-3 py-2 text-xs font-bold md:hidden" onClick={() => setOpen(!open)} aria-expanded={open}>Menu</button>
  </nav>{open && <div className="border-t border-ink/8 bg-mist px-5 py-5 md:hidden">{links.map(([label,id]) => <a key={id} href={`#${id}`} onClick={go} className="block py-3 text-sm font-semibold">{label}</a>)}</div>}</header>;
}
