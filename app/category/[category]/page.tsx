"use client";

import { useState, use } from "react";
import { Pagination, ProductCard } from "@/component";
import productsData from "@/data/products.json";

function getProducts(category: string) {
  return category ? productsData.filter((p) => p.category === category) : productsData;
}

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = use(params);

  const allProducts = getProducts(category);

  const itemsPerPage = 8; 
  const totalPages = Math.ceil(allProducts.length / itemsPerPage);

  const [page, setPage] = useState(1);

  const displayedProducts = allProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <section>
      <div
        className="relative w-full h-[170px] sm:h-[300px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/heroImage.webp')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h2 className="relative z-10 flex items-center justify-center h-full text-3xl font-bold">
          {category}
        </h2>
      </div>

      <div className="container mx-auto px-4 py-10">
        {displayedProducts.length === 0 ? (
          <p>محصولی در این دسته موجود نیست.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-10 flex justify-center">
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={(newPage) => setPage(newPage)}
              siblingCount={1}
              className="justify-center"
            />
          </div>
        )}
      </div>
    </section>
  );
}