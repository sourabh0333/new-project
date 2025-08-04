"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const cakeImages = [
  "/itemImg1.jpg",
  "/headerImg.jpg",
  "/itemImg1.jpg",
  "/itemImg1.jpg",
];

export default function ProductDetailsLogo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
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
    <div className="w-full bg-white overflow-hidden relative">
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

        {currentIndex === 3 && !showVideo && (
          <button
            onClick={() => setShowVideo(true)}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 cursor-pointer">
              <FaYoutube size={20} className="text-red-600" />
              <span className="text-black font-medium">View on Youtube</span>
            </div>
          </button>
        )}

        <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1">
          {cakeImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 w-2 rounded-full cursor-pointer ${
                i === currentIndex ? "bg-black" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {showVideo && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
          <div className="relative w-[85%] aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/QqySVUjAhHM?si=ACg8Fo-wc75n4CvQ"
              title="YouTube Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="rounded-lg"
            ></iframe>

            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-4 -right-4 flex justify-center items-center bg-white text-black w-8 h-8 rounded-full shadow hover:bg-red-500 hover:text-white transition"
            >
              <IoCloseSharp />
            </button>
          </div>
        </div>
      )}

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
