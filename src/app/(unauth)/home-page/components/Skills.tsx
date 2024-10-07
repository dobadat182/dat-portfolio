import {
  IconBrandAlgolia,
  IconBrandBitbucket,
  IconBrandBootstrap,
  IconBrandCss3,
  IconBrandDocker,
  IconBrandFigma,
  IconBrandGit,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandNuxt,
  IconBrandPhp,
  IconBrandReact,
  IconBrandSass,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandUbuntu,
  IconBrandVercel,
  IconHtml,
} from "@tabler/icons-react";

type BadgeProps = {
  text?: string;
  icon?: any;
};

const Badged = ({ text, icon }: BadgeProps) => {
  return (
    <div className="hover:-translate-y-1 transition rounded-lg border backdrop-blur-sm shadow-lg inline-flex items-center gap-1 px-5 py-1 bg-[#f1f5f9]">
      {icon} <span className="text-sm font-medium">{text}</span>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="mt-10 flex gap-10 flex-col md:py-10 items-center justify-center bg-background">
      <div className="max-w-screen-md w-full">
        <h3 className="text-3xl font-bold">My Tech Stack</h3>

        <div className="mt-10 flex flex-col gap-10">
          <div className="flex flex-col">
            <h4 className="text-lg font-medium text-zinc-600">Languages</h4>
            <ul className="mt-3 flex flex-wrap gap-4">
              <li>
                <Badged icon={<IconHtml size={18} />} text="Hyper Text Markup Languages" />
              </li>
              <li>
                <Badged icon={<IconBrandCss3 size={18} />} text="CSS3" />
              </li>
              <li>
                <Badged icon={<IconBrandSass size={18} />} text="SASS/SCSS" />
              </li>
              <li>
                <Badged icon={<IconBrandTypescript size={18} />} text="TypeScript" />
              </li>
              <li>
                <Badged icon={<IconBrandJavascript size={18} />} text="JavaScript" />
              </li>
              <li>
                <Badged icon={<IconBrandPhp size={18} />} text="PHP" />
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg font-medium text-zinc-600">Frameworks</h4>
            <ul className="mt-3 flex flex-wrap gap-4">
              <li>
                <Badged icon={<IconBrandReact size={18} />} text="React" />
              </li>
              <li>
                <Badged icon={<IconBrandNextjs size={18} />} text="Next" />
              </li>
              <li>
                <Badged icon={<IconBrandNuxt />} text="Nuxt" />
              </li>
              <li>
                <Badged icon={<IconBrandBootstrap size={18} />} text="Bootstrap" />
              </li>
              <li>
                <Badged icon={<IconBrandTailwind size={18} />} text="TailwindCSS" />
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg font-medium text-zinc-600">Tools & Softwares</h4>
            <ul className="mt-3 flex flex-wrap gap-4">
              <li>
                <Badged icon={<IconBrandGit size={18} />} text="Git/Github" />
              </li>
              <li>
                <Badged icon={<IconBrandDocker size={18} />} text="Docker" />
              </li>
              <li>
                <Badged icon={<IconBrandBitbucket />} text="Bitbucket" />
              </li>
              <li>
                <Badged icon={<IconBrandVercel size={18} />} text="Vercel" />
              </li>
              <li>
                <Badged icon={<IconBrandFigma size={18} />} text="Figma" />
              </li>
              <li>
                <Badged icon={<IconBrandUbuntu size={18} />} text="Ubuntu" />
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg font-medium text-zinc-600">Libraries</h4>
            <ul className="mt-3 flex flex-wrap gap-4">
              <li>
                <Badged icon={<IconBrandAlgolia size={18} />} text="Algolia" />
              </li>
              <li>
                <Badged text="Greensock" />
              </li>
              <li>
                <Badged text="Babarjs" />
              </li>
              <li>
                <Badged text="ShadCN" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
