"use client";
import Image from "next/image";
import { Product } from "@/types";
import { useRouter } from "next/navigation";
import { usePrice } from "@/hooks/useSalePrice";

type Props = {
  product: Product;
};

export const ProductCard = ({ product }: Props) => {
  const router = useRouter();
  const finalPrice = usePrice({
    originalPrice: product.price,
    sale: product.sale,
  });
  const goToProductPage = (id: string) => {
    router.push(`/product/${id}`);
  };
  return (
    <div
      onClick={() => goToProductPage(product.id)}
      className="relative overflow-hidden hover:shadow-md transition p-2"
    >
      <Image
        src={product.coverImage || "/placeholder.png"}
        alt={product.title}
        className="w-full sm:h-80 object-cover mb-5"
        width={250}
        height={300}
      />
      <div className="flex flex-col justify-center gap-5 pb-3 md:pb-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs min-[500px]:text-base">
          <h3 className="text-start">{product.title}</h3>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1 text-sm">
              <p
                className={`text-[#E5E1DA] text-end ${
                  product.sale
                    ? "text-gray-300 line-through decoration-solid decoration-1 decoration-gray-100"
                    : ""
                }`}
              >
                {product.price?.toLocaleString()}
              </p>
              <span> تومان</span>
            </div>
            {product.sale && (
              <div className="flex items-center gap-1 text-sm">
                <p className="text-[#E5E1DA]">{finalPrice.toLocaleString()}</p>
                <span> تومان</span>
              </div>
            )}
          </div>
        </div>
        {product.sale && (
          <span className="absolute top-3 left-2 rounded-tr-xl rounded-br-xl flex items-center justify-center bg-red-600 text-white px-3 py-px w-fit">
            {product.sale}
            {"%"}
          </span>
        )}
      </div>
    </div>
  );
};
