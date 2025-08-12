"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa6";
import { RiDraggable } from "react-icons/ri";
import { HiOutlineDotsVertical } from "react-icons/hi";

const samplePinned = [
  {
    id: "p1",
    name: "Floral Print Fit & Flare Maxi Dress",
    category: "Ethnic wear",
    price: 757,
    img: "/itemImg1.png",
  },
  {
    id: "p2",
    name: "Women Ethnic Motifs Embroidered Fit & Flare Dress",
    category: "Ethnic wear",
    price: 4599,
    img: "/itemImg1.png",
  },
  {
    id: "p3",
    name: "Women Checked Cotton Fit & Flare Maxi Dresses",
    category: "Ethnic wear",
    price: 660,
    img: "/itemImg1.png",
  },
  {
    id: "p4",
    name: "Georgette Maxi Ethnic Dresses With Dupatta",
    category: "Ethnic wear",
    price: 2479,
    img: "/itemImg1.png",
  },
];

export default function PinnedToHomepage() {
  const [items, setItems] = useState(samplePinned);
  const [openMenuId, setOpenMenuId] = useState(null);

  useEffect(() => {
    const onDown = (e) => {
      const el = e.target.closest("[data-menu-root]");
      if (!el) setOpenMenuId(null);
    };
    const onKey = (e) => e.key === "Escape" && setOpenMenuId(null);
    document.addEventListener("mousedown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const unpin = (id) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
    setOpenMenuId(null);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold flex items-center gap-2">
          Pin to homepage
          <Link
            href="https://www.youtube.com/embed/NMeEDsiehNg?si=Dh8w5XQM2ti0hT7W"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600"
            aria-label="Help video on YouTube"
          >
            <FaYoutube size={22} />
          </Link>
        </div>
        <div className="text-sm text-gray-600">{items.length} Item</div>
      </div>

      {items.map((p) => (
        <div
          key={p.id}
          className="relative bg-[#FCFCFC] border border-gray-200 rounded-xl px-3 py-3"
        >
          <div className="flex items-center gap-3">
            <span className="text-gray-400 shrink-0 cursor-move">
              <RiDraggable size={20} />
            </span>

            <div className="relative h-20 w-20 rounded-md overflow-hidden bg-gray-100 shrink-0">
              <Image
                src={p.img}
                alt={p.name}
                fill
                className="object-cover object-top"
              />
            </div>

            <div className="min-w-0 flex-1 flex justify-between">
              <div>
                <span className="text-[11px] font-medium bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                  {p.category}
                </span>
                <h4 className="text-sm font-medium text-gray-800 mt-1 line-clamp-2">
                  {p.name}
                </h4>
                <div className="text-[15px] font-semibold mt-0.5">
                  ₹{p.price}
                </div>
              </div>
              <div className="relative shrink-0 " data-menu-root>
                <button
                  onClick={() =>
                    setOpenMenuId((cur) => (cur === p.id ? null : p.id))
                  }
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
                  aria-label="More options"
                >
                  <HiOutlineDotsVertical size={18} />
                </button>

                <div
                  className={`absolute right-0 top-8 z-20 transition-all ${
                    openMenuId === p.id
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-1 pointer-events-none"
                  }`}
                >
                  <div className="bg-white shadow-lg rounded-xl border border-gray-100 overflow-hidden">
                    <button
                      onClick={() => unpin(p.id)}
                      className="block w-full text-left text-sm px-4 py-2 hover:bg-gray-50/50 whitespace-nowrap cursor-pointer"
                    >
                      Unpin Product
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {items.length === 0 && (
        <div className="text-center text-sm text-gray-500 py-10">
          No pinned products.
        </div>
      )}
    </div>
  );
}
