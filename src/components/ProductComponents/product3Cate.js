"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

const categories = [
  "All",
  "Cake",
  "Pastry",
  "Cupcakes",
  "Cookies",
  "Ice Cream",
  "Donuts",
  "Snacks",
  "Biscuits",
];

const foodItems = [
  {
    name: "Cherry Blossom Cake",
    category: "Cake",
    price: 350,
    image: "/itemImg1.jpg",
  },
  {
    name: "Red Velvet Pastry",
    category: "Pastry",
    price: 90,
    image: "/itemImg1.jpg",
  },
  {
    name: "Oreo Cupcake",
    category: "Cupcakes",
    price: 70,
    image: "/itemImg1.jpg",
  },
  {
    name: "Choco Chip Cookie",
    category: "Cookies",
    price: 50,
    image: "/itemImg1.jpg",
  },
  {
    name: "Mango Ice Cream",
    category: "Ice Cream",
    price: 60,
    image: "/itemImg1.jpg",
  },
  {
    name: "Glazed Donut",
    category: "Donuts",
    price: 45,
    image: "/itemImg1.jpg",
  },
  {
    name: "Aloo Bhujia",
    category: "Snacks",
    price: 35,
    image: "/itemImg1.jpg",
  },
  {
    name: "Jeera Biscuit",
    category: "Biscuits",
    price: 30,
    image: "/itemImg1.jpg",
  },
];

const Product3Cate = () => {
  const [active, setActive] = useState("All");
  const [cart, setCart] = useState({});
  const [showMore, setShowMore] = useState(false);

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
    <div className="p-4 space-y-5">
      <div>
        <div className="grid grid-cols-4 gap-4">
          {categories.slice(0, 4).map((cat) => (
            <div
              key={cat}
              onClick={() => setActive(cat)}
              className={`flex flex-col items-center cursor-pointer min-w-[64px] ${
                active === cat ? "text-green-600 font-medium" : "text-gray-700"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-full overflow-hidden border flex items-center justify-center ${
                  active === cat ? "border-green-500" : "border-gray-300"
                }`}
              >
                <Image
                  src="/itemImg1.jpg"
                  alt={cat}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <span className="text-sm mt-1">{cat}</span>
            </div>
          ))}
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            showMore
              ? "opacity-100 translate-y-0 max-h-[500px] mt-4"
              : "opacity-0 -translate-y-4 max-h-0"
          }`}
        >
          <div className="grid grid-cols-4 gap-4 transition-opacity duration-300">
            {categories.slice(4).map((cat) => (
              <div
                key={cat}
                onClick={() => setActive(cat)}
                className={`flex flex-col items-center cursor-pointer min-w-[64px] ${
                  active === cat
                    ? "text-green-600 font-medium"
                    : "text-gray-700"
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-full overflow-hidden border flex items-center justify-center ${
                    active === cat ? "border-green-500" : "border-gray-300"
                  }`}
                >
                  <Image
                    src="/itemImg1.jpg"
                    alt={cat}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <span className="text-sm mt-1">{cat}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-3">
          <button
            onClick={() => setShowMore(!showMore)}
            className="w-full text-sm text-gray-700 flex items-center justify-center gap-2 mx-auto border border-gray-200 px-4 py-1.5 rounded-md hover:bg-gray-100 transition cursor-pointer"
          >
            {showMore ? "View Less" : "View More"}
            <FaChevronDown
              className={`transform transition-transform duration-300 ${
                showMore ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-2 gap-4 mb-10">
        {filteredItems.map((item, index) => {
          const qty = cart[item.name] || 0;
          return (
            <div
              key={index}
              className="w-full bg-white rounded-xl border shadow-sm"
            >
              <div className="w-full h-28 relative overflow-hidden rounded-md rounded-b-none">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-2">
                <h3 className="text-sm font-medium mt-2 text-black line-clamp-1">
                  {item.name}
                </h3>

                <div className="flex items-center justify-between mt-2">
                  <p className="text-lg font-semibold text-[#692424]">
                    ₹ {item.price}
                  </p>

                  <div className="">
                    {qty === 0 ? (
                      <button
                        onClick={() => handleAdd(item.name)}
                        className="w-full bg-green-500 text-white rounded-sm flex justify-center items-center text-sm font-medium cursor-pointer px-1.5"
                      >
                        <span className="text-lg">＋</span> Add
                      </button>
                    ) : (
                      <div className="flex items-center justify-between border border-green-500 text-black rounded-sm">
                        <button
                          onClick={() => handleRemove(item.name)}
                          className="text-xl px-1 cursor-pointer text-green-600"
                        >
                          −
                        </button>
                        <span className="text-sm font-medium">{qty}</span>
                        <button
                          onClick={() => handleAdd(item.name)}
                          className="text-xl px-1 cursor-pointer text-green-600"
                        >
                          ＋
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product3Cate;
