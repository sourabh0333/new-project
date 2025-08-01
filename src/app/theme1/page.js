import CardB from "@/components/cateB";
import Footer from "@/components/footer";
import LogoSection from "@/components/logoSection";

export default function Theme1() {
  return (
    <>
      <div className="max-w-sm mx-auto h-screen bg-white mt-10 py-5">
        <LogoSection />
        <CardB />
        <Footer />
      </div>
    </>
  );
}
