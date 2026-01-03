import type { Metadata } from "next";
import { Lato } from 'next/font/google';
import "./globals.css";

import Link from "next/link";

const lato = Lato({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Ylikelatus 2026",
  description: "Vuoden 2026 ylikellotus on nyt täällä! Tervetuloa juhlimaan maailman tylsimmille synttäreille.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <header className="sticky top-0 bg-blue-700 text-white flex flex-row items-center justify-between mx-auto px-4 py-3 sm:px-6">
          <div className="flex flex-row gap-2">
            <Link href="/"><strong className="text-4xl">Ylikelatus 2026</strong></Link>
          </div>
          <div className="flex flex-row gap-2">
            <Link href="/contact">Ota yhteyttä</Link>
            <Link href="/login">Kirjaudu</Link>
          </div>
        </header>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-blue-700 text-white flex justify-between px-4 py-3 text-sm">
          <div className="flex gap-0 flex-col md:gap-2 md:flex-row self-end">
            <p>© 2026 Tietokilta</p>
            <p>Kaikki oikeudet pidätetään</p>
          </div>
          <div className="flex gap-2 flex-col md:gap-4 md:flex-row">
            <Link className="hover:underline self-end" href="">Anna palautetta</Link>
            <Link className="hover:underline self-end" href="/">Tietosuoja ja evästeet</Link>
            <Link className="hover:underline self-end" href="">Saavutettavuusseloste</Link>
          </div>
        </footer>
      </body>
    </html >
  );
}
