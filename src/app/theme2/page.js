import CardC from "@/components/cateC";
import Footer from "@/components/footer";
import LogoSection from "@/components/logoSection";

export default function Theme2() {
  return (
    <>
      <div className="max-w-sm mx-auto h-screen bg-white py-5">
        <LogoSection />
        <CardC />
        <Footer />
      </div>
    </>
  );
}
