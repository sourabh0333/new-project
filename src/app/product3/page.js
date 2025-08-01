import Product2Logo from "@/components/ProductComponents/product2Logo";
import Product3Cate from "@/components/ProductComponents/product3Cate";
import Product3Footer from "@/components/ProductComponents/product3Footer";

export default function Product3() {
  return (
    <>
      <div className="max-w-sm mx-auto h-screen bg-white mt-10 pb-5">
        <Product2Logo />
        <Product3Cate />
        <Product3Footer />
      </div>
    </>
  );
}
