"use client";

import { useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

export default function AddCustomer() {
  const [disposition, setDisposition] = useState("");
  return (
    <div className="px-4 py-4">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button>
          <MdOutlineKeyboardBackspace size={25} className="text-black" />
        </button>
        <h2 className="text-lg font-semibold text-black">Add Customer</h2>
      </div>

      <hr className="text-gray-300 my-2" />

      {/* Form */}
      <form className="space-y-4 text-black">
        {/* Business Name */}
        <div>
          <label className="text-sm font-semibold">Business Name</label>
          <input
            type="text"
            placeholder="Customer Name"
            className="w-full border border-gray-300 px-3 py-2 rounded mt-1 focus:outline-0"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="text-sm font-semibold">Phone Number</label>
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border border-gray-300 px-3 py-2 rounded mt-1 focus:outline-0"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-semibold">Email ID</label>
          <input
            type="email"
            placeholder="Email ID"
            className="w-full border border-gray-300 px-3 py-2 rounded mt-1 focus:outline-0"
          />
        </div>

        {/* Business Category */}
        <div className="relative">
          <label className="text-sm font-semibold">Business Category</label>
          <select className="w-full appearance-none border border-gray-300 px-3 py-2 rounded mt-1 focus:outline-none pr-8">
            <option value="">Category</option>
            <option value="it">IT</option>
            <option value="retail">Retail</option>
            <option value="service">Service</option>
          </select>

          {/* Dropdown Icon */}
          <div className="pointer-events-none absolute right-3 bottom-3 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold">Business Sub Category</label>
          <input
            type="text"
            placeholder="Sub Category"
            className="w-full border border-gray-300 px-3 py-2 rounded mt-1 focus:outline-0"
          />
        </div>

        {/* Disposition */}
        <div>
          {/* Disposition Select */}
          <div className="relative">
            <label className="text-sm font-semibold">Disposition</label>
            <select
              className="w-full appearance-none border border-gray-300 px-3 py-2 rounded mt-1 focus:outline-none pr-8"
              value={disposition}
              onChange={(e) => setDisposition(e.target.value)}
            >
              <option value="">Select Status</option>
              <option value="sample">Sample</option>
              <option value="trial">Free Trial</option>
              <option value="paid">Paid</option>
              <option value="not-interested">Not Interested</option>
            </select>

            {/* Dropdown Icon */}
            <div className="pointer-events-none absolute right-3 bottom-3 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {disposition === "sample" || disposition === "paid" ? (
            <div className="mt-3 space-y-3">
              <div>
                <label className="text-sm font-medium">Activation Date</label>
                <input
                  type="date"
                  className="w-full border border-gray-300 px-3 py-2 rounded mt-1 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Expiry Date</label>
                <input
                  type="date"
                  className="w-full border border-gray-300 px-3 py-2 rounded mt-1 focus:outline-none"
                />
              </div>
            </div>
          ) : disposition === "trial" ? (
            <div className="mt-3">
              <label className="text-sm font-medium">Free Trial Days</label>
              <input
                type="text"
                placeholder="Enter days"
                className="w-full border border-gray-300 px-3 py-2 rounded mt-1 focus:outline-none"
              />
            </div>
          ) : disposition === "not-interested" ? (
            <div className="mt-3">
              <label className="text-sm font-medium">Reason</label>
              <input
                type="text"
                placeholder="Enter reason"
                className="w-full border border-gray-300 px-3 py-2 rounded mt-1 focus:outline-none"
              />
            </div>
          ) : null}
        </div>

        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-3 rounded font-semibold cursor-pointer"
        >
          Continue
        </button>
      </form>
    </div>
  );
}
