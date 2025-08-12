"use client";

import React, { useState } from "react";

interface GalleryImage {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

interface MasonryGalleryProps {
  images?: GalleryImage[];
}

export function SomeProduct({ images = defaultImages }: MasonryGalleryProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  function openLightbox(i: number) {
    setIndex(i);
    setOpen(true);
    // prevent background scroll
    document.documentElement.style.overflow = "hidden";
  }

  function closeLightbox() {
    setOpen(false);
    document.documentElement.style.overflow = "";
  }

  function next() {
    setIndex((prev) => (prev + 1) % images.length);
  }

  function prev() {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  }

  return (
    <div className="container mx-auto px-4">
      {/* محدود کردن عرض ستون‌ها و مرکز کردن آنها */}
      <div className="max-w-6xl mx-auto columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((img, i) => (
          <figure
            key={i}
            className="break-inside-avoid mb-4 relative cursor-pointer overflow-hidden rounded-2xl shadow-sm"
            onClick={() => openLightbox(i)}
          >
            <div className="relative w-full">
              {/* اگر می‌خوای از next/image استفاده کنی، میشه همین‌جا جاگذاری کرد.
                من برای سادگی از <img> با loading="lazy" استفاده کردم */}
              <img
                src={img.src}
                alt={img.alt || `Image ${i + 1}`}
                width={img.width || 800}
                height={img.height || 600}
                loading="lazy"
                style={{ width: "100%", height: "auto" }}
                className="block w-full h-auto object-cover rounded-2xl transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}
const defaultImages: GalleryImage[] = [
  {
    src: "/images/seaDress.jpg",
    alt: "Mountain",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/seaDress.jpg",
    alt: "Forest",
    width: 1200,
    height: 1800,
  },
  {
    src: "/images/product1.jpg",
    alt: "City",
    width: 1600,
    height: 900,
  },
  {
    src: "/images/seaDress.jpg",
    alt: "Desert",
    width: 1600,
    height: 1000,
  },
  {
    src: "/images/product2.jpg",
    alt: "Ocean",
    width: 1600,
    height: 900,
  },
  {
    src: "/images/product4.jpg",
    alt: "Valley",
    width: 1200,
    height: 1600,
  },
];

/*
Usage:

1. Put this file under your app/components (or components) folder, e.g. app/components/MasonryGallery.tsx
2. Ensure Tailwind CSS is configured in your project.
3. Import and use it in any client component / page:

   import MasonryGallery from "@/components/MasonryGallery";

   export default function Page() {
     return <MasonryGallery />; // or pass `images` prop: <MasonryGallery images={myImages} />
   }

Notes and tips:
- For better layout control you can switch to a JS-based Masonry library (e.g. masonry-layout, react-masonry-css) if you need staggered positioning with gaps that vary.
- If you use remote images and Next.js Image Optimization blocks them, add the remote host to next.config.js `images.domains`.
- Tailwind's `break-inside-avoid` is used to keep items intact inside the column layout. If your Tailwind setup doesn't include it, add the `break-inside` utilities via the `@tailwindcss/typography` plugin or upgrade Tailwind.
*/
