import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Product3Footer = () => {
  return (
    <>
      <div className="max-w-[352px] mx-auto fixed bottom-3 left-0 right-0 z-30 bg-[#00C652] p-2 px-3 rounded-md shadow-[1px_4px_8px_rgba(0,0,0,0.2)]">
        <div className="w-full flex justify-between gap-2">
          <div className="flex items-center gap-2 text-white">
            <p className="font-normal text-sm">8 items</p>|
            <h4 className="font-semibold text-sm">₹588</h4>
          </div>
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center shadow-lg gap-1.5 bg-white text-[#00C652] px-2 py-1.5 rounded-md text-[13px] font-medium"
          >
            <FaWhatsapp className="text-lg" />
            Placed Order
          </Link>
        </div>
      </div>
    </>
  );
};

export default Product3Footer;
