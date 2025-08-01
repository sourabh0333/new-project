import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoShareSocial } from "react-icons/io5";
import { FaYoutube, FaInstagram } from "react-icons/fa";

const Product2Logo = () => {
  return (
    <div className="bg-white">
      <div className="px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/sample10.png"
              alt="Logo"
              width={110}
              height={110}
              className="object-contain w-auto h-16"
            />
            <div>
              <h2 className="text-sm font-semibold text-gray-800 leading-tight">
                Ribbons & Balloons
              </h2>
              <p className="text-sm text-gray-600">Cake Shop</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="#"
              className="flex gap-1 items-center justify-center bg-red-500 w-7 h-7 text-white text-sm rounded-full shadow hover:bg-blue-600 transition"
            >
              <FaInstagram size={15} className="" />
            </Link>
            <Link
              href="#"
              className="flex gap-1 items-center justify-center bg-red-500 w-7 h-7 text-white text-sm rounded-full shadow hover:bg-blue-600 transition"
            >
              <FaYoutube size={15} className="" />
            </Link>

            <Link
              href="#"
              className="flex gap-1 items-center justify-center bg-blue-500 w-7 h-7 text-white text-sm rounded-md shadow hover:bg-blue-600 transition"
            >
              <IoShareSocial size={15} className="" />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full relative h-40">
        <Image
          src="/headerImg.jpg"
          alt="Header"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Product2Logo;
