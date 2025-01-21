import FooterBlog from "./footer/footer-blog";
import HeaderBlog from "./header/header-blog";

const LayoutBlog = ({ children }: DefaultProps) => {
  return (
    <>
      <HeaderBlog />
      <main className="relative">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:26px_26px]"></div>

        <div className="container mx-auto min-h-screen max-w-3xl px-4 py-20">
          {children}
          <FooterBlog />
        </div>
      </main>
    </>
  );
};

export default LayoutBlog;
