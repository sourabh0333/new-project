import CateA from "@/components/cateA";
import Footer from "@/components/footer";
import HeaderTwo from "@/components/headerTwo";
import HeaderOne from "@/components/headerOne";
import LogoSection from "@/components/logoSection";
import HeaderFour from "@/components/headerFour";

export default function Theme() {
  return (
    <>
      <div className="w-full h-screen bg-white mt-16">
        <LogoSection />
        {/* <HeaderOne /> */}
        {/* <HeaderTwo /> */}
        {/* <HeaderFour /> */}
        <CateA />
        <Footer />
      </div>
    </>
  );
}
