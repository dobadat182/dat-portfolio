import { client } from "@/lib/client";
import { NextResponse } from "next/server";

const POSTS_QUERY = `*[
_type == "post"
&& defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

export async function GET() {
  try {
    const data = await client.fetch(POSTS_QUERY);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error fetching posts:", error); // Log detailed error for debugging
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 },
    );
  }
}
