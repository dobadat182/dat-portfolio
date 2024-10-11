import PrimaryLayout from "@/layouts/primary-layout";
import HomePage from "./home-page";
import Navbar from "@/components/shared/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Davis D.",
  description: "- A seasoned web developer",
};

export default function Home() {
  return (
    <div>
      <Navbar />

      <PrimaryLayout>
        <HomePage />
      </PrimaryLayout>

      {/* Footer */}
    </div>
  );
}
