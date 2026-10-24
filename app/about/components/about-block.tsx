import Image from "next/image";
import { img } from "@/lib/site-data";

export function AboutBlock({
  title,
  text,
  seed,
  reverse = false,
}: {
  title: string;
  text: string;
  seed: string;
  reverse?: boolean;
}) {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2">
      <div className={reverse ? "md:order-2" : ""}>
        <h2 className="        font-heading text-5xl text-primary">{title}</h2>
                <p className="mt-4 text-foreground/70">{text}</p>
      </div>
      <div className="relative aspect-[4/5] w-full">
        <Image
          src={img(seed)}
          alt={title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
