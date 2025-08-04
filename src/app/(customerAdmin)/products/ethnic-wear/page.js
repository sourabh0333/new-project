"use client";
import { useState } from "react";
import { FiSearch, FiMoreVertical } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa6";
import { IoIosAdd } from "react-icons/io";

const initialProducts = [
  {
    id: "0001",
    name: "Women Checked Cotton Maxi Dresses",
    price: "₹660",
    status: "Disable",
    image: "/itemImg1.png",
  },
  {
    id: "0002",
    name: "Georgette Maxi Ethnic Dupatta",
    price: "₹2,479",
    status: "Enable",
    image: "/itemImg1.png",
  },
  {
    id: "0003",
    name: "Print Keyhole Neck Chiffon Maxi Dress",
    price: "₹879",
    status: "Enable",
    image: "/itemImg1.png",
  },
  {
    id: "0004",
    name: "Girls Floral Printed Crepe Sheath Dress",
    price: "₹439",
    status: "Out of Stock",
    image: "/itemImg1.png",
  },
  {
    id: "0005",
    name: "Floral Print Fit & Flare Maxi Dress",
    price: "₹757",
    status: "Enable",
    image: "/itemImg1.png",
  },
];

export default function EthnicWear() {
  const [activeTab, setActiveTab] = useState("Enable");
  const [searchQuery, setSearchQuery] = useState("");
  const [openSearch, setOpenSearch] = useState(false);
  const [products, setProducts] = useState(initialProducts);
  const [openDropdown, setOpenDropdown] = useState(null);

  const updateStatus = (id, newStatus) => {
    const updated = products.map((product) =>
      product.id === id ? { ...product, status: newStatus } : product
    );
    setProducts(updated);
    setOpenDropdown(null);
  };

  const filtered = products.filter((p) => {
    const matchesStatus = activeTab === "All" || p.status === activeTab;
    const matchesSearch = p.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getBadge = (status) => {
    switch (status) {
      case "Disable":
        return (
          <span className="px-2 py-0.5 bg-gray-300 text-xs rounded text-black">
            Disable
          </span>
        );
      case "Out of Stock":
        return (
          <span className="px-2 py-0.5 bg-red-500 text-xs rounded text-white">
            Out of Stock
          </span>
        );
      case "Enable":
        return (
          <span className="px-2 py-0.5 bg-green-500 text-xs rounded text-white">
            In Stock
          </span>
        );
      default:
        return null;
    }
  };

  const getDropdownOptions = () => {
    if (activeTab === "Enable")
      return ["Edit", "Disable", "Out of Stock", "Delete"];
    if (activeTab === "Disable") return ["Enable", "Out of Stock", "Delete"];
    if (activeTab === "Out of Stock")
      return ["Edit", "Disable", "In Stock", "Delete"];
    return ["Edit", "Disable", "Out of Stock", "Delete"];
  };

  return (
    <div className="pb-8">
      <div className="flex items-center justify-between mb-3">
        <div className="text-lg font-semibold flex items-center gap-2">
          Ethnic Wear
          <span className="text-red-600 text-sm">
            <FaYoutube size={24} />
          </span>
        </div>
        {/* <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1.5 rounded-sm cursor-pointer flex items-center gap-1">
          <IoIosAdd size={18} /> Add
        </button> */}
      </div>

      <div className="flex items-center gap-3 text-sm border-b border-gray-200 pb-2 mb-3">
        {["Enable", "Disable", "Out of Stock", "All"].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setOpenDropdown(null);
            }}
            className={`pb-0.5 text-sm font-medium cursor-pointer ${
              activeTab === tab
                ? "text-pink-600 border-b-2 border-pink-600"
                : "text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
        <div className="ml-auto flex items-center">
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
          {filtered.length} Item
        </div>
      </div>

      {/* <div className="w-full text-sm text-gray-600 mb-2 text-end">
        {filtered.length} Item
      </div> */}

      <div className="space-y-3">
        {filtered.map((product, index) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-lg px-2 py-2.5 relative"
          >
            <div className="w-full flex gap-4 items-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-22 object-cover rounded"
              />
              <div className="w-full gap-2 flex justify-between items-start">
                <div>
                  <p className="text-[9px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded font-medium w-fit mb-1">
                    Code:{product.id}
                  </p>
                  <p className="text-sm font-medium mb-0.5 line-clamp-2">
                    {product.name}
                  </p>
                  <div className="flex items-center gap-3">
                    <p className="font-semibold text-gray-800">
                      {product.price}
                    </p>
                    {getBadge(product.status)}
                  </div>
                </div>

                <div className="relative">
                  <FiMoreVertical
                    className="text-gray-600 cursor-pointer"
                    onClick={() =>
                      setOpenDropdown(openDropdown === index ? null : index)
                    }
                  />
                  {openDropdown === index && (
                    <div className="absolute z-10 right-0 mt-2 bg-white border border-gray-50 shadow-md rounded py-1 text-sm w-36">
                      {getDropdownOptions().map((option) => (
                        <div
                          key={option}
                          onClick={() => {
                            if (
                              [
                                "Enable",
                                "Disable",
                                "Out of Stock",
                                "In Stock",
                              ].includes(option)
                            ) {
                              updateStatus(
                                product.id,
                                option === "In Stock" ? "Enable" : option
                              );
                            }
                            setOpenDropdown(null);
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
