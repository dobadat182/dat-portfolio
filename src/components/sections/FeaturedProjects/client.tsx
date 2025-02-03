"use client";

import Link from "next/link";
import { useState } from "react";
import { Project } from "./types";
import HeadingSection from "@/components/common/HeadingSection";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FeaturedProjectsClient = ({ projects }: { projects: Project[] }) => {
  const [filter, setFilter] = useState<string>("All");
  const [sort, setSort] = useState<"none" | "asc" | "desc">("none");

  // Filter projects based on selected tag
  const filteredProjects = projects.filter((project) => {
    if (filter === "All") return true;
    return project.technology?.includes(filter);
  });

  // Sort projects based on selected option
  const sortedProjects = [...filteredProjects]; // Create a copy to avoid mutating the original

  // Sort projects alphabetically
  if (sort === "asc") {
    sortedProjects.sort((a, b) => (a.title ?? "").localeCompare(b.title ?? ""));
  } else if (sort === "desc") {
    sortedProjects.sort((a, b) => (b.title ?? "").localeCompare(a.title ?? ""));
  }

  return (
    <div
      id="featured-projects"
      className="mb-20 flex flex-col items-center justify-center px-5"
    >
      <HeadingSection
        title={"Featured Projects"}
        desc={
          "Explore how I've brought ideas to life, creating captivating digital experiences that engage and inspire."
        }
      />

      <div className="w-full max-w-screen-lg">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <ul className="flex gap-5">
            {["All", "Wordpress", "Next", "Nuxt", "Sapo"].map((tag) => (
              <li
                key={tag}
                className={`cursor-pointer ${
                  filter === tag ? "underline" : ""
                }`}
                onClick={() => setFilter(tag)}
              >
                {tag}
              </li>
            ))}
          </ul>

          <Select
            value={sort}
            onValueChange={(value) => setSort(value as "none" | "asc" | "desc")}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="None" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None</SelectItem>
              <SelectItem value="asc">A-Z</SelectItem>
              <SelectItem value="desc">Z-A</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          <AnimatePresence>
            {sortedProjects.map((project) => (
              <motion.div
                key={project.title} // Sử dụng title làm key để đảm bảo animation hoạt động chính xác
                layout
                initial={{ opacity: 0, y: 20 }} // Hiệu ứng ban đầu
                animate={{ opacity: 1, y: 0 }} // Hiệu ứng khi xuất hiện
                exit={{ opacity: -20, y: 0 }} // Hiệu ứng khi biến mất
                transition={{ duration: 0.3, ease: "easeInOut" }} // Thời gian và kiểu hiệu ứng
              >
                <Card {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

// Component Card
const Card = ({ title, shortName, url, technology }: Project) => {
  return (
    <article className="w-full cursor-pointer overflow-hidden rounded-xl transition-transform hover:-translate-y-1">
      <div className="flex flex-col gap-4">
        <Link
          target="_blank"
          href={url ?? "/"}
          className="relative flex h-56 w-full items-center justify-center overflow-hidden rounded-lg bg-zinc-300"
        >
          <h4 className="font-mono text-xl font-bold uppercase text-white dark:text-zinc-700">
            {shortName}
          </h4>
          <div className="absolute bottom-0 left-0 flex gap-2 px-3 pb-3">
            {technology?.map((item, index) => (
              <span
                key={index}
                className="rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-zinc-500 shadow-xl dark:text-zinc-500"
              >
                {item}
              </span>
            ))}
          </div>
        </Link>
        <Link
          target="_blank"
          href={url ?? "/"}
          className="text-base font-medium dark:text-white"
          rel="noopener noreferrer nofollow"
        >
          {title}
        </Link>
      </div>
    </article>
  );
};

export default FeaturedProjectsClient;
