"use client";

import Ripple from "@/components/ui/ripple";
import SparklesText from "@/components/ui/sparkles-text";
import styled from "styled-components";

const HeroStyles = styled.section`
  &::before {
    position: absolute;
    z-index: -1;
    content: "";
    height: 50vw;
    width: 100vw;
    top: 115%;
    translate: 0 -30%;
    left: -60vw;
    background: linear-gradient(83.21deg, #3245ff, #bc52ee);
    -webkit-mask-image: radial-gradient(rgba(0, 0, 0, 0.4), transparent 65%);
    mask-image: radial-gradient(rgba(0, 0, 0, 0.4), transparent 65%);
    @media (min-width: 575px) {
      top: 50%;
    }
  }
  &::after {
    position: absolute;
    z-index: -1;
    content: "";
    height: 50vw;
    width: 100vw;
    top: 115%;
    translate: 0 -30%;
    right: -60vw;
    background: linear-gradient(247.23deg, #4af2c8, #2f4cb3);
    -webkit-mask-image: radial-gradient(rgba(0, 0, 0, 0.5), transparent 65%);
    mask-image: radial-gradient(rgba(0, 0, 0, 0.5), transparent 65%);
    @media (min-width: 575px) {
      top: 50%;
    }
  }
`;

const Hero = () => {
  return (
    <HeroStyles className="relative flex h-screen w-full items-center justify-center">
      <div className="flex max-w-3xl flex-col">
        <SparklesText
          className="whitespace-pre-wrap text-center font-sans text-5xl font-bold tracking-tighter md:text-8xl"
          text="Website Creator"
        />
      </div>

      <Ripple mainCircleSize={300} />
    </HeroStyles>
  );
};

export default Hero;
