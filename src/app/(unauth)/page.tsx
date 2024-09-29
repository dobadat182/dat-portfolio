import PrimaryLayout from "@/layouts/primary-layout";
import HomePage from "./home-page";
import Navbar from "@/components/shared/Navbar";

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
