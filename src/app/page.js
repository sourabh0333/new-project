import CateBtn from "@/components/cateBtn";
import Footer from "@/components/footer";
import LogoSection from "@/components/logoSection";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen bg-white pt-10">
        <LogoSection />
        <CateBtn />
        <Footer />
      </div>
    </>
  );
}
