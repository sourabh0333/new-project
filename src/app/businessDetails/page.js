"use client";

import { useState } from "react";
import { FaYoutube, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { LuUpload } from "react-icons/lu";
import { FiChevronDown } from "react-icons/fi";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";

export default function BusinessDetails() {
  const [inputValue, setInputValue] = useState("");
  const [categories, setCategories] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();

      const formatToTitleCase = (text) =>
        text
          .trim()
          .toLowerCase()
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

      const formatted = formatToTitleCase(inputValue);

      if (!categories.includes(formatted)) {
        setCategories([...categories, formatted]);
        setInputValue("");
      }
    }
  };

  const removeCategory = (indexToRemove) => {
    setCategories(categories.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="max-w-sm mx-auto h-screen bg-white px-4 py-4">
      <div className="flex items-center gap-4">
        <button>
          <MdOutlineKeyboardBackspace size={25} className="text-black" />
        </button>
        <h2 className="text-lg font-semibold text-black">
          Add Your Business Details
        </h2>
      </div>

      <hr className="text-gray-300 h-2 my-5" />

      <form className="space-y-4 text-black">
        <div className="relative w-full">
          <label className="text-sm font-medium">Industry</label>
          <select className="w-full appearance-none border border-gray-300 px-3 py-2 rounded mt-1 pr-10 text-sm focus:outline-none ">
            <option>Cake Shop1</option>
            <option>Cake Shop2</option>
            <option>Cake Shop3</option>
            <option>Cake Shop4</option>
          </select>

          {/* Icon container with absolute positioning */}
          <div className="pointer-events-none absolute top-[38px] right-3 text-gray-500">
            <FiChevronDown className="w-4 h-4" />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">
            Business Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Full Name Fetch"
            className="w-full border border-gray-300 px-3 py-2 rounded mt-1 focus:outline-0"
          />
        </div>

        <div>
          <label className="text-sm font-medium">
            Business Slogan <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Business slogan"
            className="w-full border border-gray-300 px-3 py-2 rounded mt-1 focus:outline-0"
          />
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" id="import" className="w-4 h-4" />
          <label htmlFor="import" className="text-sm">
            Show Slogan
          </label>
        </div>

        <div>
          <label className="text-sm font-medium">Upload Logo Image</label>

          <label
            htmlFor="logo-upload"
            className="bg-gray-100 border border-dashed rounded-md py-6 text-center mt-2 text-sm flex flex-col items-center justify-center cursor-pointer"
          >
            <LuUpload className="text-3xl text-gray-500" />
            <p className="mb-2">Add a logo</p>
            <p className="text-xs text-gray-500">
              Allowed: PNG, JPG (Max: 2MB)
            </p>
            <input
              id="logo-upload"
              type="file"
              accept="image/png, image/jpeg"
              className="hidden"
            />
          </label>
        </div>

        <div className="relative w-full">
          <label className="text-sm font-medium">Business Type</label>
          <select className="w-full appearance-none border border-gray-300 px-3 py-2 rounded mt-1 pr-10 text-sm focus:outline-none ">
            <option>Shop</option>
            <option>Home</option>
            <option>Wholeseller</option>
          </select>

          {/* Icon container with absolute positioning */}
          <div className="pointer-events-none absolute top-[38px] right-3 text-gray-500">
            <FiChevronDown className="w-4 h-4" />
          </div>
        </div>

        <div className="relative w-full">
          <label className="text-sm font-medium">
            Product Count (approx) <span className="text-red-500">*</span>
          </label>
          <select className="w-full appearance-none border border-gray-300 px-3 py-2 rounded mt-1 pr-10 text-sm focus:outline-none ">
            <option>0 - 10</option>
            <option>11 - 30</option>
            <option>31 - 50</option>
            <option>51 - 100</option>
          </select>

          {/* Icon container with absolute positioning */}
          <div className="pointer-events-none absolute top-[38px] right-3 text-gray-500">
            <FiChevronDown className="w-4 h-4" />
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <label className="text-sm font-medium block mb-1">
              Add Category
            </label>
            <div className="flex items-center border border-gray-300 rounded px-3 py-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Add Category"
                className="flex-1 outline-none text-sm"
              />
              <IoIosAdd className="text-gray-500" />
            </div>
          </div>

          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2 border border-gray-200 rounded-sm p-2">
              {categories.map((cat, index) => (
                <span
                  key={index}
                  className="flex items-center gap-1 bg-blue-100 text-sm text-blue-800 px-2 py-0.5 rounded-md border border-blue-300"
                >
                  {cat}
                  <button
                    type="button"
                    onClick={() => removeCategory(index)}
                    className="ml-1 text-black hover:text-red-500 transition-colors duration-300 cursor-pointer"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Social Media Links */}
        <div>
          <label className="text-sm font-medium flex items-center gap-2">
            YouTube Channel Link
          </label>
          <div className="relative mt-1">
            <input
              type="url"
              className="w-full pr-10 border border-gray-300 px-3 py-2 rounded focus:outline-0"
              placeholder="Add Link"
            />
            <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <FaYoutube className="text-red-600 text-2xl" />
            </span>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Instagram Account Link</label>
          <div className="relative mt-1">
            <input
              type="url"
              className="w-full pr-10 border border-gray-300 px-3 py-2 rounded focus:outline-0"
              placeholder="Add Link"
            />
            <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <FaInstagram className="text-pink-500 text-2xl" />
            </span>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Add Address Link</label>
          <div className="relative mt-1">
            <input
              type="url"
              className="w-full pr-10 border border-gray-300 px-3 py-2 rounded focus:outline-0"
              placeholder="Add Link"
            />
            <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <img src="/mapLogo.png" alt="Google Maps" className="w-5 h-6" />
            </span>
          </div>
        </div>

        {/* Checkbox */}
        <div className="flex items-center gap-2">
          <input type="checkbox" id="import" className="w-4 h-4" />
          <label htmlFor="import" className="text-sm">
            Import Dummy Products
          </label>
        </div>

        {/* Continue Button */}
        <button
          type="submit"
          className="w-full bg-[#06002E] text-white py-2 rounded font-medium cursor-pointer"
        >
          Continue
        </button>
      </form>
    </div>
  );
}
