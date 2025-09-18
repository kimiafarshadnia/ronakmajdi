"use client";
import Image from "next/image";
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
      {/* Main Image */}
      <div
        className="relative w-full max-w-[400px] h-[350px] sm:h-full mb-4 overflow-hidden flex justify-start items-start"
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
        <Image
          src={gallery[selected]}
          alt={`main image ${selected + 1}`}
          fill
          className="object-cover transition-transform duration-200"
          style={{
            transform: isZoomed ? "scale(2)" : "scale(1)",
            transformOrigin: `${position.x}% ${position.y}%`,
          }}
        />
      </div>

      {/* Thumbnails */}
      {gallery.length > 1 && (
        <div className="flex flex-row sm:flex-col items-center justify-start gap-3 overflow-y-scroll sm:h-[450px]">
          {gallery.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelected(idx)}
              className={`flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 border-2 ${
                selected === idx ? "border-blue-500" : "border-gray-300"
              } overflow-hidden relative`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
