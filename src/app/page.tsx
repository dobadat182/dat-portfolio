import PrimaryLayout from "@/layouts/primary-layout";
import HomePage from "../components/pages/home-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Davis Dev ✨",
  description: "...",
};

export default function Home() {
  return (
    <PrimaryLayout>
      <HomePage />
    </PrimaryLayout>
  );
}
