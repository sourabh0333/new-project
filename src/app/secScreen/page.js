import Header from "@/components/header";
import SecBody from "@/components/secBody";
import SecFooter from "@/components/secFooter";

export default function SecScreen() {
  return (
    <>
      <div className="max-w-sm mx-auto h-screen bg-white mt-10 py-5">
        <Header />
        <SecBody />
        <SecFooter />
      </div>
    </>
  );
}
