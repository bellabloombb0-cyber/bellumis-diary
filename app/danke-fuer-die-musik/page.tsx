import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danke für die Musik | Bellumi’s Diary",
  robots: { index: false, follow: false },
};

export default function DankeFuerDieMusik() {
  return <main className="min-h-screen bg-[#eee7f5] px-5 py-16 sm:px-10 lg:px-16 lg:py-24">
    <section className="mx-auto max-w-3xl rounded-[2rem] bg-mist p-7 text-center shadow-xl shadow-lilac/15 sm:p-12">
      <p className="section-kicker text-lilac-deep">A little thank you</p>
      <h1 className="mt-5 font-[family-name:var(--font-display)] text-5xl leading-[.95] text-ink sm:text-7xl">Danke für deine<br /><em className="font-normal text-lilac-deep">Münze im Hut!</em></h1>
      <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-ink/70">Du bringst mich meinem Traum von Portugal ein Stück näher. Hier ist dein Song. 🤍</p>

      <div className="mt-10 rounded-2xl border border-lilac/30 bg-[#f7f1fb] p-5 text-left sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[.16em] text-lilac-deep">Full song</p>
        {/* TODO: Add Bella's full MP3 at /public/audio/full-song-placeholder.mp3. */}
        <audio className="mt-4 w-full" controls preload="metadata" aria-label="Full song">
          <source src="/audio/full-song-placeholder.mp3" type="audio/mpeg" />
          Your browser does not support audio playback.
        </audio>
        <p className="mt-3 text-xs leading-5 text-ink/55">Temporary audio file: <code>/audio/full-song-placeholder.mp3</code></p>
      </div>

      {/* TODO: This link downloads the full MP3 after /public/audio/full-song-placeholder.mp3 is replaced. */}
      <a className="mt-8 inline-flex rounded-full bg-ink px-7 py-4 text-sm font-bold text-mist transition hover:-translate-y-0.5 hover:bg-lilac-deep" href="/audio/full-song-placeholder.mp3" download>Song als MP3 herunterladen 📥</a>
      <p className="mt-8 text-sm"><a className="text-lilac-deep underline-offset-4 transition hover:underline" href="/">Zurück zur Startseite</a></p>
    </section>
  </main>;
}
