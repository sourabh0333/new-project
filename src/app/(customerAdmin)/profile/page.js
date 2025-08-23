"use client";

import { useState } from "react";
import { FaYoutube, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

import { useSwipeable } from "react-swipeable";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("personal");
  const [mobile, setMobile] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [sameAsMobile, setSameAsMobile] = useState(false);

  const handleToggle = () => {
    const newValue = !sameAsMobile;
    setSameAsMobile(newValue);
    if (newValue) {
      setWhatsapp(mobile);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (activeTab === "personal") setActiveTab("business");
    },
    onSwipedRight: () => {
      if (activeTab === "business") setActiveTab("personal");
    },
    trackMouse: true,
  });

  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold text-black">Profile</h2>
      <div className="flex border-b border-gray-200 ">
        <button
          onClick={() => setActiveTab("personal")}
          className={`flex-1 text-center py-2 text-sm font-medium ${
            activeTab === "personal"
              ? "text-pink-600 border-b-2 border-pink-600"
              : "text-gray-500"
          }`}
        >
          Personal Details
        </button>
        <button
          onClick={() => setActiveTab("business")}
          className={`flex-1 text-center py-2 text-sm font-medium ${
            activeTab === "business"
              ? "text-pink-600 border-b-2 border-pink-600"
              : "text-gray-500"
          }`}
        >
          Business Details
        </button>
      </div>

      <div {...handlers} className="h-full">
        {activeTab === "business" && (
          <form className="space-y-4 text-black p-4">
            <div className="relative w-full">
              <label className="text-sm font-medium">Sub Category Type</label>
              <select className="w-full appearance-none border border-gray-300 px-3 py-2 rounded mt-1 pr-10 text-sm focus:outline-none ">
                <option>Cake Shop1</option>
                <option>Cake Shop2</option>
                <option>Cake Shop3</option>
                <option>Cake Shop4</option>
              </select>

              {/* Icon container with absolute positioning */}
              <div className="pointer-events-none absolute top-[38px] right-3 text-gray-500">
                <FiChevronDown className="w-4 h-4" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Business Name</label>
              <input
                type="text"
                placeholder="Full Name Fetch"
                className="w-full border border-gray-300 px-3 py-2 rounded mt-1 focus:outline-0"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Slogan Line</label>
              <input
                type="text"
                placeholder="Slogan"
                className="w-full border border-gray-300 px-3 py-2 rounded mt-1 focus:outline-0"
              />
            </div>

            <div>
              <label className="text-sm font-medium flex items-center gap-2">
                YouTube Channel Link
              </label>
              <div className="relative mt-1">
                <input
                  type="url"
                  className="w-full pr-10 border border-gray-300 px-3 py-2 rounded focus:outline-0"
                  placeholder="Add Link"
                />
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <FaYoutube className="text-red-600 text-2xl" />
                </span>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">
                Instagram Account Link
              </label>
              <div className="relative mt-1">
                <input
                  type="url"
                  className="w-full pr-10 border border-gray-300 px-3 py-2 rounded focus:outline-0"
                  placeholder="Add Link"
                />
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <FaInstagram className="text-pink-500 text-2xl" />
                </span>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Add Address Link</label>
              <div className="relative mt-1">
                <input
                  type="url"
                  className="w-full pr-10 border border-gray-300 px-3 py-2 rounded focus:outline-0"
                  placeholder="Add Link"
                />
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <img
                    src="/mapLogo.png"
                    alt="Google Maps"
                    className="w-5 h-6"
                  />
                </span>
              </div>
            </div>

            {/* Continue Button */}
            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-2 rounded font-medium cursor-pointer"
            >
              Update
            </button>
          </form>
        )}

        {activeTab === "personal" && (
          <form className="space-y-4 text-black p-4">
            <div>
              <label className="text-sm font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 bg-gray-100 px-3 py-2 rounded mt-1 focus:outline-0"
              />
            </div>

            <div>
              <label className="text-sm font-medium">User Name</label>
              <input
                type="text"
                placeholder="User Name"
                className="w-full border border-gray-300 bg-gray-100 px-3 py-2 rounded mt-1 focus:outline-0"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Mobile Number</label>
              <input
                type="Number"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => {
                  setMobile(e.target.value);
                  if (sameAsMobile) setWhatsapp(e.target.value);
                }}
                className="w-full border border-gray-300 px-3 py-2 rounded mt-1 focus:outline-0"
              />
            </div>

            {/* WhatsApp with toggle */}
            <div>
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium">WhatsApp Number</label>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500">
                    Same as Mobile Number
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={sameAsMobile}
                      onChange={handleToggle}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-pink-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-4"></div>
                  </label>
                </div>
              </div>
              <input
                type="number"
                placeholder="+91"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded mt-1 focus:outline-0"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Email ID</label>
              <input
                type="email"
                placeholder="Enter your Email ID"
                className="w-full border border-gray-300 px-3 py-2 rounded mt-1 focus:outline-0"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Address</label>
              <textarea
                placeholder="Enter your Address"
                rows={3}
                className="w-full border border-gray-300 px-3 py-2 rounded text-sm mt-1 focus:outline-none resize-none"
              />
            </div>

            <div className="-mt-2">
              <label className="text-sm font-medium">Change Password</label>
              <input
                type="password"
                placeholder="Change Password"
                className="w-full border border-gray-300 px-3 py-2 rounded mt-1 focus:outline-0"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-2 rounded font-medium cursor-pointer"
            >
              Update
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
