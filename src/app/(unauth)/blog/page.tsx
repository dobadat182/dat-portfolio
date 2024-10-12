import { H1 } from "@/components/shared/Typo";
import PrimaryLayout from "@/layouts/primary-layout";
import React from "react";

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
