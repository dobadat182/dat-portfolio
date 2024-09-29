import Hero from "./components/Hero";
import FeaturedProjects from "./components/Projects";

const HomePage = () => {
  return (
    <div className="h-[200vh]">
      <Hero />
      <FeaturedProjects />
    </div>
  );
};

export default HomePage;
