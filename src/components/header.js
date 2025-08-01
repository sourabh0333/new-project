import Link from "next/link";
import React from "react";
import { IoShareSocial } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <div className=" flex justify-between items-center px-4 py-3 shadow">
        <div className="flex items-center gap-2">
          <button>
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <span className="font-semibold text-lg text-black">Cake Shop</span>
        </div>
        <div className="flex justify-end">
          <Link
            href="#"
            className="flex gap-1 items-center cursor-pointer bg-blue-500 text-white text-sm px-3 py-1.5 rounded-md shadow hover:bg-blue-600 transition"
          >
            <IoShareSocial size={15} className="mr-1" />
            Share
          </Link>
        </div>
      </div>
    </>
  );
};
export default Header;
