import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoShareSocial } from "react-icons/io5";
import { FaYoutube, FaInstagram } from "react-icons/fa";

const SecLogoSection = () => {
  return (
    <div className="bg-white shadow pb-3">
      {/* Header Image */}
      <div className="w-full relative h-40">
        <Image
          src="/headerImg.jpg"
          alt="Header"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative px-4 mt-2">
        <div className="absolute -top-11 left-4 w-28 h-18 flex justify-center items-center border-4 border-white overflow-hidden shadow bg-white rounded-sm">
          <Image
            src="/sample10.png"
            alt="Logo"
            width={110}
            height={110}
            className="object-contain"
          />
        </div>
        <div className="flex justify-end">
          <Link
            href="#"
            className="flex gap-1 items-center bg-blue-500 text-white text-sm px-3 py-1.5 rounded-sm shadow hover:bg-blue-600 transition"
          >
            <IoShareSocial size={15} className="mr-1" />
            Share
          </Link>
        </div>

        <div className="pt-2 flex justify-between items-center">
          <div>
            <h2 className="text-base font-semibold text-gray-800 leading-tight">
              Ribbons & Balloons
            </h2>
            <p className="text-sm text-gray-600">
              Cake ho ya mood dono yahin bante hain!
            </p>
          </div>

          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            <FaYoutube size={26} className="text-red-600" />
            <FaInstagram size={26} className="text-pink-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecLogoSection;
