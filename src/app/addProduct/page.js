"use client";

import { useState } from "react";
import { LuUpload } from "react-icons/lu";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";

export default function AddProduct() {
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
    <div className="max-w-sm mx-auto h-scree bg-white px-4 py-4">
      <div className="flex items-center gap-4">
        <button>
          <MdOutlineKeyboardBackspace size={25} className="text-black" />
        </button>
        <h2 className="text-lg font-semibold text-black">Add Ethnic Wear</h2>
      </div>

      <hr className="text-gray-300 my-2" />

      <form className="space-y-2 text-black">
        <div>
          <label className="text-sm font-medium">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 px-3 py-2 rounded mt-1 focus:outline-0"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Upload Logo Image</label>

          <label
            htmlFor="logo-upload"
            className="bg-gray-100 text-gray-400 border border-dashed rounded-md py-6 text-center mt-2 text-sm flex flex-col items-center justify-center cursor-pointer"
          >
            <div className="flex justify-between items-center px-1 py-1 rounded">
              <LuUpload className="text-lg text-gray-500 mr-1 " />
              <p className=" text-gray-500 font-medium">Upload Media</p>
            </div>
            <p className="text-xs text-gray-500">You can add upto 5 images</p>
            <input
              id="logo-upload"
              type="file"
              accept="image/png, image/jpeg"
              className="hidden"
            />
          </label>
        </div>

        <div className="space-y-3">
          <div>
            <label className="text-sm font-medium block flex items-center gap-2 mb-1">
              Add Category<span className="text-red-500">*</span>
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

        <div>
          <label className="text-sm font-medium flex items-center gap-2">
            Category<span className="text-red-500">*</span>
          </label>
          <div className="relative mt-1">
            <input
              type="text"
              className="w-full pr-10 border border-gray-300 px-3 py-2 rounded focus:outline-0"
              placeholder="Category"
            />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium flex items-center gap-2">
            Price<span className="text-red-500">*</span>
          </label>
          <div className="relative mt-1">
            <input
              type="text"
              className="w-full pr-10 border border-gray-300 px-3 py-2 rounded focus:outline-0"
              placeholder="Price"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Description Here</label>
          <div className="relative mt-1">
            <textarea
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-0"
              placeholder="Add Description"
              rows={4}
            ></textarea>
          </div>
        </div>

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
