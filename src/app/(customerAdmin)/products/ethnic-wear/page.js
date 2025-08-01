"use client";
import { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";

const dummyProducts = Array.from({ length: 8 }, (_, i) => ({
  code: `Code:000${i + 1}`,
  name: "Women Kurta Pant",
  price: 350,
}));

export default function Burger() {
  const [activeMenuIndex, setActiveMenuIndex] = useState(null);

  const toggleMenu = (index) => {
    setActiveMenuIndex(index === activeMenuIndex ? null : index);
  };

  return (
    <div className="p-4 space-y-4">
      {/* Top Controls */}
      <div className="flex flex-wrap items-center gap-3">
        <button className="px-4 py-1.5 rounded-full bg-pink-100 text-pink-600 font-semibold border border-pink-300">
          Enable
        </button>
        <button className="px-4 py-1.5 rounded-full bg-gray-100 text-gray-800 font-medium">
          Disable
        </button>
        <button className="px-4 py-1.5 rounded-full bg-gray-100 text-gray-800 font-medium">
          Out of Stock
        </button>
        <div className="ml-auto flex items-center gap-2">
          <button className="px-4 py-1.5 bg-black text-white rounded-full text-sm font-medium">
            + Add Product
          </button>
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-full px-3 py-1.5 text-sm"
          />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold">Burger</h2>

      {/* Products Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {dummyProducts.map((product, index) => (
          <div
            key={index}
            className="relative p-2 border border-gray-200 rounded-lg shadow-sm bg-white"
          >
            <p className="text-xs font-medium text-gray-600">{product.code}</p>
            <div className="h-24 bg-gray-300 rounded-md my-2" />

            <p className="text-sm font-medium">{product.name}</p>
            <p className="text-sm font-semibold">₹ {product.price}</p>

            {/* Dropdown Toggle */}
            <button
              onClick={() => toggleMenu(index)}
              className="absolute top-2 right-2 text-gray-600"
            >
              <FiMoreVertical />
            </button>

            {/* Dropdown Menu */}
            {activeMenuIndex === index && (
              <div className="absolute z-10 top-8 right-2 bg-white border border-gray-200 shadow-md rounded text-sm overflow-hidden">
                <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
                  Edit
                </button>
                <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
                  Disable
                </button>
                <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
                  Out of Stock
                </button>
                <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left text-red-600">
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
