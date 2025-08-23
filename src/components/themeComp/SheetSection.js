"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import BottomSheet from "./BottomSheet";
import { MdEdit } from "react-icons/md";
import HeaderSelector from "./HeaderSelector";
import ProductStyleSelector from "./ProductStyleSelector";
import CoverSelectorBody from "./CoverSelectorBody";

const isBlobOrData = (src) =>
  typeof src === "string" &&
  (src.startsWith("blob:") || src.startsWith("data:"));

export default function SheetSection({
  label,
  sheetTitle,
  body,
  options = [],
  initialSelectedId = null,
  previewHeight = 144,
  previewMode = "id",
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(initialSelectedId);
  const [temp, setTemp] = useState(initialSelectedId);

  const currentThumb = useMemo(() => {
    if (previewMode === "url") {
      return typeof selected === "string" && selected ? selected : null;
    }
    const found = options.find((o) => o.id === selected);
    return found?.thumb ?? null;
  }, [previewMode, selected, options]);

  const openSheet = () => {
    setTemp(selected ?? null);
    setOpen(true);
  };

  const handleDone = () => {
    setSelected(temp ?? null);
    setOpen(false);
  };

  const bodyEl =
    body === "header" ? (
      <HeaderSelector items={options} value={temp} onChange={setTemp} />
    ) : body === "product" ? (
      <ProductStyleSelector items={options} value={temp} onChange={setTemp} />
    ) : (
      <CoverSelectorBody value={temp} onChange={setTemp} />
    );

  return (
    <div className="bg-white border border-gray-200 rounded-sm shadow-sm">
      <div className="flex items-center justify-between px-3 py-2 bg-gray-50 border-b border-gray-100 rounded-t-sm">
        <p className="text-sm font-medium">{label}</p>
        <button
          type="button"
          onClick={openSheet}
          className="p-1 rounded hover:bg-gray-100 text-blue-600"
          aria-label={`Edit ${label}`}
        >
          <MdEdit size={16} />
        </button>
      </div>

      <div className="p-3">
        <div
          className={`w-full rounded-sm overflow-hidden grid place-items-center relative ${
            currentThumb
              ? "border-0"
              : "bg-gray-50/50 border border-gray-100/50"
          }`}
          style={{ height: previewHeight }}
        >
          {currentThumb ? (
            previewMode === "url" ? (
              <Image
                src={currentThumb}
                alt={`Selected ${label}`}
                fill
                sizes="100vw"
                className="object-cover object-top"
                unoptimized={isBlobOrData(currentThumb)}
              />
            ) : (
              <Image
                src={currentThumb}
                alt={`Selected ${label}`}
                fill
                sizes="100vw"
                className="object-cover object-top"
              />
            )
          ) : (
            <span className="text-gray-400 text-sm">
              No {label.toLowerCase()} selected
            </span>
          )}
        </div>
      </div>

      <BottomSheet
        open={open}
        title={sheetTitle}
        onClose={() => setOpen(false)}
        onDone={handleDone}
        doneLabel="Done"
      >
        {bodyEl}
      </BottomSheet>
    </div>
  );
}
