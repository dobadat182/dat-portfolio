import ComponentHeading from "@/components/shared/ComponentHeading";
import React from "react";

const About = () => {
  return (
    <div className="flex gap-10 flex-col md:py-10 items-center justify-center bg-background">
      <div className="container">
        <ComponentHeading title="It's Me" />
      </div>
    </div>
  );
};

export default About;
