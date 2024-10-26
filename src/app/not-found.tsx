import { H1 } from "@/components/common/Typo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-5 bg-slate-900 text-white">
      <H1>Not Found</H1>
      <p>Could not find requested resource</p>
      <Button>
        <Link href="/" className="text-black">
          Return Home
        </Link>
      </Button>
    </div>
  );
}
