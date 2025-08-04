export default function Login() {
  return (
    <>
      <div className="max-w-sm mx-auto bg-white shadow ">
        <div className="w-full max-w-sm bg-white overflow-hidden">
          <div className="bg-gray-100 px-4 py-6 text-center">
            <p className="text-sm text-gray-500">Trusted by Local Sellers.</p>
            <p className="text-xl font-bold text-black">
              Start Your <span className="text-pink-600">Online Shop</span>{" "}
              Today!
            </p>

            <img
              src="/digitalImg.jpg"
              alt="login image"
              className="h-auto w-full px-4 rounded-lg mt-2"
            />

            <div className="text-center mt-4 mb-2">
              <img
                src="/footerImg.png"
                alt="Digital Dukaan Logo"
                className="mx-auto h-10 w-auto"
              />
            </div>
          </div>

          <div className="p-6 pt-4">
            <form className="space-y-4">
              <div>
                <label
                  className="block text-sm font-medium mb-1 text-black"
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
                  className="block text-sm  font-medium mb-1 text-black"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition mt-2 cursor-pointer"
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
