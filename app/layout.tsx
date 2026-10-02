import type { Metadata } from "next";
import { Poppins, Roboto_Condensed } from "next/font/google";
import Sidebar from "@/app/components/Sidebar";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Olive Whitley",
  description: "Portfolio of Olive Whitley",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${robotoCondensed.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0 lg:px-24">
          <div className="lg:flex lg:justify-between lg:gap-4">
            {/* Left: stays in place while the page scrolls */}
            <Sidebar />

            {/* Right: scrolls with the page */}
            <main className="pt-24 lg:w-[52%] lg:py-24">{children}</main>
          </div>
        </div>

        {/* Soft fade at the bottom edge so content isn't hard-cut mid-line */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-background to-transparent"
        />
      </body>
    </html>
  );
}
