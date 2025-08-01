"use client";
import { useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

export default function ProductHeader() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 border-b shadow-sm relative z-40 bg-white">
        {/* Toggle Icon */}
        <button
          onClick={() => setSidebarOpen((prev) => !prev)}
          className="text-xl text-[#06002E] cursor-pointer transition-transform duration-300"
        >
          {sidebarOpen ? (
            <RxCross2 className="rotate-90 transition-transform duration-300" />
          ) : (
            <RxHamburgerMenu className="rotate-0 transition-transform duration-300" />
          )}
        </button>

        {/* Title */}
        <h2 className="text-md text-[#06002E] font-medium ml-4">
          Live catalogue
        </h2>

        {/* Back to Shop Button */}
        <button className="ml-auto bg-[#06002E] text-white text-sm px-4 py-1 rounded-md hover:bg-[#06002eaa] transition-colors duration-300 cursor-pointer">
          Back to shop
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          sidebarOpen
            ? "bg-black/50 opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      >
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg p-4 z-50 transform transition-transform duration-300 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Sidebar Header with Close Button */}
          <div className="flex justify-between items-center mb-4 text-black">
            <h3 className="text-lg font-semibold">Product Preview</h3>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-xl cursor-pointer text-black hover:text-black/75 transition-colors duration-300"
            >
              <RxCross2 />
            </button>
          </div>

          {/* Sidebar Content */}
          <ul className="text-black space-y-3">
            <li className="cursor-pointer text-xl text-black hover:text-black/70 transition-colors duration-300">
              Home
            </li>
            <li className="cursor-pointer text-xl text-black hover:text-black/70 transition-colors duration-300">
              About
            </li>
            <li className="cursor-pointer text-xl text-black hover:text-black/70 transition-colors duration-300">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
