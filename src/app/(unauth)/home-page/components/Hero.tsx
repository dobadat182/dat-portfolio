import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { Button } from "@/components/ui/button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Ripple from "@/components/ui/ripple";
import SparklesText from "@/components/ui/sparkles-text";
import { ArrowDownIcon, ArrowRightIcon, Download } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex items-center justify-center relative h-screen w-full bg-background">
      <div className="absolute max-w-2xl z-10 m-auto p-5 md:p-0 flex flex-col gap-5 md:gap-10">
        <div className="w-fit mx-auto rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ Embrace challenges</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>

        <SparklesText
          className="font-sans whitespace-pre-wrap text-center text-8xl md:text-9xl font-medium tracking-tighter text-primary"
          text="Davis Do"
        />

        <div className="text-base md:text-lg text-center">
          <p>A seasoned web developer specializing in Wordpress and Next/React.</p>
          <p>
            I create high-quality, scalable web solutions that focus on delivering seamless user experiences
            with clean, maintainable code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-between">
          <Button className="h-11 px-8 py-2 inline-flex items-center justify-center rounded-xl font-medium">
            <span>Explore My Work</span> <ArrowDownIcon className="ml-3 size-[18px] mb-1" />
          </Button>
          <RainbowButton>
            <div className="flex cursor-pointer text-sm">
              <span>Download CV</span> <Download className="ml-3 size-[18px]" />
            </div>
          </RainbowButton>
        </div>
      </div>

      <Ripple />
    </div>
  );
};

export default Hero;
