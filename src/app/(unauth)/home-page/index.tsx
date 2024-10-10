import About from "./components/About";
import Hero from "./components/Hero";
import FeaturedProjects from "./components/Projects";
import Skills from "./components/Skills";

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
