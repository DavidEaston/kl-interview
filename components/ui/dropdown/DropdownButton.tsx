import { ButtonHTMLAttributes, MouseEventHandler } from "react";
import cn from "classnames";

export interface LinkProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: MouseEventHandler;
  active?: boolean;
}

const Link = (props: LinkProps) => {
  const { active = false, onClick = () => {}, children } = props;

  const linkBase = "block px-4 py-2 text-xs w-full";
  const nonActive =
    "text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-900";
  const activeClass =
    "text-black dark:text-white font-medium bg-gray-100 dark:bg-gray-900";
  const rootClassName = cn(linkBase, {
    [nonActive]: !active,
    [activeClass]: active,
  });

  return (
    <button
      onClick={onClick}
      className={rootClassName}
      role="menuitem"
      tabIndex={-1}
    >
      {children}
    </button>
  );
};

export default Link;
