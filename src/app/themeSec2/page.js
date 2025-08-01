import CateSecB from "@/components/cateSecB";
import Footer from "@/components/footer";
import SecLogoSection from "@/components/secLogo";

export default function ThemeSec2() {
  return (
    <>
      <div className="max-w-sm mx-auto h-screen bg-white pb-5">
        <SecLogoSection />
        <CateSecB />
        <Footer />
      </div>
    </>
  );
}
