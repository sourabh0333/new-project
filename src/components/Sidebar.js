"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FiX, FiChevronRight, FiChevronDown } from "react-icons/fi";

export default function Sidebar({ isOpen, onClose }) {
  const [open, setOpen] = useState({ categories: false, products: false });
  const panelRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    function handleClick(e) {
      if (!panelRef.current) return;
      if (isOpen && !panelRef.current.contains(e.target)) onClose();
    }
    if (isOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen, onClose]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-200 z-[60] ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />
      <aside
        ref={panelRef}
        className={`fixed top-0 left-0 h-full w-[280px] max-w-[85vw] bg-white shadow-lg z-[61]
        transition-transform duration-300 will-change-transform
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Sidebar menu"
      >
        <div className="flex items-center justify-between px-4 h-12 border-b border-gray-200">
          <span className="text-sm font-semibold">Kainat Boutique</span>
          <button
            onClick={onClose}
            aria-label="Close sidebar"
            className="p-2 rounded hover:bg-gray-100"
          >
            <FiX />
          </button>
        </div>

        <nav className="px-2 py-2 text-sm">
          <MenuItem href="/">Home</MenuItem>
          <MenuItem href="/dashboard">Dashboard</MenuItem>

          {/* Categories (collapsible) */}
          <Collapsible
            label="Categories"
            isOpen={open.categories}
            onToggle={() =>
              setOpen((s) => ({ ...s, categories: !s.categories }))
            }
          >
            <SubItem href="/categories/new">Add Category</SubItem>
            <SubItem href="/categories">All Categories</SubItem>
          </Collapsible>

          {/* Products (collapsible) */}
          <Collapsible
            label="Products"
            isOpen={open.products}
            onToggle={() => setOpen((s) => ({ ...s, products: !s.products }))}
          >
            <SubItem href="/products/new">Add Product</SubItem>
            <SubItem href="/products">All Products</SubItem>
          </Collapsible>

          <MenuItem href="/profile">Profile</MenuItem>
          <MenuItem href="/settings">Settings</MenuItem>
          <MenuItem href="/theme">Theme</MenuItem>

          <Link
            href="/logout"
            className="block px-3 py-2 rounded hover:bg-gray-100 text-red-600"
          >
            Logout
          </Link>
        </nav>
      </aside>
    </>
  );
}

function MenuItem({ href, children }) {
  return (
    <Link href={href} className="block px-3 py-2 rounded hover:bg-gray-100">
      {children}
    </Link>
  );
}

function Collapsible({ label, isOpen, onToggle, children }) {
  return (
    <div className="mb-1">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-3 py-2 rounded hover:bg-gray-100"
        aria-expanded={isOpen}
        aria-controls={`${label}-submenu`}
      >
        <span>{label}</span>
        {isOpen ? <FiChevronDown /> : <FiChevronRight />}
      </button>
      <div
        id={`${label}-submenu`}
        className={`pl-4 overflow-hidden transition-[max-height] duration-300 ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <ul className="py-1">{children}</ul>
      </div>
    </div>
  );
}

function SubItem({ href, children }) {
  return (
    <li>
      <Link
        href={href}
        className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700"
      >
        {children}
      </Link>
    </li>
  );
}
