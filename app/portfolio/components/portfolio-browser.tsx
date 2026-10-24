"use client";

import Image from "next/image";
import { useState } from "react";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { categories, categoryPhotos, img, type Category } from "@/lib/site-data";

export function PortfolioBrowser() {
  const [active, setActive] = useState<Category>(categories[0]);

  return (
    <>
      <section className="bg-primary pt-32 pb-10 text-primary-foreground">
        <h1 className="text-center font-heading text-5xl md:text-6xl">
          Portfolio
        </h1>
        <Swiper
          modules={[FreeMode]}
          freeMode
          slidesPerView="auto"
          spaceBetween={12}
          centerInsufficientSlides
          className="mt-8 px-6"
        >
          {categories.map((c) => (
            <SwiperSlide key={c} className="w-auto!">
              <button
                onClick={() => setActive(c)}
                className={`border px-6 py-2 text-sm uppercase tracking-widest transition ${
                  active === c
                    ? "border-secondary bg-secondary text-foreground"
                    : "border-primary-foreground/40 hover:border-secondary"
                }`}
              >
                {c}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-8 font-heading text-4xl text-primary">{active}</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {categoryPhotos[active].map((seed) => (
            <div key={seed} className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={img(seed)}
                alt={`${active} photo`}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
