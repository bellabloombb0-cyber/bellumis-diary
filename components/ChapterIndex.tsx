const chapters = [
  { id: "music", number: "01", title: "Music", copy: "Listen again, stay with a song, or leave a little coin in the hat." },
  { id: "portugal", number: "02", title: "My Roots", copy: "Step back into Portugal — the place that still feels like a beginning." },
  { id: "philosophy", number: "03", title: "A Letter for You", copy: "Read the letter slowly, whenever it feels like the right time." },
];

export function ChapterIndex() {
  return <section className="chapter-index px-5 py-24 sm:px-10 lg:px-16 lg:py-36">
    <div className="mx-auto max-w-7xl">
      <p className="section-kicker text-lilac-deep">Stay a little longer</p>
      <h2 className="mt-6 max-w-3xl font-[family-name:var(--font-display)] text-5xl leading-[.88] text-ink sm:text-7xl">Come closer to<br /><em className="font-normal text-lilac-deep">each chapter.</em></h2>
      <p className="mt-7 max-w-xl text-base leading-8 text-ink/65">The journey brought you here. Choose a piece to return to and explore at your own pace.</p>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {chapters.map((chapter) => <a key={chapter.id} href={`#${chapter.id}`} className="chapter-index__card group">
          <span className="section-kicker text-lilac-deep">{chapter.number}</span>
          <h3 className="mt-8 font-[family-name:var(--font-display)] text-4xl text-ink">{chapter.title}</h3>
          <p className="mt-4 text-sm leading-6 text-ink/65">{chapter.copy}</p>
          <span className="chapter-index__link">Look closer</span>
        </a>)}
      </div>
    </div>
  </section>;
}
