import Link from "next/link";
import { Logo } from "@/components/logo";
import { navLinks } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground/80">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <Logo className="text-primary-foreground" />
        <nav className="flex gap-6 text-sm uppercase tracking-widest">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-accent">
              {l.label}
            </Link>
          ))}
        </nav>
        <p className="text-xs">
          © {new Date().getFullYear()} Sahar Amjad Photography. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
