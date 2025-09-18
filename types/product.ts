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
  inventory: number;
  features?: Feature[];
  sale: number;
};

export type MoreDesc = {
  id: string;
  title: string;
  price: number;
};

export type Feature = {
  featureId: string;
  featureTitle: string;
  featureValue: string;
};
