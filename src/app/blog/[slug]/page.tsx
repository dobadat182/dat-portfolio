export const revalidate = 0;

import { PortableText } from "@portabletext/react";

import { client } from "@/sanity/lib/client";
import { getDetailPost } from "@/sanity/queries/posts";
import { PortableTextComponents } from "@portabletext/react";
import { default as imageUrlBuilder } from "@sanity/image-url";

import Image from "next/image";
import Link from "next/link";
import LayoutBlog from "@/components/layouts/LayoutBlog";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}
const componentsTest: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="mb-6 text-5xl">{children}</h1>,
    h2: ({ children }) => (
      <h2 className="mb-6 text-4xl leading-none">{children}</h2>
    ),
    h3: ({ children }) => <h3 className="mb-6 text-3xl">{children}</h3>,
    h4: ({ children }) => <h4 className="mb-6 text-2xl">{children}</h4>,
    normal: ({ children }) => <p className="!mb-6">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="mb-6 w-full border-l-4 border-l-white border-opacity-60 bg-white/10 p-6">
        {children}
      </blockquote>
    ),
  },
  types: {
    image: ({ value }) => (
      <div className="mb-6 aspect-auto h-[33vh] w-full sm:h-[45vh]">
        <Image
          src={urlFor(value).url()}
          alt={value.alt || " "}
          width={320}
          height={450}
          className="h-full w-full object-cover"
          loading="lazy"
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
          href={value?.href}
          target={target}
          className="font-bold text-yellow-300 underline"
        >
          {children}
        </Link>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-xl list-disc px-6">{children}</ul>
    ),
    number: ({ children }) => <ol className="mt-lg">{children}</ol>,

    checkmarks: ({ children }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,

    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },
};

const BlogDetailPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const data = await getDetailPost(slug);

  return (
    <LayoutBlog>
      <section>
        <div className="flex w-full flex-col items-start justify-center text-black">
          <PortableText value={data.body} components={componentsTest} />
        </div>
      </section>
    </LayoutBlog>
  );
};

export default BlogDetailPage;
