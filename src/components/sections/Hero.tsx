import Ripple from "@/components/ui/ripple";
import SparklesText from "@/components/ui/sparkles-text";

const Hero = () => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      <div className="flex max-w-3xl flex-col">
        <SparklesText
          className="whitespace-pre-wrap text-center font-sans text-5xl font-medium tracking-tighter md:text-8xl"
          text="Website Creator"
        />
      </div>

      <Ripple />
    </div>
  );
};

export default Hero;
