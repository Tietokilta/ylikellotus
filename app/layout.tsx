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
        <div className="max-w-5xl mx-auto">
          <header className="flex flex-row items-center justify-between mx-auto px-4 py-3 sm:px-6">
            <div className="flex flex-row gap-2">
              <Link href="/"><strong className="text-4xl">Ylikelatus 2026</strong></Link>
            </div>
            <div className="flex flex-row gap-2">
              <Link href="/contact">Ota yhteyttä</Link>
              <Link href="/login">Kirjaudu</Link>
            </div>
          </header>
        </div>
        {children}
      </body>
    </html>
  );
}
