import Link from "next/link";
import { PostCard } from "@/lib/interface";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { BASE_URL } from "@/lib/api";

export async function getPosts() {
  const res = await fetch(BASE_URL("api/posts"), {
    next: { revalidate: 3600 },
  });
  return res.json();
}

// Loading skeleton component
const BlogSkeleton = () => {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="rounded-lg border p-4">
          <Skeleton className="mb-2 h-6 w-3/4" />
          <Skeleton className="h-4 w-1/4" />
        </div>
      ))}
    </div>
  );
};

// Separate component for blog content
const BlogContent = async () => {
  const data: PostCard[] = await getPosts();

  return (
    <div className="grid gap-4">
      {data.map((post) => (
        <Link
          key={post._id}
          href={`/blog/${post.slug.current}`}
          className="rounded-lg border p-4 transition-shadow hover:shadow-md"
        >
          <h2 className="mb-2 text-xl font-semibold">{post.title}</h2>
          <time className="text-sm text-gray-500">
            {new Date(post.publishedAt).toLocaleDateString()}
          </time>
        </Link>
      ))}
    </div>
  );
};

const BlogPage = () => {
  return (
    <div className="container mx-auto min-h-screen max-w-screen-lg py-8">
      <Suspense fallback={<BlogSkeleton />}>
        <BlogContent />
      </Suspense>
    </div>
  );
};

export default BlogPage;
