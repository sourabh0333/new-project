import ProductBody from "@/components/ProductComponents/productBody";
import ProductFooter from "@/components/ProductComponents/productFooter";
import ProductLogo from "@/components/ProductComponents/productLogo";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

export default function Product1() {
  return (
    <>
      <div className="max-w-sm mx-auto h-screen bg-white mt-10 pb-5">
        <div className="flex gap-3 items-center p-4 text-black">
          <Link href="#" className="cursor-pointer">
            <BiArrowBack size={20} />
          </Link>
          <p className="font-semibold">Setup your Dukaan</p>
        </div>
        <ProductLogo />
        <ProductBody />
        <ProductFooter />
      </div>
    </>
  );
}
