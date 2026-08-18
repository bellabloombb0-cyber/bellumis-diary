import type { Metadata } from "next";
import Link from "next/link";
import { PassifloraLogo } from "@/components/PassifloraLogo";

export const metadata: Metadata = {
  title: "A little piece of Portugal — Bellumi’s Diary",
  description: "A small digital postcard from Bellumi’s Diary.",
};

export default function LittleGiftPage() {
  return (
    <main className="min-h-screen bg-[#eee7f5] px-5 py-10 text-ink sm:px-10 sm:py-14 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="inline-flex text-sm font-bold text-lilac-deep transition hover:-translate-x-0.5 hover:text-ink">← Back to Bellumi’s Diary</Link>

        <section className="mt-12 text-center sm:mt-16">
          <PassifloraLogo className="mx-auto h-14 w-14 text-lilac-deep" />
          <p className="section-kicker mt-6 text-lilac-deep">A little gift for you</p>
          <h1 className="mt-5 font-[family-name:var(--font-display)] text-5xl leading-[.92] sm:text-7xl">A little piece<br /><em className="font-normal text-lilac-deep">of Portugal.</em></h1>
          <p className="mx-auto mt-6 max-w-lg text-base leading-8 text-ink/65">A small postcard to keep, save, or send to someone who needs a little reminder of home.</p>
        </section>

        <section className="mt-12 overflow-hidden rounded-[2rem] border-8 border-mist bg-mist shadow-xl shadow-lilac/20 sm:mt-14">
          {/* TODO: Replace this postcard artwork with Bella’s Portugal photo when it is ready. */}
          <img src="/postcards/a-little-piece-of-portugal.svg" alt="Digital postcard with a soft Portugal-inspired landscape and a message about finding home" className="block w-full" />
        </section>

        <div className="mt-9 text-center">
          <a href="/postcards/a-little-piece-of-portugal.svg" download="a-little-piece-of-portugal.svg" className="inline-flex rounded-full bg-lilac-deep px-7 py-3.5 text-sm font-bold text-mist transition hover:-translate-y-0.5 hover:bg-ink">
            Download your postcard
          </a>
          <p className="mt-4 text-xs leading-5 text-ink/50">A small digital gift from Bellumi’s Diary.</p>
        </div>
      </div>
    </main>
  );
}
