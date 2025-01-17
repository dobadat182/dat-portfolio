export const revalidate = 0;

import LayoutBlog from "@/components/layouts/LayoutBlog";
import { getPosts, Post } from "@/sanity/queries/posts";
import { PencilIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Blog = async () => {
  const postsData: Post[] = await getPosts();

  return (
    <LayoutBlog>
      <div className="flex flex-col md:flex-row md:gap-6 flex-wrap items-center justify-items-stretch my-8">
        <div className="sm:order-1 md:flex-1">
          <div id="page-header" className="relative my-8">
            <h1 className="text-2xl font-medium tracking-tighter">hey, I'm Davis</h1>
            <p>This is my digital garden, where I write about the things I'm working on and share what I've learned 🎉</p>
          </div>
        </div>
        <div className="sm:order-2">
          <div className="bg-zinc-200 p-3 aspect-square flex items-center justify-center rounded-full">
            <h2>Davis.D</h2>
          </div>
        </div>
      </div>
        <div className="">
          <ContentHeader />
          
          {postsData.map((post, index) => {
            return (
              <Link key={index} href={`blog/${post.slug?.current}` || ""}>
                <div className="w-full col-span-1 group shrink-0 border border-white py-2">
                  <div className="flex flex-col mb-6">
                    <h2 className="text-black text-xl">{post?.title}</h2>

                    <div className="flex justify-between w-full">
                      <span className="text-black text-sm">
                        {post.author}
                      </span>
                      <span className="text-black text-sm">
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

const ContentHeader = () => {
  return (          
    <div className="flex items-center justify-between">
      <a href="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary underline-offset-4 hover:underline h-9 py-2 mb-4 mt-6 px-0">
        <h2 className="flex [&_svg]:size-6">
          <PencilIcon />
          Writting
        </h2>
      </a>
    </div>
    );
}


export default Blog;
