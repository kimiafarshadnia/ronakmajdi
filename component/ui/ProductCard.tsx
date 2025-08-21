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
    <div className="bg-[#111111] shadow-sm overflow-hidden hover:shadow-md transition ">
      <Image
        src={product.image}
        alt={product.title}
        className="w-full sm:h-80 object-cover"
        width={250}
        height={300}
      />
      <div className="p-4 text-right">
        <h3 className="font-semibold mb-2">{product.title}</h3>
        <p className="text-gray-600 mb-2">
          {product.price.toLocaleString()} تومان
        </p>
        <Link
          href={`/product/${product.id}`}
          className="inline-block text-white bg-black px-4 py-2 rounded hover:bg-gray-800 transition"
        >
          مشاهده جزئیات
        </Link>
      </div>
    </div>
  );
};
