"use client";

import { useState } from "react";

type Props = {
  gallery: string[];
};

export const ProductGallery = ({ gallery }: Props) => {
  const [selected, setSelected] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  if (!gallery || gallery.length === 0) {
    return (
      <div className="w-full h-[300px] flex items-center justify-center bg-gray-100">
        <p>تصویری موجود نیست</p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col sm:flex-row-reverse justify-center gap-3">
      <div
        className="sm:w-[400px] sm:h-[450px] mb-4 relative overflow-hidden flex justify-start items-start"
        onMouseMove={(e) => {
          const { left, top, width, height } =
            e.currentTarget.getBoundingClientRect();
          const x = ((e.pageX - left) / width) * 100;
          const y = ((e.pageY - top) / height) * 100;
          setPosition({ x, y });
        }}
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
      >
        <img
          src={gallery[selected]}
          alt="main"
          className="w-full h-full object-cover transition-transform duration-200"
          style={{
            transform: isZoomed ? "scale(2)" : "scale(1)",
            transformOrigin: `${position.x}% ${position.y}%`,
          }}
        />
      </div>

      {gallery.length > 1 && (
        <div className="flex flex-row sm:flex-col items-center justify-start gap-3 overflow-y-auto">
          {gallery.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelected(idx)}
              className={`flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24  border-2 ${
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
      )}
    </div>
  );
};