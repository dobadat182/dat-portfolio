import Footer from "./Footer";
import Header from "./header/header";

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
