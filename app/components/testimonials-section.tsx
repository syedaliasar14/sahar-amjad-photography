"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

type Testimonial = { _key: string; name: string | null; text: string | null };

export function TestimonialsSection({
  testimonials,
}: {
  testimonials?: Testimonial[] | null;
}) {
  if (!testimonials?.length) return null;

  return (
    <section className="py-20 relative bg-foreground">
      <div className="absolute inset-0 z-0 bg-[url('/textures/stone3.png')] opacity-20 bg-cover bg-center bg-no-repeat" />
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="pt-6 pb-16 [--swiper-pagination-bottom:0px] [--swiper-theme-color:var(--primary)]"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t._key} className="!h-auto">
              <blockquote className="relative mx-4 py-14 text-background md:px-14 z-10">
                <div className="bg-primary p-4 relative shadow-lg border border-background z-10">
                  <div className="absolute inset-0 bg-[url('/textures/stone3.png')] opacity-20 pointer-events-none z-0" />
                  <p className="font-heading text-xl md:text-2xl italic relative z-10">"{t.text}"</p>
                  <footer className="mt-6 text-sm uppercase tracking-widest relative z-10">
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
