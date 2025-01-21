import { IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";

const FooterBlog = () => {
  return (
    <footer className="mt-auto">
      <div className="mt-12 flex text-sm text-gray-500">
        <div className="grow text-left">
          <time className="inline-flex items-center leading-6" dateTime="2025">
            2021 — 2025
          </time>
        </div>

        <div className="inline-flex items-center gap-1.5">
          <IconBrandGithub className="size-4" />

          <Link
            href="/blog"
            className="link break-words text-sm text-blue-500 after:content-['_↗']"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>GitHub</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterBlog;
