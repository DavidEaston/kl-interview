import { Link } from "@components/ui/link";
import { Dropdown } from "@components/ui/dropdown";
import { DropdownButton } from "@components/ui/dropdown";
import { ThemeToggle } from "@components/ui/themeToggle";

export type SupportLink = {
  name: string;
  title: string;
  url: string;
};

type LoginSupportLinksProps = {
  supportLinks?: SupportLink[];
};

type SupportListLinkProps = {
  link: SupportLink;
};

const SupportListLink = ({ link }: SupportListLinkProps) => {
  return (
    <li>
      <Link
        href={link.url}
        title={link.title}
        variant="secondary"
        size="xsmall"
      >
        {link.name}
      </Link>
    </li>
  );
};

const LoginSupportLinks = ({ supportLinks = [] }: LoginSupportLinksProps) => {
  return (
    <div className="sm:flex sm:justify-between p-4 sm:p-0 dark:text-white">
      <div className="flex justify-between sm:space-x-4">
        <ThemeToggle />
        <Dropdown id="language-dropdown" title="Select Language">
          <DropdownButton active={true}>English</DropdownButton>
          <DropdownButton>French</DropdownButton>
          <DropdownButton>Japanese</DropdownButton>
          <DropdownButton>Russian</DropdownButton>
        </Dropdown>
      </div>
      <ul className="flex p-8 sm:p-0 justify-center sm:justify-evenly space-x-4">
        {supportLinks.map((link, index) => (
          <SupportListLink key={`${link.name}-${index}`} link={link} />
        ))}
      </ul>
    </div>
  );
};

export default LoginSupportLinks;
