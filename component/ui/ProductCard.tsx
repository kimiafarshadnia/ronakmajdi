"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: {
    id: number;
    slug: string;
    title: string;
    price: number;
    image: string;
  };
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-[#111111] shadow-sm overflow-hidden hover:shadow-md transition p-2">
      <Image
        src={product.image}
        alt={product.title}
        className="w-full sm:h-80 object-cover mb-5"
        width={250}
        height={300}
      />
      <div className="flex flex-col justify-center gap-5 pb-3 md:pb-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs min-[500px]:text-base">
          <h3 className="text-start">{product.title}</h3>
          <p className="text-[#E5E1DA] text-end">
            {product.price.toLocaleString()} تومان
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
