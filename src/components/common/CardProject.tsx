import Link from "next/link";

type CardProps = {
  id: number;
  name: string;
  code: string;
  url?: string | undefined;
  body: string;
  img: string;
  techs: string[];
};

const CardProject = ({ name, techs, code, url = "" }: CardProps) => {
  return (
    <div className="w-full cursor-pointer overflow-hidden rounded-xl transition-transform hover:-translate-y-1">
      <div className="flex flex-col gap-4">
        <Link
          target="_blank"
          href={url}
          className="relative flex h-56 w-full items-center justify-center overflow-hidden rounded-lg bg-zinc-300"
        >
          <h4 className="font-mono text-xl font-bold uppercase text-white dark:text-black">
            {code}
          </h4>
          <div className="absolute bottom-0 left-0 px-3 pb-3">
            <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-medium shadow-xl dark:text-zinc-500">
              {techs?.map((element) => element)}
            </span>
          </div>
        </Link>
        <Link
          target="_blank"
          href={url}
          className="text-base font-medium dark:text-white"
        >
          {name}
        </Link>
      </div>
    </div>
  );
};

export default CardProject;
