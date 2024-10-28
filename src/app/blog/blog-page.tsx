import Link from "next/link";
import { PostCard } from "@/lib/interface";
import { client } from "@/lib/client";

const POST_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;
const options = { next: { revalidate: 30 } };

const BlogPage = async () => {
  const data: PostCard[] = await client.fetch<PostCard[]>(
    POST_QUERY,
    {},
    options,
  );
  return (
    <div className="container mx-auto min-h-screen max-w-screen-lg py-8">
      <div className="grid gap-4">
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
      </div>
    </div>
  );
};

export default BlogPage;
