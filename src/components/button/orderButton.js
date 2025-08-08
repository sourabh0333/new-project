import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function OrderButton() {
  return (
    <>
      <Link
        href="#"
        className="flex justify-center items-center text-center bg-[#e8f2ec] w-20 text-green-600 font-bold text-[12px] px-2 py-1 rounded-sm"
      >
        <FaWhatsapp size={16} className="mr-1" />
        Order
      </Link>
    </>
  );
}
