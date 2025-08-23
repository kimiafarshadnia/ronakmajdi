"use client"; // صفحه client component شود

import products from "@/data/products.json";
import Image from "next/image";
import { use } from "react";

function getProduct(id: number) {
  const product = products.find((p) => p.id === id);
  if (!product) throw new Error("Product not found");
  return product;
}

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params); // unwrap کردن Promise
  const productId = parseInt(id, 10);
  if (isNaN(productId)) throw new Error("Invalid product ID");

  const product = getProduct(productId);

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <Image
          src={product.image}
          alt={product.title}
          className="w-full rounded-lg shadow-md"
          width={500}
          height={500}
        />

        <div className="text-right">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl font-semibold mb-6">
            {product.price.toLocaleString()} تومان
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </section>
  );
}