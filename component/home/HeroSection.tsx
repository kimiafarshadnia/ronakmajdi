"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative w-full h-screen">
      <div className="absolute inset-0">
        <Image
          src="/images/hero2.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative z-10 flex items-center justify-end h-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-black/50 p-8 md:p-12 text-center w-full md:w-1/2 h-full flex flex-col items-center justify-center"
        >
          <div className="flex items-center justify-center mb-4 h-[150px] md:h-[180px]">
            <Image
              src="/images/logo-white.svg"
              alt="Logo"
              width={200}
              height={200}
              priority
              className="object-contain"
            />
          </div>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white text-2xl md:text-3xl font-semibold mb-3"
          >
            زیبایی در سادگی متولد می‌شود
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gray-200 text-base md:text-lg leading-relaxed px-4 md:px-0"
          >
            روناک مجدی، تلفیقی از طراحی معاصر و اصالت؛ لباس‌هایی برای آنکه در هر
            لحظه خاص بدرخشید
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};