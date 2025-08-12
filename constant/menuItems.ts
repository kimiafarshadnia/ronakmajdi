import { MenuItem } from "../types";
export const menuItems: MenuItem[] = [
  {
    title: "خانه",
    href: "/",
  },
  {
    title: "محصولات",
    href: "/brands/women",
    sub: [
      {
        title: "لباس مجلسی",
        href: "/brands/women/dresses",
        sub: [
          { title: "پیراهن شب", href: "/brands/women/dresses/evening" },
          { title: "لباس کلوش", href: "/brands/women/dresses/flare" },
          { title: "مجلسی کوتاه", href: "/brands/women/dresses/short" },
        ],
      },
      {
        title: "تاپ و بلوز",
        href: "/brands/women/tops",
        sub: [
          { title: "تاپ اسپرت", href: "/brands/women/tops/sport" },
          { title: "بلوز روزمره", href: "/brands/women/tops/casual" },
          { title: "بلوز رسمی", href: "/brands/women/tops/formal" },
        ],
      },
      {
        title: "شلوار و دامن",
        href: "/brands/women/bottoms",
        sub: [
          { title: "شلوار جین", href: "/brands/women/bottoms/jeans" },
          { title: "دامن کوتاه", href: "/brands/women/bottoms/short-skirts" },
          { title: "دامن بلند", href: "/brands/women/bottoms/long-skirts" },
        ],
      },
      {
        title: "کت و کاپشن",
        href: "/brands/women/jackets",
        sub: [
          { title: "کت اسپرت", href: "/brands/women/jackets/sport" },
          { title: "کاپشن زمستانی", href: "/brands/women/jackets/winter" },
        ],
      },
      {
        title: "اکسسوری‌ها",
        href: "/brands/women/accessories",
        sub: [
          { title: "شال و روسری", href: "/brands/women/accessories/scarves" },
          { title: "کمربند", href: "/brands/women/accessories/belts" },
          {
            title: "کلاه و دستکش",
            href: "/brands/women/accessories/hats-gloves",
          },
        ],
      },
    ],
  },
  {
    title: "درباره ما",
    href: "/aboutUs",
  },
  {
    title: "تماس با ما",
    href: "/contactUs",
  },
];
