"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "@/lib/site-data";

export function TestimonialsSection() {
  return (
    <section className="bg-neutral-100 py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-4xl">Kind Words</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          loop
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="mt-10 pb-12"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name}>
              <blockquote className="px-4">
                <p className="font-serif text-xl italic text-neutral-700 md:text-2xl">
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
