"use client";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import products from "@/data/products.json";
import { MoreDesc, Product } from "@/types";
import { usePrice } from "@/hooks/useSalePrice";
import { ProductGallery, RandomProduct } from "@/component";
import { use } from "react";

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
  const hasDiscount = product.sale > 0;
  const finalPrice = usePrice({
    originalPrice: product.price,
    sale: product.sale,
  });
  const colors = product.colors ?? [];
  const sizes = product.sizes ?? [];
  const features = product.features ?? [];
  const moreDescription: MoreDesc[] = product.moreDescription ?? [];
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
          <div className="flex flex-col gap-5 mb-10">
            <div className="relative flex items-center w-full justify-between">
              <h1 className="text-3xl md:text-4xl">{product.title}</h1>
              {product.inventory === 0 && (
                <span className="text-2xl text-red-600 font-semibold">
                  {"ناموجود"}
                </span>
              )}
              {hasDiscount && (
                <span className="text-sm md:text-base flex items-center justify-center bg-red-600 text-white px-3 py-px w-fit">
                  {product.sale}
                  {"%"}
                </span>
              )}
            </div>
            <p className="mb-6">{product.description}</p>
            <div className="flex flex-col gap-2 text-[#E5E1DA]">
              <div
                className={`flex items-center gap-1  ${
                  hasDiscount
                    ? "text-gray-300 text-sm md:text-base line-through decoration-solid decoration-1 decoration-red-300"
                    : "text-xl md:text-2xl"
                }`}
              >
                <p>{product.price?.toLocaleString()}</p>
                <span> تومان</span>
              </div>
              {hasDiscount && (
                <div className="flex items-center gap-1 text-xl md:text-2xl">
                  <p>{finalPrice.toLocaleString()}</p>
                  <span> تومان</span>
                </div>
              )}
            </div>
            {moreDescription.length > 0 && (
              <div className="flex flex-col gap-2">
                <h3 className="font-medium text-xl">آیتم ها به صورت تکی</h3>
                {moreDescription.map((item: MoreDesc) => (
                  <div key={item.id} className="flex items-center gap-5">
                    <span>
                      {item.title} {":"}
                    </span>
                    <span>{item.price.toLocaleString()} تومان</span>
                  </div>
                ))}
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ">
              <div className="flex flex-col gap-2">
                <span>جنس</span>
                <span className="w-fit h-8 px-4 py-2 border border-[#E5E1DA] text-[#E5E1DA] flex items-center justify-center">
                  {product.type}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span>سایز</span>
                {sizes.length > 0 ? (
                  <ul className="flex flex-col items-start gap-2">
                    {sizes.map((s, i) => (
                      <li
                        key={i}
                        className="w-fit text-sm h-8 px-4 py-2 border border-[#E5E1DA] text-[#E5E1DA] flex items-center justify-center"
                      >
                        {s === 1
                          ? `${s} مناسب سایز ۳۸ تا ۴۲`
                          : `${s} مناسب سایز ۴۲ تا ۴۶`}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="w-fit text-sm h-8 px-4 py-2 border border-[#E5E1DA] text-[#E5E1DA] flex items-center justify-center">
                    فری سایز هست
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <span>رنگ</span>
                <ul className="flex items-center gap-2">
                  {colors.map((c: string) => (
                    <li
                      key={c}
                      className="text-sm h-8 px-4 py-2 border border-[#E5E1DA] text-[#E5E1DA] flex items-center justify-center"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {features.length > 0 && (
              <div className="flex flex-col gap-2">
                <span>توضیحات بیشتر</span>
                <ul className="flex flex-col w-full border">
                  {features.map((f) => (
                    <li
                      key={f.featureId}
                      className="p-2 border-b last:border-b-0"
                    >
                      {f.featureTitle}: {f.featureValue}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <button
            disabled={product.inventory === 0}
            className={`w-full hidden md:inline-block text-center px-4 py-2 transition ${
              product.inventory === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#E5E1DA] text-black cursor-pointer"
            }`}
            onClick={() =>
              product.inventory > 0 &&
              toast.error("در حال حاضر امکان خرید از طریق سایت وجود ندارد")
            }
          >
            افزودن به سبد خرید
          </button>
        </motion.div>
      </div>
      <RandomProduct
        title="محصولات بازدید شده اخیر"
        textColor="text-[#E5E1DA]"
      />
    </section>
  );
}
