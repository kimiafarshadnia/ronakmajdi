import Image from "next/image";
import { Button } from "../ui/Button";

const products = [
  { id: 1, title: "کت دارسا", image: "/images/product4.jpg", price: "1,200" },
  { id: 2, title: "کت دارسا", image: "/images/product1.jpg", price: "1,200" },
  { id: 3, title: "کت دارسا", image: "/images/product2.jpg", price: "1,200" },
  { id: 4, title: "کت دارسا", image: "/images/product3.jpg", price: "1,200" },
];

export const NewCollection = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 w-full flex flex-col items-center gap-5">
        <h2 className="text-center text-3xl mb-5">کالکشن نو ، استایل نو</h2>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 place-items-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative cursor-pointer overflow-hidden transition-all duration-300 flex flex-col items-start justify-center gap-4 w-full"
            >
              <div className="relative w-full h-96 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm sm:text-base">{product.title}</span>
                <span className="font-light text-zinc-700">{`${
                  product.price + " " + "ت"
                }`}</span>
              </div>
            </div>
          ))}
        </div>
        <Button className="mt-8">الان بخر</Button>
      </div>
    </div>
  );
};
