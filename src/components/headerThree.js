"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoShareSocial } from "react-icons/io5";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import Sidebar from "@/components/Sidebar";

const HeaderThree = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white shadow pb-3 relative">
      {/* Sidebar */}
      <Sidebar isOpen={open} onClose={() => setOpen(false)} />

      {/* Header / Cover */}
      <div className="w-full relative h-40">
        <Image
          src="/headerImg.jpg"
          alt="Header Image"
          fill
          className="object-cover"
          priority
        />
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="absolute top-4 left-4 p-2 bg-gray-100 rounded-full shadow hover:bg-gray-200"
        >
          <FiMenu />
        </button>
      </div>

      {/* Content under header */}
      <div className="relative px-4 mt-2 z-10">
        <div className="absolute -top-11 left-4 w-20 h-20 flex justify-center items-center border-[3px] border-white overflow-hidden shadow bg-white rounded-full">
          <Image
            src="/rounded-logo.png"
            alt="Logo"
            width={110}
            height={150}
            className="object-contain rounded-full"
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
              Ribbons &amp; Balloons
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

export default HeaderThree;
