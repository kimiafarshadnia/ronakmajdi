"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  gallery: string[];
};

export default function ProductGallery({ gallery }: Props) {
  const [selected, setSelected] = useState(0);

  if (!gallery || gallery.length === 0) {
    return (
      <div className="w-full h-[300px] flex items-center justify-center bg-gray-100">
        <p>تصویری موجود نیست</p>
      </div>
    );
  }

  if (gallery.length === 1) {
    return (
      <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center">
        <img
          src={gallery[0]}
          alt="Product"
          className="object-contain w-full h-full rounded-lg shadow-md"
        />
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* تصویر اصلی */}
      <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] mb-4 relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={selected}
            src={gallery[selected]}
            alt={`Product ${selected + 1}`}
            className="object-contain w-full h-full rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto">
        {gallery.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(idx)}
            className={`flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg border-2 ${
              selected === idx ? "border-blue-500" : "border-gray-300"
            } overflow-hidden`}
          >
            <img
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}