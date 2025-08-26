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
        title: "شلوار ",
        href: "/category/pants",
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
        title: "اکسسوری‌ها",
        href: "/category/accessories",
        sub: [{ title: "شال و روسری", href: "/category/accessories/scarves" }],
      },
    ],
  },
  {
    title: "تماس با ما",
    href: "/contactUs",
  },
];
