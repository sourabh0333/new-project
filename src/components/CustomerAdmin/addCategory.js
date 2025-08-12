"use client";
import { useEffect, useRef } from "react";
import { FiArrowLeft } from "react-icons/fi";

export default function AddCategory({
  open,
  title = "Add Category",
  onClose,
  onSave,
  value,
  onChange,
  errorMessage,
}) {
  const panelRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    function handleDown(e) {
      if (!panelRef.current) return;
      if (open && !panelRef.current.contains(e.target)) onClose();
    }
    if (open) document.addEventListener("mousedown", handleDown);
    return () => document.removeEventListener("mousedown", handleDown);
  }, [open, onClose]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-200 z-[70] ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />
      <section
        ref={panelRef}
        className={`fixed left-0 right-0 bottom-0 z-[71] bg-white rounded-t-2xl shadow-2xl
        transition-transform duration-300 will-change-transform
        ${open ? "translate-y-0" : "translate-y-full"}`}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className="flex items-center gap-2 px-4 py-3 border-b border-b-gray-200">
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 -ml-2 rounded cursor-pointer"
          >
            <FiArrowLeft />
          </button>
          <h3 className="text-base font-medium">{title}</h3>
        </div>

        <div className="p-4">
          <label className="block text-sm font-semibold mb-2">
            Category Name <span className="text-red-600">*</span>
          </label>
          <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Category Name"
            className={`w-full border rounded-md px-3 py-2.5 text-sm outline-none ${
              errorMessage ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errorMessage ? (
            <p className="text-xs text-red-600 mt-1">{errorMessage}</p>
          ) : null}

          <button
            onClick={onSave}
            className="w-full mt-5 mb-3 rounded-md bg-[#DC1D60] hover:bg-[#DC1D60]/90 cursor-pointer transition-colors duration-300 text-white font-medium py-2.5"
          >
            Save
          </button>
        </div>
      </section>
    </>
  );
}
