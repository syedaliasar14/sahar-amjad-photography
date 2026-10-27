import Link from "next/link";

export function CtaSection() {
  return (
    <section className="bg-foreground px-6 py-20 text-center text-primary-foreground relative">
      <div className="absolute inset-0 bg-[url('/textures/stone3.png')] opacity-20 bg-cover bg-center rotate-180 bg-no-repeat z-0" />
      <h2 className="font-heading text-5xl text-background relative z-10">Ready to make some magic?</h2>
      <div className="mt-8 flex flex-wrap justify-center gap-4 relative z-10">
        <Link href="/contact" className="btn">
          Get in touch
        </Link>
        <Link href="/about" className="btn-outline">
          My process
        </Link>
      </div>
    </section>
  );
}
