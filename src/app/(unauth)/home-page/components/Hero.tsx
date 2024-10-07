import { Download } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Ripple from "@/components/ui/ripple";
import SparklesText from "@/components/ui/sparkles-text";

const Hero = () => {
  return (
    <div className="flex items-center justify-center relative h-screen w-full bg-background">
      <div className="absolute max-w-2xl z-10 m-auto p-5 md:p-0 flex flex-col gap-5 md:gap-10">
        <SparklesText
          className="font-sans whitespace-pre-wrap text-center text-8xl md:text-9xl font-medium tracking-tighter text-primary"
          text="Davis Do"
        />

        <div className="text-base md:text-lg text-center text-zinc-500">
          <p>I am a Vietnamese software developer</p>
          <p>Dedicated to delivering high-quality and flawless products to clients.</p>
        </div>

        <RainbowButton>
          <div className="flex cursor-pointer text-sm">
            <span>Download CV</span> <Download className="ml-3 size-[18px]" />
          </div>
        </RainbowButton>
      </div>

      <Ripple />
    </div>
  );
};

export default Hero;
