import CateA from "@/components/cateA";
import CateBtn from "@/components/cateBtn";
import Footer from "@/components/footer";
import LogoSection from "@/components/logoSection";

export default function Theme() {
  return (
    <>
      <div className="max-w-sm mx-auto h-screen bg-white mt-10 py-5">
        <LogoSection />
        <CateA />
        <Footer />
      </div>
    </>
  );
}
