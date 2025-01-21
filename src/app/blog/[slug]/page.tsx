import { PortableText, PortableTextComponents } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import Link from "next/link";

import LayoutBlog from "@/components/layouts/LayoutBlog";
import { client } from "@/sanity/lib/client";
import { getDetailPost } from "@/sanity/queries/posts";

// Constants
export const revalidate = 0;

// Types
interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

interface SanityImage {
  alt?: string;
  href?: string;
  _type: string;
}

// Image URL builder setup
const builder = imageUrlBuilder(client);
const urlFor = (source: any) => builder.image(source);

// Portable Text Components Configuration
const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="mb-6 font-mono text-5xl font-bold">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-6 font-mono text-4xl font-medium leading-none">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-6 font-mono text-3xl font-medium">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="mb-6 font-mono text-2xl font-medium">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="mb-6 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mb-6 w-full transform rounded-2xl border-b-4 border-gray-300 bg-gray-100 p-6 transition-transform hover:scale-105">
        {children}
      </blockquote>
    ),
  },
  types: {
    image: ({ value }: { value: SanityImage }) => (
      <div className="mb-6 aspect-auto h-[33vh] w-full sm:h-[45vh]">
        <Image
          src={urlFor(value).url()}
          alt={value.alt || "Blog post image"}
          width={1200}
          height={630}
          className="h-full w-full object-cover"
          loading="lazy"
          priority={false}
        />
      </div>
    ),
  },
  marks: {
    em: ({ children }) => (
      <em className="font-semibold text-gray-400">{children}</em>
    ),
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <Link
          href={value?.href ?? "#"}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="font-bold text-yellow-300 underline transition-colors hover:text-yellow-400"
        >
          {children}
        </Link>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-6 list-disc space-y-2 px-6">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mb-6 list-decimal space-y-2 px-6">{children}</ol>
    ),
    checkmarks: ({ children }) => (
      <ol className="m-auto mb-6 space-y-2 text-lg">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-2">{children}</li>,
    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },
};

const BlogDetailPage = async ({ params }: BlogDetailPageProps) => {
  const { slug } = params;
  const post = await getDetailPost(slug);

  return (
    <LayoutBlog>
      <article className="mx-auto max-w-4xl">
        <div className="flex w-full flex-col items-start justify-center text-black">
          <PortableText value={post.body} components={portableTextComponents} />
        </div>
      </article>
    </LayoutBlog>
  );
};

export default BlogDetailPage;
