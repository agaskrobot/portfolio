"use client";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ModeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-3 mx-2 cursor:pointer hover:bg-slate-50 dark:hover:bg-slate-600 rounded-xl"
    >
      {theme === "light" ? <FiSun size={24} /> : <FiMoon size={24} />}
    </button>
  );
};
