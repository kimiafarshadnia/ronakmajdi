"use client";

import { use } from "react";
import { motion } from "framer-motion";
import products from "@/data/products.json";
import { ProductGallery, RandomProduct } from "@/component";
import { Product } from "@/types";
import toast from "react-hot-toast";

function getProduct(id: string) {
  const product = products.find((p: Product) => p.id.toString() === id);
  if (!product) throw new Error("Product not found");
  return product;
}

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  if (!id) throw new Error("Invalid product ID");

  const product = getProduct(id);

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
        <ProductGallery gallery={product.gallery ?? []} />
        <motion.div
          className="text-right flex flex-col justify-between"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl md:text-4xl">{product.title}</h1>
            <p className="mb-6">{product.description}</p>

            <span className="font-semibold text-2xl">
              {product.price.toLocaleString()} تومان
            </span>

            <div className="flex flex-col gap-2">
              <p>سایز</p>
              {product.sizes ? (
                <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-2">
                  {product.sizes.map((s, i) => (
                    <li
                      key={i}
                      className="h-8 px-4 py-2 border border-[#E5E1DA] text-[#E5E1DA] flex items-center justify-center"
                    >
                      {s === 1
                        ? `${s} مناسب سایز ۳۸ تا  ۴۲`
                        : `${s} مناسب سایز ۴۲ تا ۴۶`}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>فری سایز هست</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <p>رنگ</p>
              <ul className="flex items-center gap-2">
                {product.colors.map((c: string) => (
                  <li key={c} className="h-8 px-4 py-2 border border-[#E5E1DA] text-[#E5E1DA] flex items-center justify-center">{c}</li>
                ))}
              </ul>
            </div>
          </div>

          <button
            className="cursor-pointer w-full hidden md:inline-block text-center px-4 py-2 bg-[#E5E1DA] text-black transition"
            onClick={() =>
              toast.error("در حال حاضر امکان خرید از طریق سایت وجود ندارد")
            }
          >
            افزودن به سبد خرید
          </button>
        </motion.div>
      </div>
      <RandomProduct title="محصولات بازدید شده اخیر" />
    </section>
  );
}
