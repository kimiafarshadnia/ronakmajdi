"use client";

import { use, useState } from "react";
import { motion } from "framer-motion";
import productsData from "@/data/products.json";
import { NoItem, Pagination, ProductCard } from "@/component";

const categoryBackgrounds: Record<string, string> = {
  pants: "/images/posters/pants.jpg",
  shomise: "/images/posters/clothes.jpeg",
  sets: "/images/posters/heroImage.webp",
  jackets: "/images/posters/manto.jpg",
  belt: "/images/posters/heroImage.webp",
  tshirt: "/images/posters/tshirt.jpg",
};

function getProducts(categoryPath: string[]) {
  const lastCategory = categoryPath[categoryPath.length - 1];
  return productsData.filter((p) => p.category === lastCategory);
}

export default function CategoryPage({
  params,
}: {
  params: Promise<{ category: string[] }>;
}) {
  const { category } = use(params);
  const allProducts = getProducts(category);

  const itemsPerPage = 8;
  const totalPages = Math.ceil(allProducts.length / itemsPerPage);

  const [page, setPage] = useState(1);

  const displayedProducts = allProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const lastCategory = category[category.length - 1];
  const backgroundImage =
    categoryBackgrounds[lastCategory] || "/images/heroImage.webp";
  return (
    <section>
      <motion.div
        className="relative w-full h-[170px] sm:h-[250px] bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h2 className="relative z-10 flex items-center justify-center h-full text-3xl font-bold">
          {category}
        </h2>
      </motion.div>

      <div className="container mx-auto px-4 py-10">
        {displayedProducts.length === 0 ? (
          <NoItem />
        ) : (
          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4"
          >
            {displayedProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
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
