import About from "../sections/About";
import Hero from "../sections/Hero";
import FeaturedProjects from "../sections/Projects";
import Skills from "../sections/Skills";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
    </div>
  );
};

export default HomePage;
