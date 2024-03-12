"use client";
import Image from "next/image";
import { useTheme } from "next-themes";

export const Logo = () => {
  const { theme } = useTheme();
  return (
    <a href="/" className="flex items-center min-w-16">
      <Image
        className="rounded-full hover:animate-spin"
        src={theme === "light" ? "/logo.png" : "/dark-logo.png"}
        alt="logo"
        width={64}
        height={64}
        priority
      />
      <p className="hidden md:flex ml-4 bg-slate-50 dark:bg-slate-600 py-2 pl-3 pr-12 rounded-r-full">
        Aga Skrobot
      </p>
    </a>
  );
};
