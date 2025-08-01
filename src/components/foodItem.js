import Image from "next/image";
import React, { useState } from "react";

const FoodItem = () => {
  const [quantity, setQuantity] = useState(0);
  return (
    <>
      <div className="bg-white rounded-xl shadow-sm p-3 w-44">
        {/* Image */}
        <div className="w-full h-28 relative overflow-hidden rounded-xl">
          <Image
            src="/cake.jpg"
            alt="Choco Velvet Delight"
            fill
            className="object-cover"
          />
        </div>

        {/* Title */}
        <h3 className="text-sm font-medium mt-3 leading-tight">
          Choco Velvet Delight
        </h3>

        {/* Price */}
        <p className="text-sm font-semibold text-gray-800 mt-1">₹ 350</p>

        {/* Button Section */}
        <div className="mt-3">
          {quantity === 0 ? (
            <button
              onClick={() => setQuantity(1)}
              className="w-full bg-blue-500 text-white py-1.5 rounded-lg flex justify-center items-center gap-1 text-sm font-medium"
            >
              <span className="text-lg">＋</span> Add
            </button>
          ) : (
            <div className="flex items-center justify-between bg-blue-500 text-white rounded-lg px-2 py-1.5">
              <button
                onClick={() => setQuantity((prev) => Math.max(prev - 1, 0))}
                className="text-xl px-2"
              >
                −
              </button>
              <span className="text-sm font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="text-xl px-2"
              >
                ＋
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FoodItem;
