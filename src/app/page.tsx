import PrimaryLayout from "@/layouts/primary-layout";
import HomePage from "./(unauth)/home-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Davis D.",
  description: "",
};

export default function Home() {
  return (
    <div>
      <PrimaryLayout>
        <HomePage />
      </PrimaryLayout>
    </div>
  );
}
