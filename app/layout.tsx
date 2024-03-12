import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ModeProvider } from "./comonents/ModeProvider";

export const metadata: Metadata = {
  title: "Aga Skrobot - Software engineer",
  description:
    "React.js Developer highly motivated and holds a strong passion for exploring new Blockchain technologies such as Ethers.js, Web3.js, Solidity, and Hardhat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ModeProvider>{children} </ModeProvider>
      </body>
    </html>
  );
}
