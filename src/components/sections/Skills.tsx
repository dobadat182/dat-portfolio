import { Skill } from "@/data/global-data";
import { H4 } from "../common/Typo";
import HeadingSection from "../common/HeadingSection";

const Badge = ({ text }: { text?: string }) => {
  return (
    <div className="inline-flex items-center gap-2 rounded-lg border bg-slate-50 px-5 py-2 shadow-md backdrop-blur-sm transition hover:-translate-y-1 dark:border-white dark:bg-transparent">
      <p className="text-sm font-medium">{text}</p>
    </div>
  );
};

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
            <H4 className="dark:text-white">Languages</H4>

            <div className="flex flex-wrap gap-3 md:gap-4">
              {Skill.languages.map(({ id, name }) => (
                <Badge key={id} text={name} />
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="flex flex-col gap-4">
            <H4 className="dark:text-white">Frameworks</H4>

            <div className="flex flex-wrap gap-4">
              {Skill.frameworks.map(({ id, name }) => (
                <Badge key={id} text={name} />
              ))}
            </div>
          </div>

          {/* CMS */}
          <div className="flex flex-col gap-4">
            <H4 className="dark:text-white">CMS</H4>

            <div className="flex flex-wrap gap-4">
              {Skill.cms.map(({ id, name }) => (
                <Badge key={id} text={name} />
              ))}
            </div>
          </div>

          {/* Tools and Softwares */}
          <div className="flex flex-col gap-4">
            <H4 className="dark:text-white">Tools & Softwares</H4>

            <div className="flex flex-wrap gap-4">
              {Skill.tools.map(({ id, name }) => (
                <Badge key={id} text={name} />
              ))}
            </div>
          </div>

          {/* Libraries */}
          <div className="flex flex-col gap-4">
            <H4 className="dark:text-white">Libraries</H4>

            <div className="flex flex-wrap gap-4">
              {Skill.libraries.map(({ id, name }) => (
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
