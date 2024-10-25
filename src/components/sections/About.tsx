import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconFileText,
  IconMail,
} from "@tabler/icons-react";
import { H3, Heading1 } from "@/components/shared/Typo";
import ImageMe from "@/assets/images/datdo.jpg";
import Image from "next/image";

type ProfileItemProps = {
  link: string;
  text?: string;
  icon?: any;
};

type ExperienceItemProps = {
  value: number;
  desc?: string;
  text?: string;
};

const ExperiencesItem = ({ value, desc, text }: ExperienceItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 sm:gap-3">
      <Heading1>
        {value}
        {text}
      </Heading1>
      <p className="text-center">{desc}</p>
    </div>
  );
};

const ProfileItem = ({ link, text, icon }: ProfileItemProps) => {
  return (
    <Link
      href={link}
      scroll={false}
      className="flex items-center gap-1 rounded-lg border px-4 py-1 shadow-lg backdrop-blur-sm transition hover:-translate-y-1 md:px-5"
    >
      {icon} <span className="text-xs font-medium md:text-sm">{text}</span>
    </Link>
  );
};

const About = () => {
  return (
    <div className="background flex flex-col items-center gap-10">
      <div className="mt-10 flex w-full max-w-screen-md justify-between px-5 lg:px-0">
        <div className="flex gap-5 px-5 sm:px-0">
          <Avatar className="h-20 w-20 rounded border shadow-2xl md:h-24 md:w-24">
            <Image src={ImageMe} alt="Dat Do" />
            <AvatarFallback>Dat Do</AvatarFallback>
          </Avatar>

          <div>
            <H3>Davis D.</H3>
            <p className="text-xs md:text-sm">
              Frontend Developer - Freelancer
            </p>
          </div>
        </div>

        <p className="hidden font-bold md:block">VietNam, HCM</p>
      </div>

      <div className="flex w-full max-w-screen-md items-center gap-3 px-5 md:gap-4 lg:px-0">
        <ProfileItem
          text="Resume"
          link="/"
          icon={<IconFileText className="w-4" strokeWidth={1.4} />}
        />
        <ProfileItem
          text="Get in touch"
          link="mailto:badat336@gmail.com"
          icon={<IconMail className="w-4" strokeWidth={1.4} />}
        />
        <ProfileItem
          link="https://www.linkedin.com/in/badat182/"
          icon={<IconBrandLinkedin className="w-4" strokeWidth={1.6} />}
        />
        <ProfileItem
          link="https://www.instagram.com/dbadat182/"
          icon={<IconBrandInstagram className="w-4" strokeWidth={1.6} />}
        />
      </div>

      <div className="w-full border-y-2 px-5 py-8">
        <div className="mx-auto flex max-w-screen-md justify-between">
          <ExperiencesItem value={3} text="+" desc="Years of Experience" />
          <ExperiencesItem value={10} text="+" desc="Completed Projects" />
          <ExperiencesItem value={3} desc="Companies Worked" />
        </div>
      </div>

      <div className="flex w-full max-w-screen-lg items-center px-5 md:px-0">
        <h2 className="leading scroll-m-20 text-2xl font-extrabold md:text-center lg:text-4xl">
          A seasoned web developer specializing in WordPress and Next/React. I
          create high-quality, scalable web solutions that focus on delivering
          seamless user experiences with clean, maintainable code.
        </h2>
      </div>
    </div>
  );
};

export default About;
