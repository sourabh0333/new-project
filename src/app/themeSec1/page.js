import SecCateA from "@/components/cateSecA";
import Footer from "@/components/footer";
import SecLogoSection from "@/components/secLogo";

export default function ThemeSec1() {
  return (
    <>
      <div className="w-full mx-auto h-screen bg-white pb-5">
        <SecLogoSection />
        <SecCateA />
        <Footer />
      </div>
    </>
  );
}
