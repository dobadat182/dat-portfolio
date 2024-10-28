import { client } from "@/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const query = `*[
      _type == "post"
      && defined(slug.current)
    ]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

    const data = await client.fetch(query);
    return NextResponse.json(data);
  } catch (error) {
    console.log("🚀 ~ GET ~ error:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 },
    );
  }
}
