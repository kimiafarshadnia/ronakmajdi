"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import products from "@/data/products.json";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";

type Props = {
  title?: string;
  bgColor?: string;
  textColor?: string;
};

export const RandomProduct = ({ title, bgColor, textColor }: Props) => {
  const router = useRouter();
  const [randomProducts, setRandomProducts] = useState<typeof products>([]);

  useEffect(() => {
    setRandomProducts(
      [...products].sort(() => Math.random() - 0.5).slice(0, 4)
    );
  }, [products]);

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

  const goToProductPage = (id: string) => {
    router.push(`/product/${id}`);
  };
  return (
    <div ref={ref} className={`w-full py-12 ${bgColor}`}>
      <div className="container mx-auto w-full flex flex-col items-center gap-5">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className={`text-center text-xl sm:text-2xl mb-5 ${textColor}`}
          >
            {title}
          </motion.h2>
        )}

        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center">
          {randomProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              variants={itemVariants}
              onClick={() => goToProductPage(product.id)}
              className="group relative cursor-pointer overflow-hidden transition-all duration-300 flex flex-col items-center justify-center gap-4 w-full"
            >
              {/* <div className="relative w-full h-60 md:h-72 lg:h-96 overflow-hidden box-border">
                  <Image
                    src={product.coverImage || "/placeholder.png"}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div
                  className={`flex flex-col items-center gap-1 text-sm ${textColor}`}
                >
                  <span className="text-sm sm:text-base font-medium">
                    {product.title}
                  </span>
                  <span className="font-light">{product.price?.toLocaleString()} تومان</span>
                </div> */}
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
