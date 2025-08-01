import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Product2Footer = () => {
  return (
    <>
      <div className="max-w-[342px] mx-auto fixed bottom-3 left-0 right-0 z-30 bg-white py-3 px-5 rounded-full shadow-[1px_4px_8px_rgba(0,0,0,0.2)]">
        <div className="w-full flex justify-between">
          <div className="text-black">
            <p className="font-normal text-sm">8 items</p>
            <h4 className="font-semibold text-sm">Total: ₹588</h4>
          </div>
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center shadow-lg gap-1.5 bg-[#3BA72F] text-white px-3 py-2 rounded-full text-[13px] font-medium"
          >
            <FaWhatsapp className="text-lg" />
            Placed Order
          </Link>
        </div>
      </div>
    </>
  );
};

export default Product2Footer;
