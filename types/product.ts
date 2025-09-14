export type Product = {
  id: string;
  slug: string;
  title: string;
  category: string;
  price: number;
  colors: string[];
  sizes?: number | number[];
  coverImage: string;
  gallery?: string[];
  type: string;
  description: string;
  moreDescription?: MoreDesc[];
  sale?: number;
};

export type MoreDesc = {
  id: string;
  title: string;
  price: number;
};
