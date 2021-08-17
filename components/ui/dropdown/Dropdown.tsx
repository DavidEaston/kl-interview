import React, { Props } from "react";
import cn from "classnames";
import DropdownMenu from "./DropdownMenu";
import { ChevronDownIcon } from "@heroicons/react/solid";

type DropdownProps = {
  id?: string;
  title: string;
  children: React.ReactNode;
};

type DropdownState = {
  active: boolean;
};

class Dropdown extends React.Component<DropdownProps, DropdownState> {
  public static defaultProps = {
    id: "dropdown-menu",
  };

  state = {
    active: false,
  };

  // typing on RIGHT hand side of =
  toggleDropdown = (): void => {
    this.setState((prevState) => ({ active: !prevState.active }));
  };

  render() {
    const linkBase =
      "font-medium text-xs inline-flex underline text-black dark:text-gray-400 hover:text-gray-900";
    const rootClassName = cn(linkBase);

    return (
      <div>
        <div className="relative inline-block text-left">
          <div>
            <button
              type="button"
              className={rootClassName}
              id={this.props.id}
              onClick={() => {
                this.toggleDropdown();
              }}
              aria-expanded={this.state.active ? "true" : "false"}
              aria-haspopup="true"
            >
              {this.props.title}
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" />
            </button>
          </div>

          <DropdownMenu
            active={this.state.active}
            labelFromTrigger={this.props.id}
          >
            {this.props.children}
          </DropdownMenu>
        </div>
      </div>
    );
  }
}

export default Dropdown;
