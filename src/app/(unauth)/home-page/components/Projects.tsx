"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

import ComponentHeading from "@/components/shared/ComponentHeading";
import { MagicCard } from "@/components/ui/magic-card";
import { useRef } from "react";

// const ProjectsData = [
//   {
//     name: "Safety Path",
//     type: "Ecommerce",
//     status: "Running",
//     image: "",
//     desc: "",
//     techstack: [
//       { image: "", title: "Wordpress" },
//       { image: "", title: "Shopify" },
//       { image: "", title: "Next" },
//     ],
//   },
//   {
//     name: "Lacoste",
//     type: "Ecommerce",
//     status: "Running",
//     image: "",
//     desc: "",
//     techstack: [
//       { image: "", title: "Wordpress" },
//       { image: "", title: "Shopify" },
//       { image: "", title: "Next" },
//     ],
//   },
//   {
//     name: "VietnamBooking",
//     type: "Ecommerce",
//     status: "Developing",
//     image: "",
//     desc: "",
//     techstack: [
//       { image: "", title: "Wordpress" },
//       { image: "", title: "Shopify" },
//       { image: "", title: "Next" },
//     ],
//   },
// ];

const FeaturedProjects = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div
      id="featured-projects"
      className="flex gap-10 flex-col md:py-10 items-center justify-center bg-background"
    >
      <ComponentHeading
        title={"Featured Projects"}
        desc={
          "Explore how I've brought ideas to life, creating captivating digital experiences that engage and inspire."
        }
      />

      <div className="w-full container">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          {/* <CarouselPrevious />
          <CarouselNext /> */}
          <CarouselContent>
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem className="pt-1 md:basis-1/3" key={index}>
                <MagicCard className="p-4 text-center" gradientColor={"#ff9f1c"}>
                  <div className="w-full aspect-square max-h-56 bg-slate-200 rounded-xl relative">
                    <div className="absolute top-0 right-0 p-3">Is Running</div>
                    <div className="absolute bottom-0 left-0 p-3">
                      <ul className="flex gap-2">
                        <li className="px-3 py-1 border rounded-full border-slate-300">
                          <span className="text-zinc-800 text-sm font-medium">Wordpress</span>
                        </li>
                        <li className="px-3 py-1 border rounded-full border-slate-300">
                          <span className="text-zinc-800 text-sm font-medium">NextJS</span>
                        </li>
                        <li className="px-3 py-1 border rounded-full border-slate-300">
                          <span className="text-zinc-800 text-sm font-medium">Shopify</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-5 text-left">
                    <h4 className="text-xl font-bold">SafetyPath</h4>
                    <p className="mt-3 text-left text-base line-clamp-3 text-zinc-500">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi voluptates atque, quo
                      delectus excepturi, quae error eos ipsam praesentium eius Modi voluptates atque, quo
                      delectus excepturi, quae error eos ipsam praesentium eius
                    </p>
                  </div>
                </MagicCard>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default FeaturedProjects;
