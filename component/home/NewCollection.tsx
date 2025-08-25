"use client";

import Image from "next/image";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const products = [
  { id: 1, title: "کت دارسا", image: "/images/product2.webp", price: "1,200" },
  { id: 2, title: "کت دارسا", image: "/images/seaDress.webp", price: "1,200" },
  { id: 3, title: "کت دارسا", image: "/images/product2.webp", price: "1,200" },
  { id: 4, title: "کت دارسا", image: "/images/daman.webp", price: "1,200" },
];

export const NewCollection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref} className="w-full bg-[#E5E1DA] py-12">
      <div className="container mx-auto px-4 w-full flex flex-col items-center gap-5">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center text-3xl sm:text-4xl mb-5 text-black"
        >
          کالکشن نو ، استایل نو
        </motion.h2>

        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 place-items-center">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Button className="mt-8">الان بخر</Button>
        </motion.div>
      </div>
    </div>
  );
};
