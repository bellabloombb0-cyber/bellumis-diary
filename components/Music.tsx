import { ScrollReveal } from "./ScrollReveal";

// TODO: Bellas echten PayPal.me-Link einsetzen.
const paypalMeBaseUrl = "https://www.paypal.com/paypalme/REPLACE_WITH_BELLAS_LINK";

export function Music() {
  return <section id="music" className="bg-[#e9dff2] px-5 py-24 sm:px-10 lg:px-16 lg:py-36">
    <div className="mx-auto max-w-7xl">
      <ScrollReveal>
        <p className="section-kicker text-lilac-deep">04 — Music</p>
        <h2 className="mt-9 font-[family-name:var(--font-display)] text-5xl leading-[.95] sm:text-7xl">The thing<br /><em className="font-normal text-lilac-deep">I love.</em></h2>
      </ScrollReveal>

      <div className="mt-14 grid items-center gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
        <ScrollReveal className="relative overflow-hidden rounded-[2rem] border-8 border-mist bg-lilac/20 shadow-xl shadow-lilac/20">
          {/* TODO: Replace /images/music/bella-with-guitar-placeholder.jpg with Bella's music photo. */}
          <img src="/images/music/bella-with-guitar-placeholder.jpg" alt="Placeholder for Bella with her guitar" className="aspect-[4/5] w-full object-cover" />
          <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-mist/90 px-4 py-3 text-center text-xs font-bold text-ink/70 backdrop-blur-sm">Photo placeholder — replace with Bella&apos;s music photo</div>
        </ScrollReveal>

        <ScrollReveal className="rounded-[2rem] bg-mist p-7 shadow-sm sm:p-10">
          <p className="font-[family-name:var(--font-display)] text-3xl leading-tight text-ink">My digital street music hat</p>
          <p className="mt-5 max-w-xl text-base leading-8 text-ink/70">Music is my portable home. You&apos;re always welcome to simply listen.</p>

          <div className="mt-8 rounded-2xl border border-lilac/30 bg-[#f7f1fb] p-5">
            <p className="text-xs font-bold uppercase tracking-[.16em] text-lilac-deep">20–30 second preview</p>
            {/* TODO: Add only Bella's 20–30 second MP3 teaser at /public/audio/song-teaser-placeholder.mp3. */}
            <audio className="mt-4 w-full" controls preload="metadata" aria-label="20 to 30 second music preview">
              <source src="/audio/song-teaser-placeholder.mp3" type="audio/mpeg" />
              Your browser does not support audio playback.
            </audio>
            <p className="mt-3 text-xs leading-5 text-ink/55">Temporary audio file: <code>/audio/song-teaser-placeholder.mp3</code></p>
          </div>

          <div className="mt-8">
            <p className="text-sm leading-6 text-ink/65">If you&apos;d like to leave a coin in my digital hat, thank you. Every contribution supports this journey.</p>
            {/* TODO: Bellas echten PayPal.me-Link einsetzen. */}
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <a className="rounded-full bg-lilac-deep px-4 py-3 text-center text-sm font-bold text-mist transition hover:-translate-y-0.5 hover:bg-ink" href={`${paypalMeBaseUrl}/1EUR`} target="_blank" rel="noreferrer">Leave €1</a>
              <a className="rounded-full border border-lilac-deep bg-mist px-4 py-3 text-center text-sm font-bold text-lilac-deep transition hover:-translate-y-0.5 hover:bg-lilac-deep hover:text-mist" href={`${paypalMeBaseUrl}/5EUR`} target="_blank" rel="noreferrer">Leave €5</a>
              <a className="rounded-full border border-lilac-deep bg-[#f0e6f6] px-4 py-3 text-center text-sm font-bold text-lilac-deep transition hover:-translate-y-0.5 hover:bg-lilac-deep hover:text-mist" href={paypalMeBaseUrl} target="_blank" rel="noreferrer">Choose an amount (from €1)</a>
            </div>
            <p className="mt-4 text-xs leading-5 text-ink/50">PayPal.Me placeholder active — replace the link before sharing this page.</p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>;
}
