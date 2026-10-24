"use client";

import Image from "next/image";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Logo } from "@/components/logo";
import { heroImages, img } from "@/lib/site-data";

export function HeroSection() {
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
        {heroImages.map((s, i) => (
          <SwiperSlide key={s}>
            <Image
              src={img(s)}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute inset-0 z-10 bg-black/40" />
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 px-6 text-center">
        
        <h1 className="mt-4 font-heading text-5xl text-background tracking-wider md:text-7xl">
          Sahar Amjad
        </h1>
        <p className="tracking-[0.6em] uppercase text-background">
          Photography
        </p>
      </div>
    </section>
  );
}
