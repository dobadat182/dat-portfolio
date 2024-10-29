import Link from "next/link";
import { PostCard } from "@/lib/interface";
import { client } from "@/lib/client";
import { format } from "date-fns/format";

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
    <>
      {data.map((post) => (
        <Link
          key={post._id}
          href={`/blog/${post.slug.current}`}
          className="grid grid-cols-1 gap-4 rounded-xl border-2 px-5 py-4 transition-shadow duration-300 hover:shadow-md"
        >
          <h3 className="font-mono text-2xl font-bold">{post.title}</h3>

          <p className="text-sm text-zinc-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            vel explicabo totam eaque laudantium odio hic, non cum repellendus
            et beatae fugiat recusandae maiores iusto pariatur quia laboriosam
            dicta? Quidem!
          </p>

          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <div className="rounded-lg border px-2 py-1 text-sm text-zinc-500 transition-transform duration-300 hover:-translate-y-1 hover:translate-x-1 hover:shadow-lg">
                NextJS
              </div>
              <div className="rounded-lg border px-2 py-1 text-sm text-zinc-500 transition-transform duration-300 hover:-translate-y-1 hover:translate-x-1 hover:shadow-lg">
                Sanity
              </div>
              <div className="rounded-lg border px-2 py-1 text-sm text-zinc-500 transition-transform duration-300 hover:-translate-y-1 hover:translate-x-1 hover:shadow-lg">
                Technology
              </div>
            </div>
            <time className="text-sm text-gray-500">
              {format(new Date(post.publishedAt), "dd/MM/yyyy")}
            </time>
          </div>
        </Link>
      ))}
    </>
  );
};

export default BlogPage;
