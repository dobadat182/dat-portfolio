export interface PostCard {
  _id: string;
  title: string;
  category: string[];
  slug: { _type: "string"; current: string };
  description: string;
  tags: string;
  publishedAt: Date;
}
