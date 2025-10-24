"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/Banner1.jpg",
  "/Banner2.jpeg",
  "/Banner3.webp",
];

const Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[738px] overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Banner ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* If you want a light overlay, keep this with low opacity */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-10"></div> */}
    </div>
  );
};

export default Banner;
