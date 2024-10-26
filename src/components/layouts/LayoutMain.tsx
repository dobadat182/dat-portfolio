import Footer from "./Footer";
import Header from "./Header";

const LayoutMain = ({ children }: DefaultProps) => {
  return (
    <>
      <Header />
      <main className="overflow-hidden [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar]:w-2">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default LayoutMain;
