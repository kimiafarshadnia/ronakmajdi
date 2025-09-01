export type Product = {
  id: number;
  slug: string;
  title: string;
  category: string;
  price: number;
  colors?: string[];
  sizes?: number[];
  coverImage: string;
  gallery?: string[];
  type:string;
  description: string;
};
