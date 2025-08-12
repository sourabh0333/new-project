"use client";

import { useState } from "react";
import { RiDraggable } from "react-icons/ri";
import { IoIosAdd } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import Link from "next/link";
import AddCategory from "@/components/CustomerAdmin/addCategory";

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

  // bottom sheet state
  const [sheetOpen, setSheetOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

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

  const openAddSheet = () => {
    setNewName("");
    setErrorMsg("");
    setSheetOpen(true);
  };

  const handleTyping = (val) => {
    setNewName(val);
    if (errorMsg && val.trim().length > 0) setErrorMsg("");
  };

  const handleSave = () => {
    const val = newName.trim();

    if (!val) {
      setErrorMsg("Please enter a name.");
      return;
    }

    const exists = categories.some(
      (c) => c.name.trim().toLowerCase() === val.toLowerCase()
    );
    if (exists) {
      setErrorMsg("Category already exists.");
      return;
    }

    setCategories((prev) => [{ name: val, enabled: true }, ...prev]);
    setSheetOpen(false);
  };

  return (
    <div className="">
      <div className="flex items-center justify-between mb-4">
        <div className="text-xl font-semibold flex items-center gap-2">
          Categories
          <Link
            href="https://www.youtube.com/embed/NMeEDsiehNg?si=Dh8w5XQM2ti0hT7W"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 text-sm cursor-pointer"
            aria-label="Help video on YouTube"
          >
            <FaYoutube size={24} />
          </Link>
        </div>
        <button
          onClick={openAddSheet}
          className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-2 py-1.5 rounded-sm cursor-pointer flex items-center justify-center"
        >
          <IoIosAdd size={18} />
          <span className="ml-1">Add</span>
        </button>
      </div>

      <div className="flex items-center gap-4 text-sm border-b border-gray-200 pb-3 mb-4">
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

        <div className="ml-auto flex text-sm text-gray-600 items-center">
          {filtered.length} Item
        </div>
      </div>

      <div className="space-y-3">
        {filtered.map((cat, index) => (
          <div
            key={`${cat.name}-${index}`}
            className="flex items-center justify-between bg-white px-2 py-2 rounded-md border border-gray-200"
          >
            <div className="flex items-center gap-1">
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
              <div className="w-10 h-5 bg-gray-200 peer-checked:bg-blue-500 rounded-full peer peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all relative" />
            </label>
          </div>
        ))}
      </div>

      <AddCategory
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
        onSave={handleSave}
        value={newName}
        onChange={handleTyping}
        errorMessage={errorMsg}
        title="Add Category"
      />
    </div>
  );
}
