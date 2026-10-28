"use client";

import Image from "next/image";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type PortfolioImage = { url: string | null; alt: string | null };

export function PortfolioSection({
  title,
  text,
  images,
}: {
  title?: string | null;
  text?: string | null;
  images?: PortfolioImage[] | null;
}) {
  const slides = (images ?? []).filter((s) => s.url);

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 z-0 bg-[url('/textures/stone2.png')] opacity-20 bg-cover bg-center bg-no-repeat" />
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center mb-20 z-10 relative">
        {title && <h2 className="font-heading text-5xl text-primary mb-6">{title}</h2>}
        {text && (
          <p className="whitespace-pre-line text-foreground/70 tracking-wide leading-[1.8]">
            {text}
          </p>
        )}
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
        className="mt-10 w-full pt-2 pr-2"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={`${s.url}-${i}`} className="group">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={s.url!}
                alt={s.alt ?? "Portfolio sample"}
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