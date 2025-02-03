import { groq } from "next-sanity";
import { client } from "../lib/client";

const getProjectsQuery = groq`*[_type == "project"]{
  title,
  shortName,
  startDate,
  endDate,
  status,
  "imageUrl": mainImage.asset->url,
  url,
  technology,
  publishedAt,
  body
}`;

export async function getProjects() {
  return await client.fetch(getProjectsQuery, {});
}
