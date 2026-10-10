"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const images = [
  "/images/Reloj1.jpg",
  "/images/Modelo1.jpg",
  "/images/Franela4.png",
  "/images/Pefume1.jpg",
  "H",
  "/images/Franela3.png",
  "/images/Franela4.png",
  "/images/Gorra1.jpg",
  "/images/Franela2.png",
  "/images/Perfume2.jpg",
  "/images/FranelSinFondo.png",
  "/images/Franela4.png",
];

const Skiper30 = () => {
  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", resize, { passive: true });
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="w-full bg-[#eee] text-black overflow-hidden relative">
      <div
        ref={gallery}
        className="relative box-border flex h-auto md:h-[175vh] flex-nowrap gap-[4vw] md:gap-[2vw] overflow-hidden bg-white p-[4vw] md:p-[2vw] py-[8vw] md:py-0"
      >
        <Column images={[images[0], images[1], images[2]]} y={y} isMobile={isMobile} />
        <Column images={[images[3], images[4], images[5]]} y={y2} isMobile={isMobile} className="mt-[8vw] md:mt-0" />
        <Column images={[images[6], images[7], images[8]]} y={y3} isMobile={isMobile} className="hidden md:flex" />
        <Column images={[images[9], images[10], images[11]]} y={y4} isMobile={isMobile} className="hidden md:flex" />
      </div>
    </section>
  );
};

type ColumnProps = {
  images: string[];
  y: MotionValue<number>;
  className?: string;
  isMobile: boolean;
};

const Column = ({ images, y, className = "", isMobile }: ColumnProps) => {
  return (
    <motion.div
      className={`relative flex h-auto md:h-full flex-1 md:w-1/4 md:flex-none min-w-0 md:min-w-[250px] flex-col gap-[4vw] md:gap-[2vw] md:first:top-[-45%] md:[&:nth-child(2)]:top-[-95%] md:[&:nth-child(3)]:top-[-45%] md:[&:nth-child(4)]:top-[-75%] will-change-transform transform-gpu ${className}`}
      style={isMobile ? {} : { y }}
    >
      {images.map((src, i) => (
        <div key={i} className="relative w-full flex items-center justify-center overflow-hidden bg-brand-mocha/5 rounded-2xl border border-black/5 aspect-[3/4] md:aspect-auto md:h-full md:min-h-[300px]">
          {src === "H" ? (
            <span className="text-[12rem] font-bold text-gray-300">H</span>
          ) : (
            <Image
              src={`${src}`}
              alt="image"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="pointer-events-none object-cover"
            />
          )}
        </div>
      ))}
    </motion.div>
  );
};

export default Skiper30;
