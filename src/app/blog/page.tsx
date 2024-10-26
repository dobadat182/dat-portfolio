import { H1 } from "@/components/common/Typo";
import PrimaryLayout from "@/components/layouts/LayoutMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Davis Web Engineer 🔥",
  description:
    "Davis, a web engineer with 3 years of experience in building and optimizing responsive web applications. Specializing in HTML, CSS, JavaScript, and hands-on experience with WordPress and Next.js, Davis delivers high-quality web solutions focused on performance and user experience.",
};

const Blog = () => {
  return (
    <PrimaryLayout>
      <div className="flex h-screen w-full items-center justify-center">
        <H1>BLOG</H1>
      </div>
    </PrimaryLayout>
  );
};

export default Blog;
