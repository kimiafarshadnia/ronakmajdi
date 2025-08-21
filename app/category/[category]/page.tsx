import { ProductCard } from "@/component";
import products from "@/data/products.json";

function getProducts(category: string) {
  return category ? products.filter((p) => p.category === category) : products;
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const products = getProducts(params.category);

  return (
    <section>
      <div
        className="relative w-full h-[170px] sm:h-[300px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/heroImage.webp')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h2 className="relative z-10 flex items-center justify-center h-full text-3xl font-bold">
          {params.category}
        </h2>
      </div>

      <div className="container mx-auto px-4 py-10">
        {products.length === 0 ? (
        <p>محصولی در این دسته موجود نیست.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      </div>
    </section>
  );
}
