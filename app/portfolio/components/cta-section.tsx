import Link from "next/link";

export function CtaSection() {
  return (
    <section className="bg-neutral-900 px-6 py-20 text-center text-white">
      <h2 className="font-serif text-4xl">Ready to make some magic?</h2>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/contact"
          className="bg-white px-8 py-3 text-sm uppercase tracking-widest text-black hover:bg-neutral-200"
        >
          Get in touch
        </Link>
        <Link
          href="/about"
          className="border border-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black"
        >
          My process
        </Link>
      </div>
    </section>
  );
}
