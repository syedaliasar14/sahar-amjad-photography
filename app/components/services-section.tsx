"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";

type Service = {
  _key: string;
  title: string | null;
  description: string | null;
  price: string | null;
  footnote: string | null;
  image: { url: string | null; alt: string | null } | null;
};

const navButton =
  "flex size-10 items-center justify-center rounded-full border border-primary text-primary transition-colors hover:bg-primary hover:text-primary-foreground disabled:pointer-events-none disabled:opacity-30";

export function ServicesSection({
  title,
  services,
}: {
  title?: string | null;
  services?: Service[] | null;
}) {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    <section className="px-6 py-20 relative">
      <div className="absolute inset-0 bg-[url('/textures/paper.png')] opacity-50 bg-cover bg-center bg-no-repeat -z-10" />
      <div className="mx-auto max-w-7xl ">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-5xl text-primary">{title ?? "Services"}</h2>
          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Previous service"
              className={navButton}
              onClick={() => swiper?.slidePrev()}
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Next service"
              className={navButton}
              onClick={() => swiper?.slideNext()}
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
        <Swiper
          onSwiper={(s) => {
            setSwiper(s);
          }}
          spaceBetween={24}
          loop
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mt-10"
        >
          {(services ?? []).map((s) => (
            <SwiperSlide key={s._key} className="h-auto!">
              <div className="flex h-full flex-col border border-background bg-card shadow-md relative">
                <div className="absolute inset-0 bg-[url('/textures/paper-grain.png')] opacity-20 bg-cover bg-center bg-no-repeat z-0" />
                <div className="relative aspect-[4/3] w-full relative z-10">
                  {s.image?.url && (
                    <Image
                      src={s.image.url}
                      alt={s.image.alt ?? s.title ?? ""}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-8 relative z-10">
                  <h3 className="font-heading text-3xl text-primary">{s.title}</h3>
                  <p className="mt-3 flex-1 whitespace-pre-line text-foreground">{s.description}</p>
                  <p className="mt-6 whitespace-pre-line uppercase tracking-[0.2em] text-primary">
                    {s.price}
                  </p>
                  {s.footnote && (
                    <p className="mt-2 text-xs text-foreground/70">{s.footnote}</p>
                  )}
                  <Link href="/contact" className="btn-primary w-max tracking-[0.2em] mt-6">
                    Book Now
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
