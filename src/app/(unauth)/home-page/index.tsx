import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import About from "./components/About";
import Hero from "./components/Hero";
import FeaturedProjects from "./components/Projects";
import Skills from "./components/Skills";

const HomePage = () => {
  return (
    <div className="">
      <Hero />

      <VelocityScroll
        text="Work Work Work Work."
        default_velocity={1}
        className="font-display text-center text-4xl font-extrabold tracking-[-0.02em] drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
      />
      <About />
      <Skills />
      <FeaturedProjects />
    </div>
  );
};

export default HomePage;
