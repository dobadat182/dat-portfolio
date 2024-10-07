import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { IconBrandInstagram, IconBrandLinkedin, IconFileText, IconMail } from "@tabler/icons-react";

type BadgeProps = {
  link: string;
  text?: string;
  icon?: any;
};
type ItemProps = {
  title?: string;
  desc?: string;
};

const Item = ({ title, desc }: ItemProps) => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <h3 className="text-6xl font-extrabold">{title}</h3>
      <p className="text-lg">{desc}</p>
    </div>
  );
};

const Badged = ({ link, text, icon }: BadgeProps) => {
  return (
    <Link
      href={link}
      className="hover:-translate-y-1 transition rounded-lg border backdrop-blur-sm shadow-lg flex items-center gap-1 px-5 py-1"
    >
      {icon} <span className="text-sm font-medium">{text}</span>
    </Link>
  );
};

const About = () => {
  return (
    <div className="flex gap-14 flex-col items-center justify-center bg-background p-14">
      <div className="max-w-screen-md w-full flex justify-between">
        <div className="flex gap-4">
          <Avatar className="w-20 h-20 rounded border shadow-2xl">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div>
            <h2 className="text-2xl font-semibold">Davis D.</h2>
            <p className="text-base text-zinc-500">Frontend Developer - Freelancer - Maker</p>
          </div>
        </div>

        <p className="text-base font-medium">Viet Nam, HCM</p>
      </div>

      <div className="max-w-screen-md w-full flex gap-4 py-5">
        <Badged text="Resume" link="test" icon={<IconFileText size={18} strokeWidth={1.4} />} />
        <Badged text="Get in touch" link="test" icon={<IconMail size={18} strokeWidth={1.4} />} />
        <Badged link="test" icon={<IconBrandLinkedin size={18} strokeWidth={1.8} />} />
        <Badged link="test" icon={<IconBrandInstagram size={18} strokeWidth={1.8} />} />
      </div>

      <div className="max-w-screen-lg w-full flex justify-between">
        <p className="text-3xl">
          A seasoned web developer specializing in Wordpress and Next/React. I create high-quality, scalable
          web solutions that focus on delivering seamless user experiences with clean, maintainable code.
        </p>
      </div>

      <div className="max-w-screen-md flex justify-between w-full border-b pb-10">
        <Item title="3+" desc="Years of Experience" />
        <Item title="10+" desc="Projects" />
        <Item title="3" desc="Companies Worked" />
      </div>
    </div>
  );
};

export default About;
