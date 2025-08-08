"use client";

import { useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Image from "next/image";

const headerOptions = [
  { id: 1, label: "", img: "/styleImg1.svg" },
  { id: 2, label: "", img: "/styleImg2.svg" },
  { id: 3, label: "", img: "/styleImg3.svg" },
  { id: 4, label: "", img: "/styleImg4.svg" },
];

export default function ProductStyle() {
  const [selected, setSelected] = useState(2);

  return (
    <div className="w-full h-screen bg-white px-4 py-4 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-4">
          <button>
            <MdOutlineKeyboardBackspace size={25} className="text-black" />
          </button>
          <h2 className="text-lg font-semibold text-black">
            Setup Your Product Style
          </h2>
        </div>

        <hr className="text-gray-300 my-5" />

        <div className="grid grid-cols-2 gap-4 text-black">
          {headerOptions.map((header) => (
            <div
              key={header.id}
              onClick={() => setSelected(header.id)}
              className={`border rounded-lg p-2 cursor-pointer ${
                selected === header.id
                  ? "border-[#DC1D60] shadow-md"
                  : "border-gray-300"
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-medium">{header.label}</h3>
                <div
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    selected === header.id
                      ? "border-[#DC1D60]"
                      : "border-gray-400"
                  }`}
                >
                  {selected === header.id && (
                    <div className="w-2 h-2 rounded-full bg-[#DC1D60]" />
                  )}
                </div>
              </div>
              <Image
                src={header.img}
                alt={header.label}
                width={500}
                height={300}
                className="rounded"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-[#DC1D60] text-white py-2 rounded font-medium mt-6"
      >
        Continue
      </button>
    </div>
  );
}
