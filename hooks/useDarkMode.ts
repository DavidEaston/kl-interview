import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [theme, setTheme] = useState("light");
  const colorTheme = theme === "light" ? "dark" : "light";

  useEffect(() => {
    // In a more sophisticated version of this hook, use local storage to persist theme preference between pages
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [colorTheme, theme]);

  return [colorTheme, setTheme];
}
