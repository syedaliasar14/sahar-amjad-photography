"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "@/lib/site-data";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 z-0 bg-[url('/textures/stone.png')] opacity-80 bg-cover bg-center bg-no-repeat" />
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="pt-6 pb-16 [--swiper-pagination-bottom:0px] [--swiper-theme-color:var(--primary)]"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name} className="!h-auto">
              <blockquote className="relative mx-4 py-14 text-background md:px-14">
                <div className="bg-primary p-4 relative shadow-lg border border-background">
                  <div className="absolute inset-0 bg-[url('/textures/stone.png')] opacity-10 pointer-events-none" />
                  <p className="font-heading text-xl md:text-2xl italic">"{t.text}"</p>
                  <footer className="mt-6 text-sm uppercase tracking-widest">
                    - {t.name}
                  </footer>
                </div>
              </blockquote>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
