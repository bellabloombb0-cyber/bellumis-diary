import { ChapterIndex } from "@/components/ChapterIndex";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { JourneyScene } from "@/components/JourneyScene";
import { Music } from "@/components/Music";
import { Navbar } from "@/components/Navbar";
import { Philosophy } from "@/components/Philosophy";
import { Portugal } from "@/components/Portugal";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <JourneyScene />
      <Music />
      <Portugal />
      <Philosophy />
      <ChapterIndex />
      <Contact />
      <Footer />
    </main>
  );
}
