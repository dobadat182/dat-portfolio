import Footer from "./Footer";
import Header from "./Header";

const LayoutMain = ({ children }: DefaultProps) => {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden">{children}</main>
      <Footer />
    </>
  );
};

export default LayoutMain;
