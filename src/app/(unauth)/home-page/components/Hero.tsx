import { Download } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Ripple from "@/components/ui/ripple";
import SparklesText from "@/components/ui/sparkles-text";

const Hero = () => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      <div className="absolute z-10 m-auto flex max-w-2xl flex-col gap-5 p-5 md:gap-20 md:p-0">
        <SparklesText
          className="whitespace-pre-wrap text-center font-sans text-8xl font-medium tracking-tighter md:text-9xl"
          text="Dat Do"
        />

        {/* <div className="text-center text-tertiary">
          <p>I am a Vietnamese software developer</p>
          <p>
            Dedicated to delivering high-quality and flawless products to
            clients.
          </p>
        </div> */}

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
