import ProductDetailsLogoS from "@/components/ProductComponents/productDetails/productDetailsLogoS";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import { MdOutlineShare } from "react-icons/md";

export default function ProductDetails() {
  return (
    <>
      <div className="max-w-sm mx-auto h-screen bg-white mt-10">
        <div className="flex justify-between items-center p-4 text-black">
          <span className="flex items-center gap-3">
            <Link href="#" className="cursor-pointer">
              <BiArrowBack size={20} />
            </Link>
            <p className="font-semibold">Setup your Dukaan</p>
          </span>
          <Link
            href="#"
            className="bg-gray-100 rounded-full p-2 flex justify-center items-center"
          >
            <MdOutlineShare />
          </Link>
        </div>
        <ProductDetailsLogoS />
      </div>
    </>
  );
}
