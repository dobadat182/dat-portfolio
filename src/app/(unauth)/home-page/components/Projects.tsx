"use client";

import ComponentHeading from "@/components/shared/HeadingSection";
import Link from "next/link";

const reviews = [
  {
    id: 1,
    name: "Safety Path",
    code: "@stp",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
    techs: ["WordPress"],
    url: "https://shop.smarterlite.com/",
  },
  {
    id: 2,
    name: "Intergral Lighting",
    code: "@itl",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
    techs: ["WordPress"],
    url: "https://www.integrallighting.com.au/",
  },
  {
    id: 3,
    name: "Lacoste Viet Nam",
    code: "@lcv",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
    techs: ["WordPress"],
    url: "https://lacoste.com.vn/",
  },
  {
    id: 4,
    name: "Mintlabo",
    code: "@mlb",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
    techs: ["WordPress"],
    url: "https://mintlabo.com/",
  },
  {
    id: 5,
    name: "Jiffy",
    code: "@jf",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
    techs: ["Nuxt"],
    url: "https://getjiffy.co/",
  },
  {
    id: 6,
    name: "Vietnam Booking",
    code: "@vnb",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
    techs: ["Next"],
  },
  {
    id: 7,
    name: "Boss Hunting",
    code: "@bh",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
    techs: ["WordPress"],
  },
  {
    id: 8,
    name: "It Take A Village",
    code: "@itv",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
    techs: ["WordPress"],
    url: "https://yourvillage.com.au/",
  },
  {
    id: 9,
    name: "Conecta",
    code: "@cnt",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
    techs: ["WordPress"],
  },
  {
    id: 10,
    name: "Bongiorno Group",
    code: "@bgg",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
    techs: ["WordPress"],
    url: "https://conecta.com.au/",
  },
  {
    id: 11,
    name: "Athletics Victoria",
    code: "@ath",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
    techs: ["WordPress"],
    url: "https://athsvic.org.au/",
  },
  {
    id: 12,
    name: "Reveal Group",
    code: "@rvg ",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
    techs: ["WordPress"],
    url: "https://revealgroup.com/",
  },
];

type ReviewCardProps = {
  id: number;
  name: string;
  code: string;
  url?: string | undefined;
  body: string;
  img: string;
  techs: string[];
};

const ReviewCard = ({ name, techs, url = "" }: ReviewCardProps) => {
  return (
    <div className="transition- w-full cursor-pointer overflow-hidden rounded-xl bg-gray-950/[.01] transition-transform hover:-translate-y-1">
      <div className="flex flex-col gap-4">
        <Link
          target="_blank"
          href={url}
          className="relative h-56 w-full overflow-hidden rounded-lg bg-zinc-300"
        >
          {/* <Image
            src={img}
            alt={name}
            width={0}
            height={0}
            className="h-full w-full"
          /> */}

          <div className="absolute bottom-0 left-0 px-3 pb-3">
            <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-tertiary shadow-xl">
              {techs?.map((element) => element)}
            </span>
          </div>
        </Link>
        <Link
          target="_blank"
          href={url}
          className="text-base font-medium dark:text-white"
        >
          {name}
        </Link>
      </div>
    </div>
  );
};

const FeaturedProjects = () => {
  return (
    <div
      id="featured-projects"
      className="mb-20 flex flex-col items-center justify-center px-5"
    >
      <ComponentHeading
        title={"Featured Projects"}
        desc={
          "Explore how I've brought ideas to life, creating captivating digital experiences that engage and inspire."
        }
      />

      <div className="w-full max-w-screen-lg">
        <div className="mb-8">
          <ul className="flex gap-5">
            <li className="underline">All</li>
            <li>E-Commerce</li>
            <li>WordPress</li>
            <li>Sapo</li>
            <li>Wix</li>
          </ul>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
