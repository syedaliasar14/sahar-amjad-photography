"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { navLinks } from "@/lib/site-data";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" onClick={() => setOpen(false)}>
          <Logo />
        </Link>
        <nav className="hidden gap-8 text-sm uppercase tracking-widest md:flex">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:opacity-70">
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 bg-black/90 px-6 py-6 text-sm uppercase tracking-widest md:hidden">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
