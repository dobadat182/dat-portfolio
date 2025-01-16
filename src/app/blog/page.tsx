export const revalidate = 0;

import LayoutBlog from "@/components/layouts/LayoutBlog";
import { getPosts, Post } from "@/sanity/queries/posts";
import Image from "next/image";
import Link from "next/link";

const Blog = async () => {
  const postsData: Post[] = await getPosts();
  console.log(postsData);

  return (
    <LayoutBlog>
      <section
        id="section"
        className="relative flex w-full items-center justify-center py-24 sm:h-screen sm:max-h-screen sm:py-24"
      >
        <div id="container" className="h-full w-full px-6 sm:px-24">
          <div className="font-bebas text-6xl text-white">
            <h1>Our Blogs</h1>
          </div>

          <div>
            {postsData.map((post, index) => {
              return <div>{post.title}</div>;
            })}
          </div>
        </div>
      </section>
    </LayoutBlog>
  );
};

export default Blog;
