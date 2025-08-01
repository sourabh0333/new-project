"use client";
import React, { useState } from "react";
import Image from "next/image";

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

const CateA = () => {
  const [active, setActive] = useState("All");
  const [cart, setCart] = useState({});

  const handleAdd = (name) => {
    setCart((prev) => ({
      ...prev,
      [name]: (prev[name] || 0) + 1,
    }));
  };

  const handleRemove = (name) => {
    setCart((prev) => {
      const newQty = (prev[name] || 0) - 1;
      if (newQty <= 0) {
        const { [name]: _, ...rest } = prev;
        return rest;
      }
      return {
        ...prev,
        [name]: newQty,
      };
    });
  };

  const filteredItems =
    active === "All"
      ? foodItems
      : foodItems.filter((item) => item.category === active);

  return (
    <div className="p-4 space-y-4 bg-white">
      {/* Category Buttons */}
      <div className="flex overflow-x-auto no-scrollbar space-x-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-3 py-1 text-sm rounded-full whitespace-nowrap border transition ${
              active === cat
                ? "bg-green-100 text-green-800 border-green-300"
                : "border-gray-300 text-gray-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Filtered Items as Card */}
      <div className="grid grid-cols-2 gap-5 mb-20">
        {filteredItems.map((item, index) => {
          const qty = cart[item.name] || 0;
          return (
            <div key={index} className="w-full mb-1">
              {/* Image */}
              <div className="w-full h-28 relative overflow-hidden rounded-sm">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="text-sm font-medium mt-3 leading-tight text-black line-clamp-1">
                {item.name}
              </h3>

              <div className=" flex items-center justify-between mt-2">
                {/* Price */}
                <p className="text-md font-semibold text-gray-800">
                  ₹ {item.price}
                </p>

                {/* Quantity Buttons */}
                <div className="w-20">
                  {qty === 0 ? (
                    <button
                      onClick={() => handleAdd(item.name)}
                      className="w-full bg-blue-500 text-white py-0.5 rounded-sm flex justify-center items-center gap-1 text-sm font-medium cursor-pointer"
                    >
                      <span className="text-lg ">+</span> Add
                    </button>
                  ) : (
                    <div className="flex items-center justify-between border border-blue-500 text-black rounded-sm px-2 py-0.5">
                      <button
                        onClick={() => handleRemove(item.name)}
                        className="text-xl px-2 cursor-pointer text-blue-500"
                      >
                        -
                      </button>
                      <span className="text-sm font-medium">{qty}</span>
                      <button
                        onClick={() => handleAdd(item.name)}
                        className="text-xl px-2 cursor-pointer text-blue-500"
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CateA;
