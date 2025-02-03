export const revalidate = 0;

import LayoutBlog from "@/components/layouts/LayoutBlog";
import { getPosts, Post } from "@/sanity/queries/posts";
import { Edit, Rss } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Blog – Davis Do Developer",
  openGraph: {
    title: "Blog – Davis Do Developer",
    description:
      "Nơi tôi chia sẻ các bài viết về lập trình, công nghệ và hành trình cá nhân trong ngành phát triển phần mềm.",
  },
};

// Child component of Blog
const BlogHeading = ({ title }: { title: string }) => {
  return (
    <section className="flex items-center justify-between">
      <Link
        href={"/blog/writting"}
        className="mb-4 mt-6 inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md px-0 py-2 text-sm underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
      >
        <h2 className="flex gap-4 text-xl font-medium [&_svg]:size-6">
          <Edit />
          {title || "Title"}
        </h2>
      </Link>

      <Link
        href={"/blog/reading"}
        className="inline-flex h-8 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-input bg-background px-3 text-xs font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
      >
        <Rss /> RSS feed
      </Link>
    </section>
  );
};

const Blog = async () => {
  const postsData: Post[] = await getPosts();

  const randomNum = () => {
    return Math.floor(Math.random() * 1000);
  };

  return (
    <LayoutBlog>
      <div className="font-inter mb-8 flex flex-col flex-wrap items-center justify-items-stretch md:flex-row md:gap-6">
        <div className="sm:order-1 md:flex-1">
          <div className="relative text-black">
            <h1 className="mb-1 text-3xl font-extrabold tracking-tighter">
              hey, I&apos;m Davis 👋
            </h1>
            <p className="max-w-lg text-base text-gray-600">
              This is my digital garden 🌱, where I write about the things
              I&apos;m working on and share what I&apos;ve learned 🎉
            </p>
          </div>
        </div>
        <div className="sm:order-2">
          <div className="flex items-center justify-center rounded-full">
            <Image
              unoptimized
              alt="Cat with Wry Smile"
              width="80"
              height="80"
              src={
                "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Cat%20with%20Wry%20Smile.png"
              }
            />
          </div>
        </div>
      </div>

      <section>
        <BlogHeading title="Bài viết" />

        {postsData.map((post, index) => {
          return (
            <Link key={index} href={`blog/${post.slug?.current}` || ""}>
              <div className="flex flex-col items-baseline justify-between py-1 hover:rounded-md hover:bg-gray-100 sm:flex-row">
                <div className="flex justify-center">
                  <small className="mr-4 flex size-6 shrink-0 items-center justify-center rounded-full border">
                    {index + 1}
                  </small>
                  <span className="text-base">{post?.title || ""}</span>
                </div>
                <div className="flex w-full items-center justify-between sm:mt-0 sm:w-auto">
                  <p className="mb-0 ml-10 w-28 text-left text-sm text-gray-500 sm:ml-0 sm:text-right">
                    <span
                      className="tabular-nums"
                      title={`${randomNum()} views`}
                    >
                      {randomNum()} views
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </LayoutBlog>
  );
};

export default Blog;
