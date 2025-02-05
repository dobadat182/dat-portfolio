import Script from "next/script";
import FooterBlog from "./footer/footer-blog";
import HeaderBlog from "./header/header-blog";

const LayoutBlog = ({ children }: DefaultProps) => {
  return (
    <>
      <HeaderBlog />
      <main className="relative">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:26px_26px]"></div>

        <div className="container mx-auto flex min-h-screen max-w-3xl flex-col px-4 py-20">
          {children}
          <FooterBlog />
        </div>
      </main>

      <Script
        src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
        data-name="BMC-Widget"
        data-id="davisdo"
        data-description="Support me on Buy me a coffee!"
        data-message="Nếu thấy nội dung bổ ích hãy mua cho mình ly cà phê nhé 🍻"
        data-color="#F9CB43"
        data-position="Right"
        data-x_margin="18"
        data-y_margin="18"
        strategy="afterInteractive" // This ensures the script loads asynchronously after the page is interactive.
      />
    </>
  );
};

export default LayoutBlog;
