import About from "./components/About";
import Hero from "./components/Hero";
import FeaturedProjects from "./components/Projects";
import Skills from "./components/Skills";

const HomePage = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
    </div>
  );
};

export default HomePage;
