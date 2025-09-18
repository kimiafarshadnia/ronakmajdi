"use client";

import { Parallax } from "react-scroll-parallax";
import Image from "next/image";

export const ParallaxSection = () => {
  return (
    <section className="w-full relative h-[300px] md:h-[400px] overflow-hidden">
      <Parallax speed={-20} className="absolute -inset-20 -z-10">
        <div className="relative w-full h-full">
          <Image
            src="/images/parallax.webp"
            alt="Background"
            fill
            priority
            className="object-cover"
          />
        </div>
      </Parallax>
      <div className="absolute inset-0 bg-black/50 z-0" />
      <Parallax
        speed={10}
        className="relative z-10 h-full w-full flex justify-center items-center"
      >
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex items-center justify-center h-36 md:h-44">
            <Image
              src="/images/logo-white.svg"
              alt="Logo"
              width={200}
              height={200}
              priority
              className="object-contain"
            />
          </div>
          <h3 className="text-xl sm:text-2xl px-4 text-center text-white">
            خلق شده برای زیبایی جاودانه
          </h3>
        </div>
      </Parallax>
    </section>
  );
};
