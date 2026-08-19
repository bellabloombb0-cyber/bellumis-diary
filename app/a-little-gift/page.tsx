import type { Metadata } from "next";
import Link from "next/link";
import { PassifloraLogo } from "@/components/PassifloraLogo";

export const metadata: Metadata = {
  title: "A little gift — Bellumi’s Diary",
  description: "A small digital postcard from Bellumi’s Diary.",
};

export default function LittleGiftPage() {
  return (
    <main className="min-h-screen bg-[#eee7f5] px-5 py-10 text-ink sm:px-10 sm:py-14 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="inline-flex text-sm font-bold text-lilac-deep transition hover:-translate-x-0.5 hover:text-ink">← Back to Bellumi’s Diary</Link>

        <section className="mt-12 text-center sm:mt-16">
          <PassifloraLogo className="mx-auto h-14 w-14 text-lilac-deep" />
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl leading-tight text-lilac-deep sm:text-5xl">A little gift for you</h1>
          <p className="mx-auto mt-5 max-w-lg text-base leading-8 text-ink/65">A small postcard to keep, save, or send to someone who needs a little reminder of home.</p>
        </section>

        <section className="mt-12 overflow-hidden rounded-[2rem] border-8 border-mist bg-mist shadow-xl shadow-lilac/20 sm:mt-14">
          <img src="/postcards/bellumis-postcard.png?v=2" alt="Digital postcard with a Portuguese coastal landscape, flowers, and cats" className="block w-full" />
        </section>

        <div className="mt-9 text-center">
          <a href="/postcards/bellumis-postcard.png?v=2" download="bellumis-postcard.png" className="inline-flex rounded-full bg-lilac-deep px-7 py-3.5 text-sm font-bold text-mist transition hover:-translate-y-0.5 hover:bg-ink">
            Download your postcard
          </a>
          <p className="mt-4 text-xs leading-5 text-ink/50">A small digital gift from Bellumi’s Diary.</p>
        </div>
      </div>
    </main>
  );
}
