import type { Metadata } from "next";
import { Instrument_Serif, Fira_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400"
});

const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Sahar Amjad Photography | Professional Photographer",
  description: "Professional photographer specializing in weddings, portraits, and lifestyle photography. Capturing life's beautiful moments with artistic vision and technical excellence.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
  return (
      <html lang="en" className={`${instrumentSerif.variable} ${firaSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
