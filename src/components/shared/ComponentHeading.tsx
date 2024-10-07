import React from "react";

interface Props {
  className?: string;
  title?: string;
  desc?: string;
}

const ComponentHeading = ({ title, desc, className }: Props) => {
  return (
    <div className={`flex flex-col items-center ${className || ""}`}>
      <h3 className="font-sans text-4xl font-bold">{title}</h3>
      <p className="max-w-lg mt-3 text-center text-base text-zinc-500">{desc}</p>
    </div>
  );
};

export default ComponentHeading;
