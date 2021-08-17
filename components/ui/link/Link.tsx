import { ButtonHTMLAttributes } from "react";
import cn from "classnames";

type Size = "larger" | "large" | "regular" | "small" | "xsmall";
type LinkVariant = "primary" | "secondary";

export interface LinkProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href: string;
  size?: Size;
  variant?: LinkVariant;
  block?: boolean;
  title?: string;
}

const Link = (props: LinkProps) => {
  const {
    variant = "primary",
    size = "regular",
    block = false,
    title = "",
    children,
  } = props;

  const SIZE_MAPS: Record<Size, string> = {
    larger: "text-2xl",
    large: "text-lg",
    regular: "text-base",
    small: "text-sm",
    xsmall: "text-xs",
  };

  const VARIANT_MAPS: Record<LinkVariant, string> = {
    primary:
      "text-navyBlue dark:text-blue-300 dark:hover:text-blue-200 hover:text-indigo-800 hover:underline",
    secondary:
      "text-black dark:text-gray-400 hover:text-gray-900 hover:underline",
  };

  const linkBase = "font-medium";
  const rootClassName = cn(linkBase, SIZE_MAPS[size], VARIANT_MAPS[variant], {
    block: block,
  });

  return (
    <a href="" className={rootClassName} title={title}>
      {children}
    </a>
  );
};

export default Link;
