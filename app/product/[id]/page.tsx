"use client";

import { use } from "react";
import ProductGallery from "@/component/ui/ProductGallery";
import products from "@/data/products.json";
import { motion } from "framer-motion";
import { p } from "framer-motion/client";

function getProduct(id: number) {
  const product = products.find((p) => p.id === id);
  if (!product) throw new Error("Product not found");
  return product;
}

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const productId = parseInt(id, 10);
  if (isNaN(productId)) throw new Error("Invalid product ID");

  const product = getProduct(productId);

  const images =
    Array.isArray(product.gallery) && product.gallery.length
      ? product.gallery
      : product.gallery
      ? [product.gallery]
      : [];

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ProductGallery gallery={product.gallery ?? []} />

        <motion.div
          className="text-right flex flex-col justify-between"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl md:text-4xl font-bold">{product.title}</h1>
            <p className="mb-6">{product.description}</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <p>قیمت :</p>
              <span className="font-semibold">
                {product.price.toLocaleString()} تومان
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <p>سایز بندی :</p>
              {product.sizes ? (
                <ul className="flex items-center gap-2">
                  {product.sizes.map((s, i) => (
                    <li
                      key={i}
                      className="w-8 h-8 text-black bg-[#E5E1DA] flex items-center justify-center"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>فری سایز هست و سایزبندی ندارد</p>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <p>رنگ بندی :</p>
              {product.colors ? (
                <ul className="flex items-center gap-2">
                  {product.colors.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              ) : (
                <p>رنگ بندی ندارد</p>
              )}
            </div>
          </div>

          <button
            className="w-full hidden md:inline-block text-center px-4 py-2 bg-[#E5E1DA] text-black transition"
            onClick={() =>
              alert("در حال حاضر امکان خرید از طریق سایت وجود ندارد")
            }
          >
            افزودن به سبد خرید
          </button>
        </motion.div>
      </div>
    </section>
  );
}
