import React, { Props } from "react";
import cn from "classnames";
import DropdownMenu from "./DropdownMenu";
import { ChevronDownIcon } from '@heroicons/react/solid'

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

    const linkBase = "font-medium text-sm inline-flex underline";
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
          {/* <div
            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div className="py-1" role="none">
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
              >
                Account settings
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
              >
                Support
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-2"
              >
                License
              </a>
              <form method="POST" action="#" role="none">
                <button
                  type="submit"
                  className="text-gray-700 block w-full text-left px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-3"
                >
                  Sign out
                </button>
              </form>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Dropdown;
