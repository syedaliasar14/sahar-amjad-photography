"use client";

import Image from "next/image";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { img, portfolioPreviewImages } from "@/lib/site-data";

export function PortfolioSection() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2">
      <div>
        <h2 className="font-serif text-4xl">Portfolio</h2>
        <p className="mt-4 max-w-md text-neutral-600">
          From intimate elopements to bold fashion editorials, explore a
          collection of work crafted with light, emotion, and story.
        </p>
        <Link
          href="/portfolio"
          className="mt-8 inline-block bg-black px-8 py-3 text-sm uppercase tracking-widest text-white hover:bg-neutral-700"
        >
          View Portfolio
        </Link>
      </div>
      <Swiper
        modules={[Autoplay]}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={16}
        className="w-full"
      >
        {portfolioPreviewImages.map((s) => (
          <SwiperSlide key={s}>
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={img(s, 800, 1000)}
                alt="Portfolio sample"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
