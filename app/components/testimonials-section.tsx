"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "@/lib/site-data";

export function TestimonialsSection() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-heading text-5xl text-primary">Kind Words</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          loop
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="mt-10 pb-12 [--swiper-theme-color:var(--primary)]"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name}>
              <blockquote className="px-4">
                <p className="font-heading text-2xl text-foreground md:text-3xl">
                  “{t.text}”
                </p>
                <footer className="mt-6 text-sm uppercase tracking-widest">
                  {t.name}
                </footer>
              </blockquote>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
