"use client";

import Image from "next/image";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { img, portfolioPreviewImages } from "@/lib/site-data";

export function PortfolioSection() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 z-0 bg-[url('/textures/stone2.png')] opacity-20 bg-cover bg-center bg-no-repeat" />
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center mb-20 z-10 relative">
        <h2 className="font-heading text-5xl text-primary mb-6">Heartfelt, Polished and Timeless</h2>
        <p className="text-foreground/70 tracking-wide leading-[1.8]">
          From intimate elopements and heartfelt portraits to bold fashion
          editorials and polished product photography, explore a collection of
          work crafted with light, emotion, and story. Every session is
          approached with care and an eye for the details that make each moment,
          person, and brand feel authentically yours.
        </p>
      </div>
      <Swiper
        modules={[Autoplay]}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={16}
        slidesPerView={1.4}
        centeredSlides
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="mt-10 w-full"
      >
        {portfolioPreviewImages.map((s) => (
          <SwiperSlide key={s}>
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={img(s)}
                alt="Portfolio sample"
                fill
                sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 90vw"
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-10 text-center">
        <Link href="/portfolio" className="btn-primary z-10 relative">
          View Portfolio
        </Link>
      </div>
    </section>
  );
}