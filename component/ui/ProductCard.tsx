"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";

type Props = {
  product: Product;
};

export const ProductCard = ({ product }: Props) => {
  return (
    <div className="bg-[#111111] shadow-sm overflow-hidden hover:shadow-md transition p-2">
      <Image
        src={product.coverImage}
        alt={product.title}
        className="w-full sm:h-80 object-cover mb-5"
        width={250}
        height={300}
      />
      <div className="flex flex-col justify-center gap-5 pb-3 md:pb-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs min-[500px]:text-base">
          <h3 className="text-start">{product.title}</h3>
          <p className="text-[#E5E1DA] text-end">
            {product.price} تومان
          </p>
        </div>
        <Link
          href={`/product/${product.id}`}
          className="w-full hidden md:inline-block text-center text-white bg-black px-4 py-2 hover:bg-[#E5E1DA] hover:text-black transition"
        >
          مشاهده جزئیات
        </Link>
      </div>
    </div>
  );
};
