export const revalidate = 0;

import LayoutBlog from "@/components/layouts/LayoutBlog";
import { getPosts, Post } from "@/sanity/queries/posts";
import { PencilIcon } from "lucide-react";
import Link from "next/link";

// Child component of Blog
const BlogHeading = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center justify-between">
      <a href="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary underline-offset-4 hover:underline h-9 py-2 mb-4 mt-6 px-0">
        <h2 className="flex [&_svg]:size-6">
          <PencilIcon />
          {title}
        </h2>
      </a>
    </div>
  );
};

const Blog = async () => {
  const postsData: Post[] = await getPosts();

  return (
    <LayoutBlog>
      <div className="my-8 flex flex-col flex-wrap items-center justify-items-stretch md:flex-row md:gap-6">
        <div className="sm:order-1 md:flex-1">
          <div id="page-header" className="relative my-8 text-black">
            <h1 className="mb-1 text-2xl font-medium tracking-tighter">
              hey, I'm Davis
            </h1>
            <p>
              This is my digital garden, where I write about the things I'm
              working on and share what I've learned 🎉
            </p>
          </div>
        </div>
        <div className="sm:order-2">
          <div className="flex aspect-square items-center justify-center rounded-full bg-zinc-200 p-3">
            <h2>Davis.D</h2>
          </div>
        </div>
      </div>
      <div className="">
        <BlogHeading title="Writting" />

        {postsData.map((post, index) => {
          return (
            <Link key={index} href={`blog/${post.slug?.current}` || ""}>
              <div className="group col-span-1 w-full shrink-0 border border-white py-2">
                <div className="mb-6 flex flex-col">
                  <h2 className="text-xl text-black">{post?.title}</h2>

                  <div className="flex w-full justify-between">
                    <span className="text-sm text-black">{post.author}</span>
                    <span className="text-sm text-black">
                      {post.publishedAt}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </LayoutBlog>
  );
};

export default Blog;
