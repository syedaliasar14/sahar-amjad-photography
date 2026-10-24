"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { services } from "@/lib/site-data";

export function ServicesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="text-center font-heading text-5xl text-primary">Services</h2>
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
            <div className="h-full             border border-primary/30 bg-card p-8">
                          <h3 className="font-heading text-3xl text-primary">{s.title}</h3>
                          <p className="mt-3 text-foreground/70">{s.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
