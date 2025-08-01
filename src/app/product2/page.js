import CateSec from "@/components/cateSec";
import Product2Footer from "@/components/ProductComponents/product2Footer";
import Product2Logo from "@/components/ProductComponents/product2Logo";

export default function Product2() {
  return (
    <>
      <div className="max-w-sm mx-auto h-screen bg-white mt-10 pb-5">
        <Product2Logo />
        <CateSec />
        <Product2Footer />
      </div>
    </>
  );
}
