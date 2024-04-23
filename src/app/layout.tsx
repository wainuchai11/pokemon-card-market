import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const popins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokemon Card Market",
  description:
    "Pokemon Card Market is a website that provides information about Pokemon cards and their prices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={popins.className}>
        <main>
          <div className="container">
            <div className="wrapper">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
