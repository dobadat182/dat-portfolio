import BlogPage from "@/components/pages/blog-page";
import PrimaryLayout from "@/layouts/primary-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Davis Dev ✨",
  description: "...",
};

const Blog = () => {
  return (
    <PrimaryLayout>
      <BlogPage />
    </PrimaryLayout>
  );
};

export default Blog;
