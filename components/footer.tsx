import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-primary text-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row text-center md:text-left">
        <div>
          <Image
            src="/logo-beige.svg"
            alt="Sahar Amjad Photography"
            className="mx-auto md:mx-0"
            width={100}
            height={100}
          />
          <h2 className="text-xl font-heading mt-2">Sahar Amjad Photography</h2>
          <p className="text-sm font-thin">
            Let's make some magic
          </p>
        </div>
        <nav className="flex flex-wrap gap-6 text-sm uppercase tracking-widest md:self-start">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-accent">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
      <p className="text-xs text-center mb-4">
        © {new Date().getFullYear()} Sahar Amjad Photography. All rights reserved.
      </p>
    </footer>
  );
}
