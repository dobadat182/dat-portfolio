import { Metadata } from "next";
import LayoutMain from "@/components/layouts/LayoutMain";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import FeaturedProjects from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Home - Davis Do",
  description:
    "Davis, a web engineer with 3 years of experience in building and optimizing responsive web applications. Specializing in HTML, CSS, JavaScript, and hands-on experience with WordPress and Next.js, Davis delivers high-quality web solutions focused on performance and user experience.",
};

export default function Home() {
  return (
    <LayoutMain>
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <Skills />
        <FeaturedProjects />
      </div>
    </LayoutMain>
  );
}
