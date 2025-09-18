"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import products from "@/data/products.json";
import { ProductCard } from "./ProductCard";
import { useInView } from "react-intersection-observer";

type Product = (typeof products)[number];
type Props = {
  title?: string;
  bgColor?: string;
  textColor?: string;
  count?: number;
};

export const RandomProduct = ({
  title,
  bgColor,
  textColor,
  count = 4,
}: Props) => {
  const router = useRouter();
  const [randomProducts, setRandomProducts] = useState<Product[]>([]);

  useEffect(() => {
    setRandomProducts(
      [...products].sort(() => Math.random() - 0.5).slice(0, count)
    );
  }, [count]);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const goToProductPage = (id: string) => {
    router.push(`/product/${id}`);
  };

  return (
    <div ref={ref} className={`w-full py-12 ${bgColor}`}>
      <div className="container mx-auto flex flex-col items-center gap-5 px-4">
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
              onClick={() => goToProductPage(product.id)}
              className="group relative cursor-pointer flex flex-col items-center justify-center gap-4 w-full"
            >
              <ProductCard product={product} textColor={textColor} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
