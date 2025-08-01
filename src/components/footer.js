import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="w-full fixed bottom-0 left-0 right-0 z-30 bg-white p-3 shadow-[0_-4px_8px_rgba(0,0,0,0.1)]">
        <div className="w-full flex justify-between gap-2">
          <Link
            href="#"
            className="w-[40%] flex items-center justify-center gap-1.5 shadow-lg bg-blue-600 text-white px-2 py-2 rounded-sm text-[13px] font-medium "
          >
            <FaPhoneAlt className="text-lg" />
            Call Now
            <span className="text-base">
              <MdOutlineKeyboardArrowRight />
            </span>
          </Link>

          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[40%] flex items-center justify-center shadow-lg gap-1.5 bg-green-600 text-white px-2 py-2 rounded-sm text-[13px] font-medium"
          >
            <FaWhatsapp className="text-lg" />
            Chat Now
            <span className="text-base">
              <MdOutlineKeyboardArrowRight />
            </span>
          </Link>

          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[15%] flex items-center justify-center rounded-sm text-[13px] font-medium"
          >
            <Image src="/mapLogo.png" alt="map" height={24} width={24} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
