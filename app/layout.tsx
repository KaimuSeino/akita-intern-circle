import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "秋田インターンサークル",
  description: "秋田インターンサークルのホームページです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <link rel="icon" href="/akita-intern-favicon.ico" sizes="any" />
        <body className={inter.className}>
          {children}
        </body>
    </html>
  );
}
