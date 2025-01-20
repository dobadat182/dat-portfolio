"use client";

import Link from "next/link";
import { HomeIcon, Moon, SquarePen, Sun } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/ui/dock";
import { useTheme } from "next-themes";

const DATA = {
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: SquarePen, label: "Blog" },
  ],
};

export default function HeaderBlog() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="bg-accent-1/40 fixed bottom-5 z-50 w-full">
      <TooltipProvider>
        <Dock direction="middle">
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <div className="flex items-center">
                <Link
                  prefetch={true}
                  href={item.href}
                  aria-label={item.label}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "group relative flex size-12 items-center rounded-full",
                  )}
                >
                  <item.icon className="size-4 group-hover:hidden" />
                  <span className="ml-2 hidden text-sm transition-all group-hover:inline">
                    {item.label}
                  </span>
                </Link>
              </div>
            </DockIcon>
          ))}

          <Separator orientation="vertical" className="h-full py-2" />

          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    theme === "dark" ? setTheme("light") : setTheme("dark")
                  }
                  className="transition-all"
                >
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Switch theme</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm">
                  {theme === "dark" ? "Light" : "Dark"} mode
                </p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </nav>
  );
}
