"use client";
import Image from "next/image";
import { Product } from "@/types";
import { useRouter } from "next/navigation";
import { usePrice } from "@/hooks/useSalePrice";

type Props = {
  product: Product;
  textColor?: string;
};

export const ProductCard = ({ product, textColor }: Props) => {
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
      className="relative overflow-hidden cursor-pointer transition"
    >
      <Image
        src={product.coverImage || "/placeholder.png"}
        alt={product.title}
        className="w-full h-[230px] sm:h-[330px] object-cover mb-5"
        width={250}
        height={300}
      />
      <div className="flex flex-col justify-center gap-5 pb-3 md:pb-0">
        <div className="flex flex-col sm:flex-row  sm:justify-between gap-2 text-xs min-[500px]:text-base">
          <h3 className={`text-start ${textColor}`}>{product.title}</h3>
          <div className={`flex flex-col gap-2 ${textColor}`}>
            <div className="flex items-center gap-1 text-sm">
              <p
                className={`text-end ${
                  product.sale
                    ? "text-gra-500 line-through decoration-solid decoration-1 decoration-red-500"
                    : ""
                }`}
              >
                {product.price?.toLocaleString()}
              </p>
              <span> تومان</span>
            </div>
            {product.sale ? (
              <div className={`${textColor} flex items-center gap-1 text-sm`}>
                <p>{finalPrice.toLocaleString()}</p>
                <span> تومان</span>
              </div>
            ) : (
              <div className="invisible flex items-center gap-1 text-sm">
                <p>0</p>
                <span>تومان</span>
              </div>
            )}
          </div>
        </div>
        {product.inventory && (
          <span className="absolute top-3 text-sm right-0 rounded-tl-xl rounded-bl-xl flex items-center justify-center bg-gray-400 text-gray-100 px-3 py-px w-fit">
            {"ناموجود"}
          </span>
        )}
        {product.sale && (
          <span className="absolute top-3 text-sm left-0 rounded-tr-xl rounded-br-xl flex items-center justify-center bg-red-600 text-white px-3 py-px w-fit">
            {product.sale}
            {"%"}
          </span>
        )}
      </div>
    </div>
  );
};
