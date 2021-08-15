import Link from "../../common/link/Link";
import Dropdown from "../../common/dropdown/Dropdown";
import DropdownButton from "../../common/dropdown/DropdownButton";
import ThemeToggle from "../../common/themeToggle/ThemeToggle";

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
      <Link href={link.url} title={link.title} variant="secondary" size="small">
        {link.name}
      </Link>
    </li>
  );
};

const LoginSupportLinks = ({ supportLinks = [] }: LoginSupportLinksProps) => {
  return (
    <div className="flex justify-between">
      <div className="flex md:space-x-4">
        <ThemeToggle />
        <Dropdown id="language-dropdown" title="Select Language">
          <DropdownButton active={true}>English</DropdownButton>
          <DropdownButton>Spanish</DropdownButton>
          <DropdownButton>Japanese</DropdownButton>
          <DropdownButton>Russian</DropdownButton>
        </Dropdown>
      </div>
      <ul className="flex md:space-x-4">
        {supportLinks.map((link, index) => (
          <SupportListLink key={`${link.name}-${index}`} link={link} />
        ))}
      </ul>
    </div>
  );
};

export default LoginSupportLinks;
