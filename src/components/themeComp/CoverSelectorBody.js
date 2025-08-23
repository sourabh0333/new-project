"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";

const isBlobOrData = (src) =>
  typeof src === "string" &&
  (src.startsWith("blob:") || src.startsWith("data:"));

export default function CoverSelectorBody({ value = null, onChange }) {
  const [slots, setSlots] = useState([null, null, null, null]);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const seededRef = useRef(false);

  useEffect(() => {
    if (seededRef.current) return;
    if (!value) {
      seededRef.current = true;
      return;
    }
    setSlots((prev) => {
      const copy = [...prev];
      copy[0] = value;
      return copy;
    });
    seededRef.current = true;
  }, [value]);

  useEffect(() => {
    const first = slots.find(Boolean) || null;
    onChange?.(first);
  }, [slots, onChange]);

  const pickFor = (i) => inputRefs[i].current?.click();

  const onFile = (e, i) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setSlots((prev) => {
      const copy = [...prev];
      if (copy[i] && copy[i].startsWith("blob:")) URL.revokeObjectURL(copy[i]);
      copy[i] = url;
      return copy;
    });
  };

  const removeAt = (i) =>
    setSlots((prev) => {
      const copy = [...prev];
      if (copy[i] && copy[i].startsWith("blob:")) URL.revokeObjectURL(copy[i]);
      copy[i] = null;
      return copy;
    });

  useEffect(() => {
    return () => {
      slots.forEach((u) => {
        if (u && u.startsWith("blob:")) URL.revokeObjectURL(u);
      });
    };
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        {slots.map((slot, i) => (
          <div
            key={i}
            className="relative rounded-lg border-2 border-dashed border-gray-300 h-24 overflow-hidden bg-gray-50"
          >
            {slot ? (
              <>
                <div className="absolute inset-0">
                  <Image
                    src={slot}
                    alt={`Cover ${i + 1}`}
                    fill
                    sizes="50vw"
                    className="object-cover"
                    unoptimized={isBlobOrData(slot)}
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeAt(i)}
                  className="absolute top-1 right-1 bg-red-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full cursor-pointer"
                  aria-label="Remove"
                >
                  <RxCross2 />
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => pickFor(i)}
                className="w-full h-full grid place-items-center text-2xl text-gray-400"
                aria-label={`Add image ${i + 1}`}
              >
                +
              </button>
            )}

            <input
              ref={inputRefs[i]}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => onFile(e, i)}
            />
          </div>
        ))}
      </div>
    </>
  );
}
