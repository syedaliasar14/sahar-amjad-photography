"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AlignJustify } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/lib/site-data";
import { usePathname } from "next/navigation";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  if (pathname.startsWith("/studio")) return null;

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground">
      <div className="mx-auto flex items-center justify-between px-4 py-2">
        <Link href="/" className="flex items-center gap-2 font-heading tracking-wide text-background">
          <Image
            src="/logo-beige.svg"
            alt="Sahar Amjad Photography"
            width={48}
            height={26}
            priority
          />
          <span className="">Sahar Amjad Photography</span>
        </Link>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button aria-label="Open menu" className="hover:opacity-70">
              <AlignJustify strokeWidth={1.2} className="text-background" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="">
            <div className="absolute inset-0 bg-[url('/textures/paper-grain.png')] opacity-30 pointer-events-none z-0" />
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <SheetDescription className="sr-only">Site pages</SheetDescription>
            <div className="flex flex-col items-center gap-2 mt-12 relative z-10">
              <Image
                src="/logo-black.svg"
                alt="Sahar Amjad Photography"
                width={100} height={100}
              />
              <h2 className="text-xl font-heading mt-2">Sahar Amjad Photography</h2>
            </div>
            <nav className="mt-8 flex flex-col gap-6 px-6 text-sm uppercase tracking-[0.3em] relative z-10">
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
            <SheetFooter className="mt-auto self-center text-balance text-center px-6 pb-6 text-xs relative z-10">
              © 2026 Sahar Amjad Photography. All rights reserved.
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
