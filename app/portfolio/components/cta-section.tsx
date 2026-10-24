import Link from "next/link";

export function CtaSection() {
  return (
    <section className="bg-primary px-6 py-20 text-center text-primary-foreground">
      <h2 className="font-heading text-5xl">Ready to make some magic?</h2>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/contact"
          className="bg-secondary px-8 py-3 text-sm uppercase tracking-widest text-foreground hover:bg-accent"
        >
          Get in touch
        </Link>
        <Link
          href="/about"
          className="border border-secondary px-8 py-3 text-sm uppercase tracking-widest hover:bg-secondary hover:text-foreground"
        >
          My process
        </Link>
      </div>
    </section>
  );
}
