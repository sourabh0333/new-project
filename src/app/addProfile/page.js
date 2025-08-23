import { MdOutlineKeyboardBackspace } from "react-icons/md";

export default function Profile() {
  return (
    <div className="w-full h-screen bg-white px-4 py-4">
      <div className="flex items-center gap-4 mb-3">
        <button>
          <MdOutlineKeyboardBackspace size={25} className="text-black" />
        </button>
        <h2 className="text-lg font-semibold text-black">Profile</h2>
      </div>

      <form className="space-y-2 text-black">
        <div>
          <label className="text-sm font-medium">Username</label>
          <input
            type="text"
            placeholder="Username"
            className="w-full border border-gray-300 bg-gray-200 px-3 py-2 rounded mt-1 focus:outline-0"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Password</label>
          <input
            type="text"
            placeholder="Password"
            className="w-full border border-gray-300 px-3 py-2 rounded mt-1 focus:outline-0"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Phone Number</label>
          <input
            type="Number"
            placeholder="Phone Number"
            className="w-full border border-gray-300 px-3 py-2 rounded mt-1 focus:outline-0"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Email ID</label>
          <input
            type="text"
            placeholder="Enter Email id"
            className="w-full border border-gray-300 px-3 py-2 rounded mt-1 focus:outline-0"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Address</label>
          <input
            type="text"
            placeholder="Enter Address"
            className="w-full border border-gray-300 px-3 py-2 rounded mt-1 focus:outline-0"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-pink-700 text-white py-2 mt-4 rounded font-medium cursor-pointer"
        >
          Update
        </button>
      </form>
    </div>
  );
}
