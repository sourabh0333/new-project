import CateSec from "@/components/cateSec";
import Footer from "@/components/footer";
import ProductHeader from "@/components/ProductComponents/productHeader";
import ProductSFLogo from "@/components/ProductComponents/productSFLogo";

export default function ProductSF() {
  return (
    <>
      <div className="max-w-sm mx-auto h-screen bg-white mt-10 pb-5">
        <ProductHeader />
        <ProductSFLogo />
        <CateSec />
        <Footer />
      </div>
    </>
  );
}
