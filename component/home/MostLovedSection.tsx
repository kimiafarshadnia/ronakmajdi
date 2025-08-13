"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/Button";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const sampleProducts: Product[] = [
  {
    id: 1,
    name: "کفتان تابنا",
    price: 1250,
    image: "/images/product1.jpg",
  },
  {
    id: 2,
    name: "کفتان تابنا",
    price: 890,
    image: "/images/product2.jpg",
  },
  {
    id: 3,
    name: "کفتان تابنا",
    price: 4200,
    image: "/images/product3.jpg",
  },
];

export function MostLovedSection({
  products = sampleProducts,
}: {
  products?: Product[];
}) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="w-full">
      <div className="container mx-auto px-4">
        {/* عنوان */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif tracking-wide text-gold">
            محبوب‌ترین‌ها
          </h2>
          <p className="mt-2 text-gray-400 font-light">
            محبوب‌ترین‌ها از نگاه مشتریان
          </p>
        </div>

        {/* لیست محصولات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-[#E5E1DA] overflow-hidden shadow-md border border-[#E5E1DA] hover:border-gold transition-all duration-300"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative w-full h-96 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {hoveredId === product.id && (
                  <div className="absolute inset-0 bg-[#E5E1DA]/50 backdrop-blur-sm"></div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl">{product.name}</h3>
                <p className="mt-2 text-gold font-light">{`${
                  product.price + " " + "ت"
                }`}</p>
              </div>

              {hoveredId === product.id && (
                <div className="absolute inset-x-0 top-2/5 flex justify-center">
                  <Button className="px-6 py-3  font-semibold shadow-lg transition-colors duration-300">
                    مشاهده محصول
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
