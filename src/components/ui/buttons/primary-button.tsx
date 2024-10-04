import Link from "next/link";
import { Button } from "../button";

const PrimaryButton = () => {
  return (
    <Button
      variant={"outline"}
      className="h-11 px-8 py-2 inline-flex items-center justify-center rounded-xl font-medium"
    >
      <Link href={"#featured-projects"}>
        <span>Explore My Work</span>
      </Link>
    </Button>
  );
};

export default PrimaryButton;
