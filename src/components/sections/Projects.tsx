"use client";

import CardProject from "@/components/shared/CardProject";
import ComponentHeading from "@/components/shared/HeadingSection";
import { Project } from "@/data/global-data";

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
          {Project?.map((review) => (
            <CardProject key={review.id} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
