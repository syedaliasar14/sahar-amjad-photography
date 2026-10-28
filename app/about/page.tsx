import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/live";
import { ABOUT_PAGE_QUERY } from "@/sanity/queries/about-page";
import { AboutBlock } from "./components/about-block";

export const metadata: Metadata = { title: "About | Sahar Amjad Photography" };

export default async function AboutPage() {
  const { data } = await sanityFetch({ query: ABOUT_PAGE_QUERY });

  return (
    <>
      <div className="relative h-24 bg-primary">
        <div className="absolute inset-0 bg-[url('/textures/stone3.png')] opacity-20 bg-cover bg-center bg-no-repeat" />
      </div>
      {data?.sections?.map((s, i) => (
        <AboutBlock
          key={s._key}
          title={s.title ?? ""}
          text={s.text ?? ""}
          image={s.image?.url}
          imageAlt={s.image?.alt}
          link={
            s.buttonLink
              ? { href: s.buttonLink, label: s.buttonLabel ?? "" }
              : undefined
          }
          reverse={i % 2 === 1}
        />
      ))}
    </>
  );
}
