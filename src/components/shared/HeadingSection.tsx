import React from "react";
import { Heading1 } from "./Typo";

type Props = {
  title?: string;
  desc?: string;
  variants?: string;
};

const HeadingSection = ({ title, desc, variants = "center" }: Props) => {
  return (
    <div
      className={`mb-8 flex flex-col md:mb-10 ${variants === "center" ? "items-center" : "items-start"}`}
    >
      <Heading1>{title}</Heading1>
      <p
        className={`mt-2 max-w-md text-tertiary dark:text-white md:mt-4 ${variants === "center" ? "text-center" : "text-start"}`}
      >
        {desc}
      </p>
    </div>
  );
};

export default HeadingSection;
