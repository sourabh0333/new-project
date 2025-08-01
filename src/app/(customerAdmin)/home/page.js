import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full h-[70vh] flex flex-col justify-between">
        {/* Top Section */}
        <div className="flex flex-col items-center justify-center py-4 px-4">
          <div className="bg-[#F4E2E8] text-white rounded-2xl w-full p-6 py-14 flex flex-col items-center justify-center text-center">
            <Image
              src="/home-cata.png"
              height={50}
              width={50}
              alt="home-catalogue"
              className="mb-4"
            />
            <h2 className="text-xl font-bold mb-1 text-black">
              Start your online catalogue
            </h2>
            <p className="text-sm mb-4 text-black">
              Let's help you create a beautiful product catalogue in minutes.
            </p>
            <button className="text-white bg-[#db0d5f] font-semibold px-6 py-2 rounded-sm">
              Get Started
            </button>
          </div>
        </div>

        {/* Footer Logo */}
        <div className="flex justify-center pb-3">
          <img
            src="/footerImg.png"
            alt="Digital Dukaan"
            className="w-42 h-auto"
          />
        </div>
      </div>
    </>
  );
}
