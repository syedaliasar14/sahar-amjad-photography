import Image from "next/image";
import Link from "next/link";

export function AboutBlock({
  title,
  text,
  image,
  imageAlt,
  reverse = false,
  link,
}: {
  title: string;
  text: string;
  image?: string | null;
  imageAlt?: string | null;
  reverse?: boolean;
  link?: { href: string; label: string };
}) {
  return (
    <section className={`relative ${reverse ? "" : "bg-foreground"}`}>
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${
          reverse
            ? "bg-[url('/textures/paper.png')] opacity-50"
            : "bg-[url('/textures/stone3.png')] opacity-20"
        }`}
      />
      <div
        className={`relative z-10 mx-auto grid max-w-5xl items-center gap-10 px-6 py-20 md:grid-cols-3 ${
          reverse ? "" : "text-background"
        }`}
      >
        <div className={reverse ? "md:col-span-2 md:order-2" : "md:col-span-2"}>
          <h2 className={`font-heading text-5xl ${reverse ? "text-primary" : "text-background"}`}>
            {title}
          </h2>
          <hr className={`my-8 max-w-20 ${reverse ? "border-primary" : "border-background"}`} />
          <p className={`mt-4 whitespace-pre-line ${reverse ? "text-foreground/70" : "text-background"}`}>{text}</p>
          {link && link.href && (
            <Link href={link.href} className={`${reverse ? "btn-primary" : "btn-outline"} mt-4 inline-block`}>
              {link.label || "Learn More"}
            </Link>
          )}
        </div>
        <div className="relative aspect-[4/5] w-full">
          {image && (
            <>
              <div className="pointer-events-none absolute inset-0 translate-x-2 -translate-y-2 border-[1.5px] border-accent z-10" />
              <Image
                src={image}
                alt={imageAlt ?? title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
