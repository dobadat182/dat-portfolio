import { ThemeProvider } from "@/providers/theme-provider";
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${yeseva_one.variable} scroll-smooth antialiased`}
    >
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
