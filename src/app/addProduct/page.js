"use client";

import { useState } from "react";
import { Tooltip } from "react-tooltip";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";

export default function AddProduct() {
  const [shortDesc, setShortDesc] = useState("");
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = [...images];

    files.forEach((file) => {
      if (newImages.length < 4) {
        newImages.push({
          file,
          preview: URL.createObjectURL(file),
        });
      }
    });

    setImages(newImages);
  };

  const removeImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  };

  return (
    <div className="w-full h-screen bg-white px-4 py-4">
      <div className="flex items-center gap-4">
        <button>
          <MdOutlineKeyboardBackspace size={25} className="text-black" />
        </button>
        <h2 className="text-lg font-semibold text-black">Add Product</h2>
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
          <label className="text-sm font-medium">Product Image</label>

          <div className="flex gap-2 mt-2">
            {images.map((img, index) => (
              <div key={index} className="relative w-20 h-20 rounded-sm">
                <img
                  src={img.preview}
                  alt="preview"
                  className="w-full h-full object-cover rounded-sm"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute -top-2 -right-2 text-red-500 bg-white rounded-full cursor-pointer"
                >
                  <IoCloseCircle size={20} />
                </button>
              </div>
            ))}

            {images.length < 5 && (
              <label
                htmlFor="image-upload"
                className="w-20 h-20 flex flex-col items-center justify-center border border-dashed rounded cursor-pointer text-gray-400 bg-gray-100 hover:bg-gray-50"
              >
                <span className="">
                  <IoIosAddCircleOutline size={30} />
                </span>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/png, image/jpeg"
                  multiple
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            )}
          </div>

          <p className="text-xs text-gray-500 mt-1">
            You can add up to 5 images
          </p>
        </div>

        <div className="relative max-w-sm mx-auto mb-3">
          <label className="text-sm font-medium">Categories</label>

          <select className="w-full appearance-none border border-gray-300 px-3 py-2 rounded mt-1 pr-10 text-sm focus:outline-none ">
            <option>Option</option>
            <option>11 - 30</option>
            <option>31 - 50</option>
            <option>51 - 100</option>
          </select>
        </div>

        <div>
          <div className="flex items-center">
            <label className="text-sm font-medium">Price</label>

            <div className="relative ml-2">
              <svg
                data-tooltip-id="price-tooltip"
                data-tooltip-content="Enter the product price in INR.Enter the product price in INR. Enter the product price in INR. Enter the product price in INR."
                data-tooltip-place="top"
                className="h-4 w-4 text-gray-400 cursor-pointer focus:outline-none"
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

              <Tooltip
                id="price-tooltip"
                className="z-30 max-w-[270px] whitespace-normal"
              />
            </div>
          </div>

          <div className="relative mt-1">
            <input
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-0"
              placeholder="Enter price"
              rows={4}
              name="shortDescription"
              value={shortDesc}
              onChange={(e) => setShortDesc(e.target.value)}
            ></input>
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
