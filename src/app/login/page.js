export default function Login() {
  return (
    <>
      <div className="max-w-sm mx-auto h-screen bg-white py-5">
        <div className="w-full max-w-sm bg-white rounded-b-lg overflow-hidden">
          <div className="h-80 bg-gray-300 rounded-b-xl"></div>

          {/* Login Form */}
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4 text-black">Login</h2>

            <form className="space-y-4">
              <div>
                <label
                  className="block font-medium mb-1 text-black"
                  htmlFor="userId"
                >
                  User ID
                </label>
                <input
                  type="text"
                  id="userId"
                  placeholder="Enter Username"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                />
              </div>

              <div>
                <label
                  className="block font-medium mb-1 text-black"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition mt-6"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
