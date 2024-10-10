import "../styles/globals.scss";
import { Inter, Yeseva_One } from "next/font/google";

const inter = Inter({
  subsets: ["vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

const yeseva_one = Yeseva_One({
  subsets: ["vietnamese"],
  variable: "--font-yeseva-one",
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${yeseva_one.variable} antialiased scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
