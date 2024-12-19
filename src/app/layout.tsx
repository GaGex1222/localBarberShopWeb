import type { Metadata } from "next";
import { Varela_Round } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const varelRound = Varela_Round({
  weight: ['400'],
  subsets: []
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={varelRound.className}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
