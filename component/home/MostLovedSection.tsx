"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const products = [
  { id: 1, title: "کت دارسا", image: "/images/product4.webp", price: "1,200" },
  { id: 2, title: "کت دارسا", image: "/images/product1.webp", price: "1,200" },
  { id: 3, title: "کت دارسا", image: "/images/product2.webp", price: "1,200" },
  { id: 4, title: "کت دارسا", image: "/images/product3.webp", price: "1,200" },
];

export const MostLovedSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <div ref={ref} className="w-full bg-white py-12">
      <div className="container mx-auto px-4 w-full flex flex-col items-center gap-5">
        <h2 className="text-center text-3xl sm:text-4xl mb-5 text-black">محبوب ترین ها</h2>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 place-items-center">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={itemVariants}
              className="group relative cursor-pointer overflow-hidden transition-all duration-300 flex flex-col items-center justify-center gap-4 w-full"
            >
              <div className="relative w-full h-60 md:h-72 lg:h-96 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col items-center gap-1 text-black">
                <span className="text-sm sm:text-base font-medium">
                  {product.title}
                </span>
                <span className="font-light">{`${product.price} ت`}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};