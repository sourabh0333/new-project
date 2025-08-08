import CateSecB from "@/components/cateSecB";
import Footer from "@/components/footer";
import SecLogoSection from "@/components/secLogo";

export default function ThemeSec2() {
  return (
    <>
      <div className="w-full h-screen bg-white pb-5">
        <SecLogoSection />
        <CateSecB />
        <Footer />
      </div>
    </>
  );
}
