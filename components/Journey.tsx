import { PassifloraLogo } from "./PassifloraLogo";
import { ScrollReveal } from "./ScrollReveal";

const transformations = [
  { swallowed: "“It’s fine.”", truth: "“That hurt me.”" },
  { swallowed: "“I don’t mind.”", truth: "“Actually, I’m not comfortable with that.”" },
  { swallowed: "“Whatever you want.”", truth: "“Actually, I’d prefer this.”" },
];

export function Journey() {
  return (
    <section id="journey" className="overflow-hidden bg-lilac-deep px-5 py-24 text-mist sm:px-10 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="section-kicker text-[#eadcf3]">02 — Roots</p>
          <h2 className="mt-8 max-w-4xl font-[family-name:var(--font-display)] text-5xl leading-[.95] sm:text-7xl">
            WHAT I ACTUALLY<br />
            <em className="font-normal text-[#eadcf3]">WANTED TO SAY.</em>
          </h2>
          <p className="mt-6 font-[family-name:var(--font-display)] text-xl italic text-[#eadcf3] sm:text-2xl">
            Things you swallow just to keep the peace.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-14 rounded-[2rem] border border-mist/20 bg-mist/10 px-6 py-9 sm:mt-20 sm:px-10 sm:py-12">
          <p className="font-[family-name:var(--font-display)] text-5xl leading-none sm:text-7xl">“It’s fine.”</p>
          <p className="mt-3 font-[family-name:var(--font-display)] text-xl italic text-[#eadcf3] sm:text-2xl">Is it?</p>
          <div className="mt-9 max-w-3xl space-y-5 text-base leading-8 text-[#f2eafa] sm:text-lg">
            <p>
              Sometimes we hide what we really feel to avoid conflict, rejection, disappointing someone, or being perceived as “too much.”
            </p>
            <p>
              But the alternative isn’t explaining and defending every feeling for ten minutes.
            </p>
            <p className="font-[family-name:var(--font-display)] text-2xl leading-tight text-mist sm:text-3xl">
              There is a space between swallowing everything and explaining everything: <strong>The truth.</strong>
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-8 grid gap-4 sm:mt-10">
          {transformations.map((transformation) => (
            <ScrollReveal key={transformation.swallowed} className="rounded-[1.5rem] bg-mist px-6 py-7 text-ink sm:px-9 sm:py-8">
              <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1.45fr)] sm:items-center sm:gap-6">
                <p className="font-[family-name:var(--font-display)] text-2xl leading-tight text-lilac-deep sm:text-3xl">
                  {transformation.swallowed}
                </p>
                <span aria-hidden="true" className="hidden text-2xl text-clay sm:block">→</span>
                <p className="font-[family-name:var(--font-display)] text-2xl leading-tight italic sm:text-3xl">
                  <span aria-hidden="true" className="mr-2 text-clay sm:hidden">→</span>
                  {transformation.truth}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-14 border-y border-mist/25 py-12 text-center sm:mt-20 sm:py-16">
          <p className="font-[family-name:var(--font-display)] text-4xl leading-tight text-mist sm:text-5xl">
            Your feelings don&apos;t need<br className="hidden sm:block" /> a presentation.
          </p>
          <div className="mx-auto mt-7 max-w-2xl space-y-4 text-base leading-8 text-[#f2eafa] sm:text-lg">
            <p>You don&apos;t have to convince someone that you&apos;re allowed to feel what you feel.</p>
            <p>And you don&apos;t have to make yourself smaller just to keep the peace.</p>
            <p>Sometimes one honest sentence is enough.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mx-auto mt-14 max-w-3xl rounded-[2rem] border border-mist/25 bg-[#60436d] px-6 py-10 text-center sm:mt-20 sm:px-12 sm:py-14">
          <p className="font-[family-name:var(--font-display)] text-3xl leading-tight sm:text-4xl">Before you say “it’s fine”…</p>
          <div className="mt-8 space-y-4 font-[family-name:var(--font-display)] text-xl leading-tight text-[#eadcf3] sm:text-2xl">
            <p>Is it?</p>
            <p>What are you actually feeling?</p>
            <p>What would you say if you didn&apos;t have to justify it?</p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-16 text-center sm:mt-20">
          <p className="font-[family-name:var(--font-display)] text-4xl leading-[1.05] sm:text-6xl">
            Don’t swallow it.<br />
            <em className="font-normal text-[#eadcf3]">Don’t overexplain it.</em><br />
            <em className="font-normal text-[#eadcf3]">Just say it.</em>
          </p>
          <PassifloraLogo className="mx-auto mt-9 h-14 w-14 text-[#eadcf3]" />
          <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-[#eadcf3]">
            A quiet page for the things that need a little more room than a post.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
