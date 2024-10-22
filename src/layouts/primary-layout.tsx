import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const PrimaryLayout = ({ children }: DefaultProps) => {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar]:w-2">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default PrimaryLayout;
