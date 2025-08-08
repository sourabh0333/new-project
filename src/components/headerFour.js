import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoShareSocial } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";

const HeaderFour = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 w-full bg-white py-3 px-3.5 flex justify-between items-center shadow-sm">
        {/* <Image src="/logo.png" alt="logo" height={120} width={120} /> */}
        <div>
          <h2 className="text-base font-semibold text-gray-800 leading-tight">
            Ribbons & Balloons
          </h2>
          <p className="text-sm text-gray-600">Slogan Here</p>
        </div>
        <div className="flex items-center gap-2">
          <FaYoutube size={34} className="text-red-500" />
          <Link href="#" className="cursor-pointer">
            <Image
              src="/instagramLogo.png"
              alt="instagram-logo"
              width={32}
              height={32}
            />
          </Link>

          <Link
            href="#"
            className="flex justify-center items-center bg-blue-500 text-2xl rounded-md px-2 py-1.5 cursor-pointer"
          >
            <span className="flex justify-between items-center gap-1.5 text-white text-sm">
              <IoShareSocial size={15} className="text-white font-bold" /> Share
            </span>
          </Link>
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
    </>
  );
};

export default HeaderFour;
