import CateSec from "@/components/cateSec";
import Footer from "@/components/footer";
import SecLogoSection from "@/components/secLogo";
import SecLogoSectionCopy from "@/components/secLogoCopy";

export default function ThemeSec() {
  return (
    <>
      <div className="w-full mx-auto h-screen bg-white pb-5">
        <SecLogoSection />
        {/* <SecLogoSectionCopy /> */}
        <CateSec />
        <Footer />
      </div>
    </>
  );
}
