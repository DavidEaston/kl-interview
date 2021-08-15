import { ButtonHTMLAttributes } from "react";
import cn from "classnames";
import { SunIcon, MoonIcon } from '@heroicons/react/solid'
import useDarkMode from "../../../hooks/useDarkMode";

export interface ThemeToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

const ThemeToggle = (props: ThemeToggleProps) => {
  const [colorTheme, setTheme] = useDarkMode()
  const ThemeToggleBase = "font-medium";
  const rootClassName = cn(ThemeToggleBase);

  return (
    <button
    type="button"
    className={rootClassName}
    onClick={() => setTheme(colorTheme)}
  >
    {colorTheme === 'light' ? 
      <SunIcon className="-mr-1 ml-2 h-5 w-5" />  
      : <MoonIcon className="-mr-1 ml-2 h-5 w-5" />
    }
  </button>
  );
};

export default ThemeToggle;
