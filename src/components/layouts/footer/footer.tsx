import { H3, Heading1 } from "../../common/Typo";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-0 font-sans text-3xl text-white md:items-end">
          <span className="text-3xl md:text-5xl">Let&apos;s work together</span>
          <a
            className="text-3xl transition-colors hover:text-primary md:text-5xl"
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
              <H3 className="mb-6 text-sm font-semibold uppercase text-white">
                Fine me
              </H3>
              <ul className="font-medium text-white">
                <li className="mb-4">
                  <a
                    href="https://github.com/dobadat182"
                    className="hover:underline"
                  >
                    Github
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
              <H3 className="mb-6 text-sm font-semibold uppercase text-white">
                Also here
              </H3>
              <ul className="font-medium text-white">
                <li className="mb-4">
                  <a
                    href="https://www.facebook.com/dobadat182/"
                    className="hover:underline"
                  >
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.instagram.com/dbadat182/"
                    className="hover:underline"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/badat182/"
                    className="hover:underline"
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase text-white">
                Legal
              </h3>
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
