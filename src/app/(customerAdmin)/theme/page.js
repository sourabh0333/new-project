import Link from "next/link";
import { FaYoutube } from "react-icons/fa6";
import ThemeLogoCard from "@/components/themeComp/ThemeLogoCard";
import SheetSection from "@/components/themeComp/SheetSection";

const HEADER_OPTIONS = [
  { id: "h1", thumb: "/itemImg1.png" },
  { id: "h2", thumb: "/itemImg1.jpg" },
  { id: "h3", thumb: "/itemImg1.png" },
  { id: "h4", thumb: "/itemImg1.jpg" },
  { id: "h5", thumb: "/itemImg1.jpg" },
];

const PRODUCT_STYLE_OPTIONS = [
  { id: "p1", thumb: "/itemImg1.png" },
  { id: "p2", thumb: "/itemImg1.jpg" },
  { id: "p3", thumb: "/itemImg1.png" },
  { id: "p4", thumb: "/itemImg1.jpg" },
];

export default async function Theme() {
  const initialHeaderId = null;
  const initialProductId = null;
  const initialCoverUrl = null;

  return (
    <div className="space-y-4 pb-6">
      <div className="text-lg font-semibold flex items-center gap-2">
        Theme
        <Link
          href="https://www.youtube.com/embed/NMeEDsiehNg?si=Dh8w5XQM2ti0hT7W"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600"
          aria-label="Help video on YouTube"
        >
          <FaYoutube size={22} />
        </Link>
      </div>

      {/* Logo card  */}
      <ThemeLogoCard />

      {/* Cover Photo */}
      <SheetSection
        label="Cover Photo"
        sheetTitle="Choose Cover Photo"
        body="cover"
        options={[]}
        initialSelectedId={initialCoverUrl}
        previewHeight={160}
        previewMode="url"
      />

      {/* Header */}
      <SheetSection
        label="Header"
        sheetTitle="Choose Header"
        body="header"
        options={HEADER_OPTIONS}
        initialSelectedId={initialHeaderId}
        previewHeight={144}
        previewMode="id"
      />

      {/* Product Style*/}
      <SheetSection
        label="Product Style"
        sheetTitle="Select Product Style"
        body="product"
        options={PRODUCT_STYLE_OPTIONS}
        initialSelectedId={initialProductId}
        previewHeight={128}
        previewMode="id"
      />
    </div>
  );
}
