"use client";

import { ThemeProvider } from "next-themes";
import { PropsWithChildren, useEffect, useState } from "react";

export const ModeProvider = ({ children }: PropsWithChildren) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};
