import Link from "next/link";
import BlogContent from "./_components/BlogContent";

const page = async ({ params }: { params: { slug: string } }) => {
  return (
    <div className="container mx-auto flex min-h-screen max-w-3xl flex-col gap-4 p-8">
      <Link href="/blog" className="hover:underline">
        ← Back to posts
      </Link>

      <BlogContent params={params} />
    </div>
  );
};

export default page;
