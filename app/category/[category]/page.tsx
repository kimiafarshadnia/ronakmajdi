"use client";

import { use, useState } from "react";
import { motion } from "framer-motion";
import { Pagination, ProductCard } from "@/component";
import productsData from "@/data/products.json";

const categoryBackgrounds: Record<string, string> = {
  pants: "/images/shalvar.jpeg",
  shomise: "/images/clothes.jpeg",
  sets: "/images/heroImage.webp",
  jackets:"/images/manto.jpg"
  // بقیه دسته‌ها رو اضافه کن
};

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

  const containerVariants = {
    hidden: {},
    visible: { 
      transition: { staggerChildren: 0.05 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const backgroundImage = categoryBackgrounds[category] || "/images/heroImage.webp";

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
          <p>محصولی در این دسته موجود نیست.</p>
        ) : (
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={page} // page change triggers animation
          >
            {displayedProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
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