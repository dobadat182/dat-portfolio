"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import ComponentHeading from "@/components/shared/HeadingSection";

const reviews = [
  {
    name: "Safety Path",
    username: "@safety-path",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Intergral Lighting",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Lacoste Viet Nam",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Mintlabo",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jiffy",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Vietnam Booking",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Boss Hunting",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "It Take A Village",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Conecta",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Integral Lighting",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Bongiorno Group",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Athletics Victoria",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Reveal Group",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const ReviewCard = ({ name }: { name: string }) => {
  return (
    <figure
      className={cn(
        "transition- relative w-full cursor-pointer overflow-hidden rounded-xl transition-transform hover:-translate-y-1",
        // light styles
        "bg-gray-950/[.01]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-col gap-4">
        <div className="h-56 w-full rounded-lg bg-zinc-300"></div>
        <figcaption className="text-base font-medium dark:text-white">
          {name}
        </figcaption>
      </div>
    </figure>
  );
};

const FeaturedProjects = () => {
  return (
    <div
      id="featured-projects"
      className="mb-20 flex flex-col items-center justify-center px-5 md:px-0"
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
            <li>Wordpress</li>
            <li>Sapo</li>
            <li>Wix</li>
          </ul>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-5">
          {reviews.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}

          <ReviewCard key={1} name={"Continue journey..."} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
