import BlogPage from "@/components/pages/blog/blog-page";
import PrimaryLayout from "@/layouts/primary-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Davis Web Engineer 🔥",
  description:
    "Davis, a web engineer with 3 years of experience in building and optimizing responsive web applications. Specializing in HTML, CSS, JavaScript, and hands-on experience with WordPress and Next.js, Davis delivers high-quality web solutions focused on performance and user experience.",
};

const Blog = () => {
  return (
    <PrimaryLayout>
      <BlogPage />
    </PrimaryLayout>
  );
};

export default Blog;
