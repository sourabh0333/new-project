"use client";

import { useState } from "react";
import { LuUpload } from "react-icons/lu";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";

export default function AddProduct() {
  const [inputValue, setInputValue] = useState("");
  const [categories, setCategories] = useState([]);
  const [shortDesc, setShortDesc] = useState("");
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);

  const categoryOptions = [
    "Ethnic Wear",
    "Western Wear",
    "Fusion Wear",
    "Innerwear & Sleepwear",
    "Activewear",
    "Winter Wear",
  ];

  const toggleCategory = (cat) => {
    setSelected((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const handleSave = () => {
    setOpen(false);
  };

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

        {/* <div className="space-y-3">
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
        </div> */}

        <div className="relative max-w-sm mx-auto mb-3">
          {/* Dropdown box */}
          <label className="text-sm font-medium">Categories</label>

          <div
            onClick={() => setOpen(true)}
            className="border border-gray-300 rounded px-3 py-2 cursor-pointer min-h-14"
          >
            {selected.length === 0 ? "Select Category" : selected.join(", ")}
          </div>

          {/* Modal or dropdown list */}
          {open && (
            <div className="fixed inset-0 bg-black/50 flex justify-center items-end md:items-center z-50 ">
              <div className="bg-white w-full max-w-md rounded-t-xl md:rounded-xl p-4 ">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-lg">Select a category</h3>
                  <button
                    onClick={() => setOpen(false)}
                    className="text-3xl font-bold "
                    aria-label="Close"
                  >
                    &times;
                  </button>
                </div>

                <ul className="divide-y divide-gray-200/60 max-h-60 overflow-y-auto">
                  {categoryOptions.map((cat) => {
                    const isSelected = selected.includes(cat);
                    return (
                      <li
                        key={cat}
                        className={`flex gap-2 items-center py-2 cursor-pointer ${
                          isSelected
                            ? "text-pink-600 font-semibold"
                            : "text-black"
                        }`}
                        onClick={() => toggleCategory(cat)}
                      >
                        {cat}
                        {isSelected && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-pink-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </li>
                    );
                  })}
                </ul>

                <button
                  onClick={handleSave}
                  className="mt-4 w-full bg-pink-600 text-white py-2 rounded"
                >
                  Save
                </button>
              </div>
            </div>
          )}
        </div>

        {/* <div>
          <div className="flex items-center">
            <label className="text-sm font-medium">Short Description</label>
            <div className="relative group ml-2">
              <svg
                className="h-4 w-4 text-gray-400 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <div className="absolute hidden group-hover:block z-10 w-64 p-2 text-xs bg-gray-700 text-white rounded shadow-lg left-full ml-2">
                Eg: 800/20 Cr.square fit
              </div>
            </div>
          </div>
          <div className="relative mt-1">
            <textarea
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-0"
              placeholder="Eg: "
              rows={4}
            ></textarea>
          </div>
        </div> */}
        <div>
          <div className="flex items-center">
            <label className="text-sm font-medium">Short Description</label>

            <div className="relative group ml-2">
              <svg
                className="h-4 w-4 text-gray-400 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 hidden group-hover:flex flex-col z-10">
                <div className="relative bg-blue-500 text-white text-xs p-3 rounded shadow-lg w-52">
                  Use this field to show a price, offer, or any key text. It
                  will appear just above the call to action button to grab
                  attention.
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-blue-500"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-1">
            <textarea
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-0 h-14"
              placeholder="Short Description"
              rows={4}
              name="shortDescription"
              value={shortDesc}
              onChange={(e) => setShortDesc(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Full Description</label>
          <div className="relative mt-1">
            <textarea
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-0"
              placeholder="Full Description"
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
