"use client";

import Link from "next/link";
import { useState } from "react";
import { AlignJustify } from "lucide-react";
import { Logo } from "@/components/logo";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/lib/site-data";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground">
      <div className="mx-auto flex items-center justify-between px-6 py-2">
        <Link href="/">
          <Logo />
        </Link>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button aria-label="Open menu" className="hover:opacity-70">
              <AlignJustify strokeWidth={1.5} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <SheetDescription className="sr-only">Site pages</SheetDescription>
            <nav className="mt-12 flex flex-col gap-6 px-6 text-sm uppercase tracking-widest">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-primary"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
