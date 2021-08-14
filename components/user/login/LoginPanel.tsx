import Logo from "../../shared/Logo";
import LoginForm from "./LoginForm";
import Link from "../../common/link/Link";
import LoginSupportLinks, { SupportLink } from "./LoginSupportLinks";

type LoginPanelProps = {
  message: string;
};

const LoginPanel = ({ message }: LoginPanelProps) => {
  const supportLinks: SupportLink[] = [
    { name: "Help", title: "Help", url: "/" },
    { name: "Privacy", title: "Privacy", url: "/" },
    { name: "Terms", title: "Terms", url: "/" },
  ];

  return (
    <article className="w-full max-w-sm">
      <section className="bg-white px-8 pt-6 pb-8 shadow-kl rounded-kl">
        <header>
          <div className="pb-8">
            <Logo />
          </div>
          <h2 className="text-2xl font-semibold">Sign In</h2>
        </header>
        <div className="py-6">
          <LoginForm />
        </div>
        <footer>
          <Link href="/">Create an account</Link>
        </footer>
      </section>
      <section className="pt-4">
        <LoginSupportLinks supportLinks={supportLinks} />
      </section>
    </article>
  );
};

export default LoginPanel;
