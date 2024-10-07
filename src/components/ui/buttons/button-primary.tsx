import Link from "next/link";
import { Button } from "../button";

type Props = {
  type?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
  text?: string;
};

const ButtonPrimary = ({ type, text }: Props) => {
  return (
    <Button
      variant={type}
      className="h-11 px-8 py-2 inline-flex items-center justify-center rounded-xl font-medium"
    >
      <Link href={"#featured-projects"}>
        <span>{text || "Explore My Work"}</span>
      </Link>
    </Button>
  );
};

export default ButtonPrimary;
