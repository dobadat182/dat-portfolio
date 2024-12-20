import { Metadata } from "next";
import PrimaryLayout from "@/components/layouts/LayoutMain";
import BlogPage from "./blog-page";

export const metadata: Metadata = {
  title: "Blog - Davis Do",
  description:
    "Davis, a web engineer with 3 years of experience in building and optimizing responsive web applications. Specializing in HTML, CSS, JavaScript, and hands-on experience with WordPress and Next.js, Davis delivers high-quality web solutions focused on performance and user experience.",
};

const Blog = () => {
  return (
    <PrimaryLayout>
      <div className="container mx-auto min-h-screen max-w-screen-md py-8">
        <div className="grid gap-4">
          <BlogPage />
        </div>
      </div>
    </PrimaryLayout>
  );
};

export default Blog;
