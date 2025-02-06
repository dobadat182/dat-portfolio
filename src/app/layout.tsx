import "../styles/globals.scss";
import { ThemeProvider } from "@/providers/theme-provider";
import { Inter, Volkhov } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import CookieConsent from "@/components/common/CookieConsent";



const inter = Inter({
  subsets: ["vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

const volkhov = Volkhov({
  subsets: ["latin"],
  variable: "--font-volkhov-one",
  weight: ["400", "700"],
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
      className={`${inter.variable} ${volkhov.variable} scroll-smooth antialiased`}
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

        <CookieConsent variant="small" />
        <Analytics />
      </body>
    </html>
  );
}
