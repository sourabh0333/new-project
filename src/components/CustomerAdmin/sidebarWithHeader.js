"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { FaShareAlt } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function SidebarWithHeader({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <div className="flex h-screen">
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white text-black shadow-lg z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-6 py-3.5 font-bold text-lg border-b border-b-gray-200">
          Pizza Hut
        </div>

        <nav className="flex flex-col space-y-4 px-4 py-3.5 text-[15px]">
          <Link
            href="/home"
            className={`${isActive("/home") && "font-semibold text-black"}`}
            onClick={() => setSidebarOpen(false)}
          >
            Dashboard
          </Link>

          <Link
            href="/shop"
            className={`${isActive("/shop") && "font-semibold text-black"}`}
            onClick={() => setSidebarOpen(false)}
          >
            Shop
          </Link>

          <Link
            href="/profile"
            className={`${isActive("/profile") && "font-semibold text-black"}`}
            onClick={() => setSidebarOpen(false)}
          >
            Profile
          </Link>

          <Link
            href="/categories"
            className={`${
              isActive("/categories") && "font-semibold text-black"
            }`}
            onClick={() => setSidebarOpen(false)}
          >
            Categories
          </Link>

          <div className="relative">
            <button
              className="w-full flex items-center justify-between text-[#db0d5f] bg-[#db0d5f]/10 font-semibold px-3 py-2 rounded cursor-pointer"
              onClick={() => setProductsOpen(!productsOpen)}
            >
              Products
              <MdKeyboardArrowDown
                className={`transition-transform duration-500 ${
                  productsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`transition-all duration-500 transform origin-top-left overflow-hidden ${
                productsOpen
                  ? "max-h-40 opacity-100 scale-100 translate-y-0"
                  : "max-h-0 opacity-0 scale-95 -translate-y-2"
              }`}
            >
              <div className="mt-1 space-y-1 rounded py-1 bg-white ">
                <Link
                  href="/products/ethnic-wear"
                  className={`flex items-center gap-2 px-3 py-1 rounded transition hover:bg-[#db0d5f]/10 ${
                    isActive("/products/ethnic-wear")
                      ? "bg-[#db0d5f]/10 text-[#db0d5f]"
                      : ""
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <span
                    className={`block h-3 w-3 border-2 ${
                      isActive("/products/ethnic-wear")
                        ? "border-[#db0d5f]"
                        : ""
                    } rounded-full`}
                  ></span>
                  <p className="m-0 p-0">Ethnic Wear</p>
                </Link>
                <Link
                  href="/products/pinned-to-homepage"
                  className={`flex items-center gap-2 px-3 py-1 rounded-md transition hover:bg-[#db0d5f]/10 ${
                    isActive("/products/pinned-to-homepage")
                      ? " bg-[#db0d5f]/15 text-[#db0d5f]"
                      : ""
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <span
                    className={`block h-3 w-3 border-2 ${
                      isActive("/products/pinned-to-homepage")
                        ? "border-[#db0d5f]"
                        : ""
                    } rounded-full`}
                  ></span>
                  <p className="m-0 p-0">Pinned to Homepage</p>
                </Link>
                <Link
                  href="/products/western-wear"
                  className={`flex items-center gap-2 px-3 py-1 rounded-md transition hover:bg-[#db0d5f]/10 ${
                    isActive("/products/western-wear")
                      ? "bg-[#db0d5f]/15 text-[#db0d5f]"
                      : ""
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <span
                    className={`block h-3 w-3 border-2 ${
                      isActive("/products/western-wear")
                        ? "border-[#db0d5f]"
                        : ""
                    } rounded-full`}
                  ></span>
                  <p className="m-0 p-0">Western Wear</p>
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/settings"
            className={`${isActive("/settings") && "font-semibold text-black"}`}
            onClick={() => setSidebarOpen(false)}
          >
            Settings
          </Link>

          <Link
            href="/customer"
            className={`${isActive("/customer") && "font-semibold text-black"}`}
            onClick={() => setSidebarOpen(false)}
          >
            Customer
          </Link>

          <Link
            href="/theme"
            className={`${isActive("/theme") && "font-semibold text-black"}`}
            onClick={() => setSidebarOpen(false)}
          >
            Theme
          </Link>

          <button className="text-left text-[#db0d5f] font-semibold mt-2">
            Logout
          </button>
        </nav>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-4 py-3 bg-white shadow-sm z-40">
          <div className="flex items-center space-x-3 text-black">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-xl focus:outline-none cursor-pointer"
            >
              <FiMenu />
            </button>
            <span className="text-base font-semibold">Pizza Hut</span>
          </div>

          {/* <button className="bg-blue-500 text-white px-2.5 py-1.5 text-sm rounded flex items-center gap-2 hover:bg-blue-600 transition">
            + Add
          </button> */}
          {/* <div
            className={`flex items-center bg-white transition-all duration-300 ease-in-out ${
              openSearch ? "w-24 pl-3" : "w-9 justify-center"
            }`}
          >
            <FiSearch
              className="text-gray-600 cursor-pointer"
              onClick={() => setOpenSearch(!openSearch)}
              size={16}
            />
            {openSearch && (
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="bg-transparent text-sm outline-none ml-2 w-full"
              />
            )}
          </div> */}
        </header>

        <main className="p-3 bg-white h-screen text-black">{children}</main>
      </div>
    </div>
  );
}
