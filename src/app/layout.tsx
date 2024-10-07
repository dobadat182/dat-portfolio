import { twMerge } from "tailwind-merge";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={twMerge("antialiased scroll-smooth")}>
      <body>{children}</body>
    </html>
  );
}
