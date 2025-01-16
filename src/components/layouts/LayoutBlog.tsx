
import Footer from "./Footer";
import Header from "./Header";

const LayoutBlog = ({ children }: DefaultProps) => {
  return (
    <>
      <main className="relative overflow-hidden">{children}</main>
    </>
  );
};

export default LayoutBlog;
