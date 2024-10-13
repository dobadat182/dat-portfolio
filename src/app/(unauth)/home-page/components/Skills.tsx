import HeadingSection from "@/components/shared/HeadingSection";
import { H4 } from "@/components/shared/Typo";

type BadgeProps = {
  text?: string;
};

const Badge = ({ text }: BadgeProps) => {
  return (
    <div className="inline-flex items-center gap-2 rounded-lg border bg-slate-50 px-5 py-2 shadow-md backdrop-blur-sm transition hover:-translate-y-1 dark:text-tertiary">
      <p className="text-sm font-medium">{text}</p>
    </div>
  );
};

const DATA_languages = [
  {
    id: 1,
    name: "HTML5",
  },
  {
    id: 2,
    name: "CSS3",
  },
  {
    id: 3,
    name: "SASS/SCSS",
  },
  {
    id: 4,
    name: "Typescript",
  },
  {
    id: 5,
    name: "Javascipt",
  },
  {
    id: 6,
    name: "PHP",
  },
  {
    id: 7,
    name: "Liquid",
  },
  {
    id: 8,
    name: "Velo",
  },
];
const DATA_frameworks = [
  { id: 1, name: "React" },
  { id: 2, name: "Next" },
  { id: 3, name: "Nuxt" },
  { id: 4, name: "Bootstrap" },
  { id: 5, name: "TailwindCSS" },
];
const DATA_cms = [
  { id: 1, name: "Wordpress" },
  { id: 2, name: "CraftCMS" },
  { id: 3, name: "Sapo" },
  { id: 4, name: "Wix" },
];
const DATA_tools = [
  { id: 1, name: "Git / Github" },
  { id: 2, name: "Docker" },
  { id: 3, name: "Bitbucket" },
  { id: 4, name: "Vercel" },
  { id: 5, name: "Netlify" },
  { id: 6, name: "Figma" },
  { id: 7, name: "Ubuntu" },
];
const DATA_libraries = [
  { id: 1, name: "ShadCN" },
  { id: 2, name: "Greensock" },
  { id: 3, name: "Framer motion" },
  { id: 4, name: "BarbarJS" },
  { id: 5, name: "Algolia" },
  { id: 6, name: "WooCommerce" },
];

const Skills = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center px-5 md:px-0">
      <div className="w-full max-w-screen-md">
        <HeadingSection
          title="My Tech Stack"
          desc="The technologies and programming languages I've worked with in real-world projects."
        />

        <div className="flex flex-col gap-10">
          {/* Languages */}
          <div className="flex flex-col gap-4">
            <H4 className="text-tertiary dark:text-white">Languages</H4>

            <div className="flex flex-wrap gap-3 md:gap-4">
              {DATA_languages.map(({ id, name }) => (
                <Badge key={id} text={name} />
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="flex flex-col gap-4">
            <H4 className="text-tertiary dark:text-white">Frameworks</H4>

            <div className="flex flex-wrap gap-4">
              {DATA_frameworks.map(({ id, name }) => (
                <Badge key={id} text={name} />
              ))}
            </div>
          </div>

          {/* CMS */}
          <div className="flex flex-col gap-4">
            <H4 className="text-tertiary dark:text-white">CMS</H4>

            <div className="flex flex-wrap gap-4">
              {DATA_cms.map(({ id, name }) => (
                <Badge key={id} text={name} />
              ))}
            </div>
          </div>

          {/* Tools and Softwares */}
          <div className="flex flex-col gap-4">
            <H4 className="text-tertiary dark:text-white">Tools & Softwares</H4>

            <div className="flex flex-wrap gap-4">
              {DATA_tools.map(({ id, name }) => (
                <Badge key={id} text={name} />
              ))}
            </div>
          </div>

          {/* Libraries */}
          <div className="flex flex-col gap-4">
            <H4 className="text-tertiary dark:text-white">Libraries</H4>

            <div className="flex flex-wrap gap-4">
              {DATA_libraries.map(({ id, name }) => (
                <Badge key={id} text={name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
