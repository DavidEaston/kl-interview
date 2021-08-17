import cn from "classnames";

type DropdownProps = {
  labelFromTrigger?: string;
  active: boolean;
  children: React.ReactNode;
};

const DropdownMenu = (props: DropdownProps) => {
  const { active, children, labelFromTrigger = "dropdown-menu" } = props;

  const linkBase =
    "orgin-top-right sm:origin-top-left absolute sm:left-0 right-0 sm:right-auto mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none";
  const rootClassName = cn(linkBase, {
    "transform opacity-0 scale-95": !active,
    "transform opacity-100 scale-100": active,
  });

  return (
    <div
      className={rootClassName}
      role="menu"
      aria-orientation="vertical"
      aria-labelledby={labelFromTrigger}
      tabIndex={-1}
    >
      <div className="py-1" role="none">
        {children}
      </div>
    </div>
  );
};

export default DropdownMenu;
