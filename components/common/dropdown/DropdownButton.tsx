import { ButtonHTMLAttributes, MouseEventHandler } from "react";
import cn from "classnames";

export interface LinkProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: MouseEventHandler;
  active?: boolean;
}

const Link = (props: LinkProps) => {
  const { active = false, onClick = () => {}, children } = props;

  const linkBase = "block px-4 py-2 text-sm hover:bg-gray-100 w-full";
  const nonActive = "text-gray-700";
  const activeClass = "text-black font-medium bg-gray-100";
  const rootClassName = cn(linkBase, {
    [nonActive]: !active,
    [activeClass]: active,
  });

  return (
    <button
      onClick={onClick}
      className={rootClassName}
      role="menuitem"
      tabindex="-1"
    >
      {children}
    </button>
  );
};

export default Link;
