export type ProductCardProps = {
  product: Product;
};

export type Product = {
  id: number;
  slug: string;
  title: string;
  category: string;
  price: number;
  colors?: string[];
  sizes?: string[];
  coverImage: string;
  gallery?: string[];
  type:string;
  description: string;
};
