import ComponentHeading from "@/components/shared/ComponentHeading";
import { MagicCard } from "@/components/ui/magic-card";

const FeaturedProjects = () => {
  return (
    <div className="flex gap-10 flex-col md:px-5 items-center justify-center bg-background">
      <ComponentHeading
        title={"Featured Projects"}
        desc={
          "Explore how I've brought ideas to life, creating captivating digital experiences that engage and inspire."
        }
      />

      <div className={"flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row"}>
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={"#D9D9D955"}
        >
          Magic
        </MagicCard>
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={"#D9D9D955"}
        >
          Card
        </MagicCard>
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={"#D9D9D955"}
        >
          Card
        </MagicCard>
      </div>
    </div>
  );
};

export default FeaturedProjects;
