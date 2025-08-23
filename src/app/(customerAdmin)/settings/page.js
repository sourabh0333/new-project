"use client";
import { useState } from "react";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function Settings() {
  const [productButtonEnabled, setProductButtonEnabled] = useState(true);
  const [descButtonEnabled, setDescButtonEnabled] = useState(true);
  const [buttonLabel, setButtonLabel] = useState("Inquiry");
  const [descButtonLabel, setDescButtonLabel] = useState("Place Order");

  return (
    <div className="w-full h-screen bg-white">
      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-lg text-black font-semibold">Settings</h3>
        <FaYoutube className="text-red-600 text-2xl" />
      </div>

      <div className="border border-gray-300 rounded-lg text-black ">
        <div className="border-b border-gray-300 p-2">
          <h4 className="font-[600]">Call to Action Button</h4>
        </div>

        <div className="p-4 border-b border-gray-300">
          <div className="flex justify-between items-center mb-2">
            <span>Product Button</span>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={productButtonEnabled}
                onChange={() => setProductButtonEnabled(!productButtonEnabled)}
                className="sr-only peer"
              />
              <div
                className="relative w-11 h-6 bg-gray-200 rounded-full peer-focus:outline-none peer dark:bg-gray-300 
                peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
                peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] 
                after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full 
                after:h-5 after:w-5 after:transition-all dark:border-gray-600 
                peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"
              ></div>
            </label>
          </div>
          {productButtonEnabled && (
            <button className="flex items-center gap-2 border border-green-500 text-green-600 rounded px-4 py-1 text-sm">
              <FaWhatsapp /> {buttonLabel || "Order"}
            </button>
          )}
          <input
            type="text"
            value={buttonLabel}
            onChange={(e) => setButtonLabel(e.target.value)}
            placeholder="Enter button name"
            className="w-full mt-2 border border-gray-300 rounded px-3 py-2 text-gray-500 outline-none"
          />
        </div>

        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <span>Description Page Button</span>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={descButtonEnabled}
                onChange={() => setDescButtonEnabled(!descButtonEnabled)}
                className="sr-only peer"
              />
              <div
                className="relative w-11 h-6 bg-gray-200 rounded-full peer-focus:outline-none peer dark:bg-gray-300 
                                peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
                                peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] 
                                after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full 
                                after:h-5 after:w-5 after:transition-all dark:border-gray-600 
                                peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"
              ></div>
            </label>
          </div>
          {descButtonEnabled && (
            <button className="flex items-center gap-2 bg-green-600 text-white rounded-md px-4 py-1 text-sm w-38 h-9">
              <FaWhatsapp /> {descButtonLabel || "Place Order"}
            </button>
          )}
          <input
            type="text"
            value={descButtonLabel}
            onChange={(e) => setDescButtonLabel(e.target.value)}
            placeholder="Place Order"
            className="w-full mt-2 border border-gray-300 rounded px-3 py-2 text-gray-500 outline-none"
          />
        </div>
      </div>
    </div>
  );
}
