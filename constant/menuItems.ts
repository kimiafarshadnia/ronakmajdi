import { MenuItem } from "../types";
export const menuItems: MenuItem[] = [
  {
    title: "خانه",
    href: "/",
  },
  {
    title: "محصولات",
    href: "",
    sub: [
      {
        title: "ست ها",
        href: "/category/sets",
      },
      {
        title: "شومیز",
        href: "/category/shomise",
      },
      {
        title: "تی شرت",
        href: "/category/t-shirt",
      },
      {
        title: "شلوار ",
        href: "/category/pants",
      },
      {
        title: "شلوار لی",
        href: "/category/lea",
      },
      {
        title: "دامن",
        href: "/category/skirt",
      },
      {
        title: "کت و کراپ کت ها",
        href: "/category/jackets",
      },
      {
        title: "لباس راحتی",
        href: "/category/sleepwear",
      },
      {
        title: "اکسسوری‌ها",
        href: "",
        sub: [
          { title: "شال و روسری", href: "/category/accessories/scarves" },
          { title: "کمربند", href: "/category/accessories/belt" },
        ],
      },
    ],
  },
  {
    title: "تماس با ما",
    href: "/contactUs",
  },
];
