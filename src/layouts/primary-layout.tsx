"use client";

import React, { useEffect } from "react";
import { throttle } from "lodash";
import { usePathname } from "next/navigation";
import Footer from "@/components/shared/Footer";

const PrimaryLayout = ({ children }: DefaultProps) => {
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = throttle(() => {}, 200);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      className={`${
        pathname === "/" && "home"
      } relative overflow-hidden [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar]:w-2`}
    >
      <div>{children}</div>
      <Footer />
    </main>
  );
};

export default PrimaryLayout;
