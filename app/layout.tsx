import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Bellumi’s Diary — slow notes, soft places", description: "Music, Portugal, photographs and small things worth keeping." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="scroll-smooth"><body>{children}</body></html>;
}
