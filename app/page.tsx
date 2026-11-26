import { ChapterIndex } from "@/components/ChapterIndex";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { JourneyScene } from "@/components/JourneyScene";
import { Music } from "@/components/Music";
import { Navbar } from "@/components/Navbar";
import { Philosophy } from "@/components/Philosophy";
import { Portugal } from "@/components/Portugal";

export default function Home() {
  return (
    <main>
      <Navbar />
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
