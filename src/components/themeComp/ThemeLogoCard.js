"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { MdEdit } from "react-icons/md";

export default function ThemeLogoCard({ title = "Change Logo" }) {
  const inputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const handlePick = () => inputRef.current?.click();
  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  return (
    <div className=" border-gray-200 rounded-sm shadow-sm">
      <div className="flex items-center justify-between px-3 py-2 bg-gray-50 border-b border-gray-100 rounded-t-sm">
        <p className="text-sm font-semibold text-gray-800">{title}</p>
        <button
          onClick={handlePick}
          className="p-1 rounded text-blue-600"
          aria-label="Edit logo"
        >
          <MdEdit size={16} />
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFile}
        />
      </div>

      <div className="p-3">
        <div
          className={`w-full h-[120px] aspect-square overflow-hidden ${
            preview
              ? "border-0"
              : "bg-gray-50/50 border border-gray-100/50 rounded-sm"
          }`}
        >
          {preview ? (
            <div className="w-full h-full relative">
              <Image
                src={preview}
                alt="Logo preview"
                fill
                className="object-contain object-left-top"
              />
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-gray-400 text-sm">No logo selected</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
