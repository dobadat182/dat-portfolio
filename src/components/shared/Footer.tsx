import React from "react";
import { Heading1 } from "./Typo";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-0 font-sans text-3xl text-white md:items-end md:text-5xl">
          <span>Let&apos;s work together</span>
          <a
            className="transition-colors hover:text-primary"
            href="mailto:badat336@gmail.com"
          >
            badat336@gmail.com
          </a>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-16 md:flex-row">
          <div className="flex flex-col gap-5 text-white">
            <Heading1>Davis Do</Heading1>
            <p>Davis Do © All Rights Reserved. 2024</p>
          </div>
          <div className="grid grid-cols-3 gap-8 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Resources
              </h2>
              <ul className="font-medium text-white">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Flowbite
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Find me
              </h2>
              <ul className="font-medium text-white">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 font-semibold uppercase text-white">Legal</h2>
              <ul className="text-base text-white">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
