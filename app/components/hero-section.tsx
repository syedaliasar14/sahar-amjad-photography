"use client";

import Image from "next/image";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import Link from "next/link";

type HeroImage = { url: string | null; alt: string | null };

export function HeroSection({ images }: { images?: HeroImage[] | null }) {
  const slides = (images ?? []).filter((s) => s.url);
  return (
    <section className="relative h-screen min-h-[600px] w-full text-white">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={1200}
        allowTouchMove={false}
        className="absolute inset-0 h-full w-full"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={`${s.url}-${i}`}>
            <Image
              src={s.url!}
              alt={s.alt ?? ""}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute inset-0 z-10 bg-black/30" />
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 px-6 text-center">

        <Image
          src="/logo-beige.svg"
          alt="Sahar Amjad Photography"
          width={144} height={64}
          priority
        />
        <h1 className="mt-4 font-heading text-6xl text-background tracking-wider md:text-7xl">
          Sahar Amjad
        </h1>
        <p className="tracking-[1em] md:text-lg uppercase text-background">
          Photography
        </p>

        <hr className="w-full max-w-md border-t border-background my-12" />

        <div className="flex flex-col md:flex-row gap-8">
          <Link href="/contact" className="btn-outline">
            Contact
          </Link>
          <Link href="/portfolio" className="btn-outline">
            Portfolio
          </Link>
        </div>

      </div>
    </section>
  );
}
