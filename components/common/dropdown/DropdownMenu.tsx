import cn from "classnames";

type DropdownProps = {
  labelFromTrigger?: string;
  active: boolean;
  children: React.ReactNode;
};

const DropdownMenu = (props: DropdownProps) => {
  const { active, children, labelFromTrigger = "dropdown-menu" } = props;

  const linkBase =
    "origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none";
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
      tabindex="-1"
    >
      <div className="py-1" role="none">
        {children}
      </div>
    </div>
  );
};

export default DropdownMenu;
