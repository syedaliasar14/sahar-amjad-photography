"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { services } from "@/lib/site-data";

export function ServicesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="text-center font-serif text-4xl">Services</h2>
      <Swiper
        modules={[Autoplay]}
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mt-10"
      >
        {services.map((s) => (
          <SwiperSlide key={s.title} className="h-auto!">
            <div className="h-full border border-neutral-300 p-8">
              <h3 className="font-serif text-2xl">{s.title}</h3>
              <p className="mt-3 text-neutral-600">{s.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
