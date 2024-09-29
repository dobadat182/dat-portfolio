"use client";

import React, { useEffect, useState } from "react";
import AnimatedCircularProgressBar from "@/components/ui/animated-circular-progress-bar";
import { throttle } from "lodash";
import { usePathname } from "next/navigation";

const PrimaryLayout = ({ children }: DefaultProps) => {
  const [scrollValue, setScrollValue] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollTop = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.min(Math.max((scrollTop / windowHeight) * 100, 0), 100);
      setScrollValue(scrollPercentage);
    }, 200);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className={`${pathname === "/" && "home"} relative overflow-hidden`}>
      <div>{children}</div>

      <AnimatedCircularProgressBar
        className="fixed mr-6 mb-6 right-0 bottom-0 size-20"
        max={100}
        min={0}
        value={Math.round(scrollValue)}
        gaugePrimaryColor="rgb(79 70 229)"
        gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
      />
    </main>
  );
};

export default PrimaryLayout;
