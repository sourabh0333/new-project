import Link from "next/link";
import React from "react";
import { FaYoutube } from "react-icons/fa6";

const PinnedToHomepage = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <div className="text-lg font-semibold flex items-center gap-2">
          Pinned to Homepage
          <Link
            href="https://www.youtube.com/embed/NMeEDsiehNg?si=Dh8w5XQM2ti0hT7W"
            target="_blank"
            className="text-red-600 text-sm"
          >
            <FaYoutube size={24} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default PinnedToHomepage;
