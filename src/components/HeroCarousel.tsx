"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

const images = [
  {
    src: "/images/Franela2.png",
    alt: "Camper Elegance Collection",
  },
  {
    src: "/images/Franela3.png",
    alt: "Camper Elegance Collection",
  },
  {
    src: "/images/FranelSinFondo.png",
    alt: "Camper Elegance Collection",
  },
  {
    src: "/images/Franela4.png",
    alt: "Camper Elegance Collection",
  },
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  const [current, setCurrent] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrent(emblaApi.selectedScrollSnap());

    emblaApi.on("select", () => {
      setCurrent(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      <div className="w-full h-full" ref={emblaRef}>
        <div className="flex h-full w-full">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative flex h-full flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_30%] xl:flex-[0_0_25%] items-center justify-center px-2"
            >
              <motion.div
                initial={false}
                animate={{
                  clipPath:
                    current !== index
                      ? "inset(15% 0 15% 0 round 2rem)"
                      : "inset(0 0 0 0 round 2rem)",
                }}
                className="h-full w-full overflow-hidden rounded-3xl"
              >
                <div className="relative h-full w-full bg-brand-mocha border border-white/5">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover scale-105"
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 right-8 md:right-12 flex items-center justify-between gap-2 z-10">
        <button
          aria-label="Previous slide"
          onClick={scrollPrev}
          className="rounded-full bg-black/10 p-2 hover:bg-black/20 transition-colors"
        >
          <ChevronLeft className="text-white" />
        </button>
        <button
          aria-label="Next slide"
          onClick={scrollNext}
          className="rounded-full bg-black/10 p-2 hover:bg-black/20 transition-colors"
        >
          <ChevronRight className="text-white" />
        </button>
      </div>

      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
        <div className="flex items-center justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "h-2 cursor-pointer rounded-full transition-all duration-300",
                current === index ? "bg-brand-nylon w-6" : "bg-brand-nylon/30 w-2"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
