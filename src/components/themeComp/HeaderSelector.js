"use client";
import Image from "next/image";

export default function HeaderSelector({ items = [], value, onChange }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map((it) => {
        const active = value === it.id;
        return (
          <button
            key={it.id}
            type="button"
            onClick={() => onChange(it.id)}
            className={`relative rounded-xl border p-2 bg-white hover:border-pink-400
                       ${
                         active
                           ? "border-pink-500 ring-1 ring-pink-200"
                           : "border-gray-200"
                       }`}
          >
            <div className="flex justify-end mb-2">
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  active ? "border-[#DC1D60]" : "border-gray-400"
                }`}
              >
                {active && (
                  <div className="w-2 h-2 rounded-full bg-[#DC1D60]" />
                )}
              </div>
            </div>
            <div className="w-full h-24 rounded-sm overflow-hidden bg-gray-50 relative">
              <Image
                src={it.thumb}
                alt="Header"
                fill
                sizes="50vw"
                className="object-cover object-top"
              />
            </div>
          </button>
        );
      })}
    </div>
  );
}
