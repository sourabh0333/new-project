"use client";
import React, { useState } from "react";
import Image from "next/image";

// Sample data
const categories = [
  "All",
  "Cakes",
  "Pastries",
  "Biscuits",
  "Snacks",
  "Ice Cream",
  "Donuts",
];
const foodItems = [
  {
    name: "Chocolate Cake",
    category: "Cakes",
    price: 350,
    image: "/itemImg1.jpg",
  },
  {
    name: "Strawberry Pastry",
    category: "Pastries",
    price: 250,
    image: "/itemImg1.jpg",
  },
  {
    name: "Oreo Biscuit",
    category: "Biscuits",
    price: 50,
    image: "/itemImg1.jpg",
  },
  {
    name: "Vanilla Cake",
    category: "Cakes",
    price: 320,
    image: "/itemImg1.jpg",
  },
  {
    name: "Glazed Donut",
    category: "Donuts",
    price: 180,
    image: "/itemImg1.jpg",
  },
  {
    name: "Ice Bar",
    category: "Ice Cream",
    price: 100,
    image: "/itemImg1.jpg",
  },
  {
    name: "Aloo Bhujia",
    category: "Snacks",
    price: 60,
    image: "/itemImg1.jpg",
  },
];

// Components
import ProductCard1 from "./ProductCard1";
import ProductCard2 from "./productCard2";
import ProductCard3 from "./ProductCard3";
import ProductCard4 from "./ProductCard4";

const cardComponents = {
  1: ProductCard1,
  2: ProductCard2,
  3: ProductCard3,
  4: ProductCard4,
};

const ProductBody = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeStyle, setActiveStyle] = useState(1);
  const [cart, setCart] = useState({});

  const handleAdd = (name) => {
    setCart((prev) => ({ ...prev, [name]: (prev[name] || 0) + 1 }));
  };

  const handleRemove = (name) => {
    setCart((prev) => {
      const newQty = (prev[name] || 0) - 1;
      if (newQty <= 0) {
        const { [name]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [name]: newQty };
    });
  };

  const filteredItems =
    activeCategory === "All"
      ? foodItems
      : foodItems.filter((item) => item.category === activeCategory);

  const ActiveCardComponent = cardComponents[activeStyle];

  return (
    <div className="p-4 space-y-4">
      {/* Category Filter */}
      <div className="flex overflow-x-auto no-scrollbar space-x-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 text-sm rounded-full whitespace-nowrap border transition ${
              activeCategory === cat
                ? "bg-green-100 text-green-800 border-green-300"
                : "border-gray-300 text-gray-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Style Switcher Tabs */}
      <div className="flex justify-between items-center">
        <p className="font-semibold text-xl text-black">Product Style</p>
        <div className="flex space-x-3">
          {[1, 2, 3, 4].map((style) => (
            <button
              key={style}
              onClick={() => setActiveStyle(style)}
              className={`h-8 w-8 rounded-full border font-semibold text-sm cursor-pointer ${
                activeStyle === style
                  ? "bg-blue-600 text-white"
                  : "border-gray-300 text-gray-600"
              }`}
            >
              {style}
            </button>
          ))}
        </div>
      </div>

      <div
        className={`grid gap-5 ${
          activeStyle === 1
            ? "grid-cols-3"
            : activeStyle === 2
            ? "grid-cols-2"
            : "grid-cols-1"
        }`}
      >
        {filteredItems.map((item, index) => (
          <ActiveCardComponent
            key={index}
            item={item}
            qty={cart[item.name] || 0}
            handleAdd={() => handleAdd(item.name)}
            handleRemove={() => handleRemove(item.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductBody;
