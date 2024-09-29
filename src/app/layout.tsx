import { Calistoga, Roboto } from "next/font/google";
import "../styles/globals.css";
import { twMerge } from "tailwind-merge";

const calistoga = Calistoga({
  subsets: ["vietnamese"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400"],
});
const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={twMerge(roboto.className, calistoga.className, "bg-gray-900 text-white antialiased")}
    >
      <body>{children}</body>
    </html>
  );
}
