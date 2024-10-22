import PrimaryLayout from "@/layouts/primary-layout";
import HomePage from "../components/pages/home-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Davis Web Engineer 🔥",
  description:
    "Davis, a web engineer with 3 years of experience in building and optimizing responsive web applications. Specializing in HTML, CSS, JavaScript, and hands-on experience with WordPress and Next.js, Davis delivers high-quality web solutions focused on performance and user experience.",
};

export default function Home() {
  return (
    <PrimaryLayout>
      <HomePage />
    </PrimaryLayout>
  );
}
