import { client } from "@/lib/client";
import { PortableText, SanityDocument } from "next-sanity";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;
const options = { next: { revalidate: 30 } };

const BlogContent = async ({ params }: { params: { slug: string } }) => {
  const post = await client.fetch<SanityDocument>(POST_QUERY, params, options);
  return (
    <div>
      <h1 className="mb-8 text-4xl font-bold">{post.title}</h1>
      <div className="prose">
        <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>

        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </div>
    </div>
  );
};

export default BlogContent;
