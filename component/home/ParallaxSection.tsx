"use client";

import { Parallax } from "react-scroll-parallax";

export const ParallaxSection = () => {
  return (
    <section className="w-full relative h-[400px] overflow-hidden">
      {/* بک‌گراند (پشت همه) */}
      <Parallax speed={-20} className="absolute -inset-20 -z-10">
        <div className="relative w-full h-full">
          <img
            src="/images/shoaes6.jpg"
            alt="Background"
            className="absolute w-full h-full object-cover"
          />
        </div>
      </Parallax>

      {/* لایه‌ی تاریک روی بک‌گراند */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* لوگو (جلو) */}
      <Parallax speed={10} className="relative z-10 h-full">
        <div className="h-full flex items-center justify-center">
          <img
            src="/images/completeLogo.svg"
            alt="Logo"
            className="max-w-[260px] w-[55vw] h-auto drop-shadow-[0_0_18px_rgba(212,175,55,0.55)]"
          />
        </div>
      </Parallax>
    </section>
  );
};