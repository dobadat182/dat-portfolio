import HeadingSection from "@/components/shared/HeadingSection";
import { H4 } from "@/components/shared/Typo";
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
  IconBrandWordpress,
  IconHtml,
} from "@tabler/icons-react";

type BadgeProps = {
  text?: string;
  icon?: any;
};

const Badge = ({ text, icon }: BadgeProps) => {
  return (
    <div className="inline-flex items-center gap-2 rounded-lg border bg-slate-50 px-5 py-2 shadow-md backdrop-blur-sm transition hover:-translate-y-1">
      {icon} <p className="text-sm font-medium">{text}</p>
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
            <H4 className="text-tertiary">Languages</H4>

            <ul className="flex flex-wrap gap-3 md:gap-4">
              <li>
                <Badge
                  icon={<IconHtml size={18} />}
                  text="Hyper Text Markup Languages"
                />
              </li>
              <li>
                <Badge icon={<IconBrandCss3 size={18} />} text="CSS3" />
              </li>
              <li>
                <Badge icon={<IconBrandSass size={18} />} text="SASS/SCSS" />
              </li>
              <li>
                <Badge
                  icon={<IconBrandTypescript size={18} />}
                  text="TypeScript"
                />
              </li>
              <li>
                <Badge
                  icon={<IconBrandJavascript size={18} />}
                  text="JavaScript"
                />
              </li>
              <li>
                <Badge icon={<IconBrandPhp size={18} />} text="PHP" />
              </li>
            </ul>
          </div>

          {/* Frameworks */}
          <div className="flex flex-col gap-4">
            <H4 className="text-tertiary">Frameworks</H4>

            <ul className="flex flex-wrap gap-4">
              <li>
                <Badge icon={<IconBrandReact size={18} />} text="React" />
              </li>
              <li>
                <Badge icon={<IconBrandNextjs size={18} />} text="Next" />
              </li>
              <li>
                <Badge icon={<IconBrandNuxt size={18} />} text="Nuxt" />
              </li>
              <li>
                <Badge
                  icon={<IconBrandBootstrap size={18} />}
                  text="Bootstrap"
                />
              </li>
              <li>
                <Badge
                  icon={<IconBrandTailwind size={18} />}
                  text="TailwindCSS"
                />
              </li>
            </ul>
          </div>

          {/* CMS */}
          <div className="flex flex-col gap-4">
            <H4 className="text-tertiary">CMS</H4>

            <ul className="flex flex-wrap gap-4">
              <li>
                <Badge
                  icon={<IconBrandWordpress size={18} />}
                  text="Wordpress"
                />
              </li>
              <li>
                <Badge text="CraftCMS" />
              </li>
              <li>
                <Badge text="Sapo" />
              </li>
              <li>
                <Badge text="Wix" />
              </li>
            </ul>
          </div>

          {/* Tools and Softwares */}
          <div className="flex flex-col gap-4">
            <H4 className="text-tertiary">Tools & Softwares</H4>

            <ul className="flex flex-wrap gap-4">
              <li>
                <Badge icon={<IconBrandGit size={18} />} text="Git/Github" />
              </li>
              <li>
                <Badge icon={<IconBrandDocker size={18} />} text="Docker" />
              </li>
              <li>
                <Badge
                  icon={<IconBrandBitbucket size={18} />}
                  text="Bitbucket"
                />
              </li>
              <li>
                <Badge icon={<IconBrandVercel size={18} />} text="Vercel" />
              </li>
              <li>
                <Badge icon={<IconBrandFigma size={18} />} text="Figma" />
              </li>
              <li>
                <Badge icon={<IconBrandUbuntu size={18} />} text="Ubuntu" />
              </li>
            </ul>
          </div>

          {/* Libraries */}
          <div className="flex flex-col gap-4">
            <H4 className="text-tertiary">Libraries</H4>

            <ul className="flex flex-wrap gap-4">
              <li>
                <Badge icon={<IconBrandAlgolia size={18} />} text="Algolia" />
              </li>
              <li>
                <Badge text="Greensock" />
              </li>
              <li>
                <Badge text="Babarjs" />
              </li>
              <li>
                <Badge text="ShadCN" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
