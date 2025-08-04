import { FaYoutube, FaInstagram } from "react-icons/fa";
import { LuUpload } from "react-icons/lu";
import { FiChevronDown } from "react-icons/fi";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

export default function CreateProfile() {
  return (
    <div className="max-w-sm mx-auto h-scree bg-white px-4 py-4">
      <div className="flex items-center gap-4">
        <button>
          <MdOutlineKeyboardBackspace size={25} className="text-black" />
        </button>
        <h2 className="text-lg font-semibold text-black">
          Add Your Business Details
        </h2>
      </div>

      <hr className="text-gray-300 my-3" />

      <form className="space-y-3 text-black">
        <div className="relative w-full">
          <label className="text-sm font-bold">
            Business Type <span className="text-red-500">*</span>{" "}
          </label>
          <select className="w-full appearance-none border border-gray-300 px-3 py-2 rounded mt-1 pr-10 text-sm focus:outline-none ">
            <option>Select</option>
            <option>Wholeseller</option>
            <option>Manufacturer</option>
            <option>Retailer</option>
          </select>

          <div className="pointer-events-none absolute top-[38px] right-3 text-gray-500">
            <FiChevronDown className="w-4 h-4" />
          </div>
        </div>

        <div>
          <label className="text-sm font-bold">
            Business Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Full Name Fetch"
            className="w-full border border-gray-300 px-3 py-2 rounded mt-1 focus:outline-0"
          />
        </div>

        <div>
          <label className="text-sm font-bold">Upload Logo Image</label>

          <label
            htmlFor="logo-upload"
            className="bg-gray-100 text-gray-400 border border-dashed rounded-md py-6 text-center mt-2 text-sm flex flex-col items-center justify-center cursor-pointer"
          >
            <LuUpload className="text-3xl text-gray-500" />
            <p className="mb-2">Add a logo</p>
            <p className="text-xs text-gray-500">
              Allowed: PNG, JPG (Max: 2MB)
            </p>
            <input
              id="logo-upload"
              type="file"
              accept="image/png, image/jpeg"
              className="hidden"
            />
          </label>
        </div>

        <div>
          <label className="text-sm font-bold flex items-center gap-2">
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
          <label className="text-sm font-bold">Instagram Account Link</label>
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
          <label className="text-sm font-bold">Add Address Link</label>
          <div className="relative mt-1">
            <input
              type="url"
              className="w-full pr-10 border border-gray-300 px-3 py-2 rounded focus:outline-0"
              placeholder="Add Link"
            />
            <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <img src="/mapLogo.png" alt="Google Maps" className="w-5 h-6" />
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" id="import" className="w-4 h-4" />
          <label htmlFor="import" className="text-sm">
            Import Dummy Products
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-[#DC1D60] text-white py-2 rounded font-medium cursor-pointer"
        >
          Continue
        </button>
      </form>
    </div>
  );
}
