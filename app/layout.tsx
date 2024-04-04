import { Public_Sans } from "next/font/google";
import "./globals.css";
import { Metadata } from "next/types";

const public_Sans = Public_Sans({ subsets: ["latin"], 
  variable: "--public-sans",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "This is Based",
  description: "This is a website and it has stuff about based things.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={public_Sans.className}>{children}</body>
    </html>
  );
}
