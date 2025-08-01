"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const cakeImages = [
  "/itemImg1.jpg",
  "/headerImg.jpg",
  "/itemImg1.jpg",
  "/itemImg1.jpg",
];

export default function ProductDetailsLogoS() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const startX = useRef(null);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (!startX.current) return;

    const diff = startX.current - endX;
    if (diff > 50) {
      setCurrentIndex((prev) =>
        prev === cakeImages.length - 1 ? 0 : prev + 1
      );
    } else if (diff < -50) {
      setCurrentIndex((prev) =>
        prev === 0 ? cakeImages.length - 1 : prev - 1
      );
    }

    startX.current = null;
  };

  return (
    <div className="max-w-sm mx-auto bg-white overflow-hidden">
      <div
        className="relative"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={cakeImages[currentIndex]}
          alt="Cake"
          className="w-full h-64 object-cover select-none"
        />

        <Link
          href="#"
          target="_blank"
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
            <FaInstagram size={22} className="text-red-600" />
            <span className="text-black font-medium">View on Instagram</span>
          </div>
        </Link>

        <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1">
          {cakeImages.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === currentIndex ? "bg-black" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-semibold text-black">
          Cherry Blossom Cake
        </h2>
        <hr className="bg-gray-50/50 my-2" />
        <p className="text-lg font-medium text-gray-800 mb-1.5">Description</p>
        <ul className="text-sm text-gray-800 mb-4 space-y-1">
          <li>Base - Vanilla Sponge</li>
          <li>Filling - Rich Cream with Banana, White Truffle & Dark Cherry</li>
          <li>Topping - Strawberry Glaze with Cream & Chocolate</li>
        </ul>

        <p className="text-sm font-medium text-gray-800 mb-1">Total Price</p>
        <p className="text-xl font-bold text-black mb-5">₹ 350</p>

        <Link
          href="#"
          target="_blank"
          className="bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2 py-3 rounded-full text-base font-medium transition-colors duration-300"
        >
          <FaWhatsapp size={20} />
          Place Order
        </Link>
      </div>
    </div>
  );
}
