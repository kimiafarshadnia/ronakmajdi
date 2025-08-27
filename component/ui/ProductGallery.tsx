"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  gallery: string[];
};

type ZoomStyle = {
  backgroundSize: string;
  backgroundPosition: string;
};

export const ProductGallery = ({ gallery }: Props) => {
  const [selected, setSelected] = useState(0);

  const [zoomStyle, setZoomStyle] = useState<ZoomStyle>({
    backgroundSize: "contain",
    backgroundPosition: "center",
  });

  if (!gallery || gallery.length === 0) {
    return (
      <div className="w-full h-[300px] flex items-center justify-center bg-gray-100">
        <p>تصویری موجود نیست</p>
      </div>
    );
  }

  if (gallery.length === 1) {
    return (
      <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
        <div
          className="w-full h-full rounded-lg shadow-md bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${gallery[0]})`,
            ...zoomStyle,
          }}
          onMouseMove={(e) => {
            const { left, top, width, height } =
              e.currentTarget.getBoundingClientRect();
            const x = ((e.pageX - left) / width) * 100;
            const y = ((e.pageY - top) / height) * 100;
            setZoomStyle({
              backgroundSize: "200%", // میزان زوم
              backgroundPosition: `${x}% ${y}%`,
            });
          }}
          onMouseLeave={() =>
            setZoomStyle({
              backgroundSize: "contain",
              backgroundPosition: "center",
            })
          }
        />
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* تصویر اصلی با زوم */}
      <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] mb-4 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            className="w-full h-full rounded-lg shadow-md bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${gallery[selected]})`,
              ...zoomStyle,
            }}
            onMouseMove={(e) => {
              const { left, top, width, height } =
                e.currentTarget.getBoundingClientRect();
              const x = ((e.pageX - left) / width) * 100;
              const y = ((e.pageY - top) / height) * 100;
              setZoomStyle({
                backgroundSize: "200%", // زوم ۲ برابر
                backgroundPosition: `${x}% ${y}%`,
              });
            }}
            onMouseLeave={() =>
              setZoomStyle({
                backgroundSize: "contain",
                backgroundPosition: "center",
              })
            }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
      </div>

      {/* تصاویر بندانگشتی */}
      <div className="flex gap-3 overflow-x-auto">
        {gallery.map((img, idx) => (
          <button
            key={idx}
            onClick={() => {
              setSelected(idx);
              setZoomStyle({
                backgroundSize: "contain",
                backgroundPosition: "center",
              });
            }}
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
};