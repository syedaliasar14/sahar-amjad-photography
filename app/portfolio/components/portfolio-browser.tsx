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
      <section className="bg-primary pt-32 pb-10 text-primary-foreground relative">
        <div className="absolute inset-0 bg-[url('/textures/stone3.png')] opacity-20 bg-cover bg-center bg-no-repeat z-0" />
        <h1 className="text-center font-heading text-5xl md:text-6xl text-background relative z-10">
          Portfolio
        </h1>
        <Swiper
          modules={[FreeMode]}
          freeMode
          slidesPerView="auto"
          spaceBetween={12}
          centerInsufficientSlides
          className="mt-8 px-6 relative z-10"
        >
          {categories.map((c) => (
            <SwiperSlide key={c} className="w-auto!">
              <button
                onClick={() => setActive(c)}
                className={`border px-6 py-1 text-sm uppercase tracking-[0.2em] text-background transition ${active === c
                    ? "rounded-full border-background bg-background text-foreground"
                    : "rounded-full border-primary-foreground/40 hover:border-background"
                  }`}
              >
                {c}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="px-6 pt-16 pb-32 relative z-10">
        <div className="absolute inset-0 bg-[url('/textures/paper.png')] opacity-50 bg-cover bg-center bg-no-repeat z-0" />
        <div className="mx-auto max-w-7xl relative z-10">
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
        </div>
      </section>
    </>
  );
}
