"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RiDraggable } from "react-icons/ri";
import { IoIosAdd } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";

const initialCategories = [
  { name: "Ethnic Wear", enabled: true },
  { name: "Western Wear", enabled: true },
  { name: "Fusion Wear", enabled: true },
  { name: "Innerwear & Sleepwear", enabled: true },
  { name: "Activewear", enabled: true },
  { name: "Winter Wear", enabled: true },
  { name: "Party & Occasion Wear", enabled: true },
  { name: "Work & Office Wear", enabled: false },
  { name: "Maternity Wear", enabled: false },
  { name: "Work & Office Wear", enabled: false },
  { name: "Accessories", enabled: false },
];

export default function Categories() {
  const [categories, setCategories] = useState(initialCategories);
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);

  const filtered = categories.filter((cat) => {
    const matchesSearch = cat.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    if (activeTab === "All") return matchesSearch;
    if (activeTab === "Enable") return cat.enabled && matchesSearch;
    if (activeTab === "Disable") return !cat.enabled && matchesSearch;
    return true;
  });

  const toggleCategory = (index) => {
    const updated = [...categories];
    updated[index].enabled = !updated[index].enabled;
    setCategories(updated);
  };

  return (
    <div className="">
      <div className="flex items-center justify-between mb-5">
        <div className="text-xl font-semibold flex items-center gap-2">
          Categories
          <span className="text-red-600 text-sm">
            <FaYoutube size={18} />
          </span>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1.5 rounded-sm cursor-pointer flex items-center gap-1">
          <IoIosAdd size={18} /> Add
        </button>
      </div>

      <div className="flex items-center gap-4 text-sm border-b border-gray-200 pb-3 mb-6">
        {["Enable", "Disable", "All"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-0.5 cursor-pointer text-sm font-medium ${
              activeTab === tab
                ? "text-pink-600 border-b-2 border-pink-600"
                : "text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
        <div className="ml-auto flex items-center">
          <div
            className={`flex items-center bg-white transition-all duration-300 ease-in-out p-2 ${
              open ? "w-32 pl-3 " : "w-9 justify-center"
            }`}
          >
            <FiSearch
              className="text-gray-600 cursor-pointer"
              onClick={() => setOpen(!open)}
              size={16}
            />
            {open && (
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="bg-transparent text-sm outline-none ml-2 w-full"
              />
            )}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {filtered.map((cat, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white px-3 py-2 rounded-md border border-gray-200"
          >
            <div className="flex items-center gap-2">
              <span className="cursor-move text-gray-600">
                <RiDraggable />
              </span>
              <p className="text-sm font-medium">{cat.name}</p>
            </div>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={cat.enabled}
                onChange={() => toggleCategory(index)}
                className="sr-only peer"
              />
              <div className="w-10 h-5 bg-gray-200 peer-checked:bg-blue-500 rounded-full peer peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-[1.5px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all relative" />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
