import LoginForm from "./LoginForm";
import LoginSupportLinks, { SupportLink } from "./LoginSupportLinks";
import { Logo } from "@components/shared/logo";
import { Link } from "@components/ui/link";

const LoginPanel = () => {
  const supportLinks: SupportLink[] = [
    { name: "Help", title: "Help", url: "/" },
    { name: "Privacy", title: "Privacy", url: "/" },
    { name: "Terms", title: "Terms", url: "/" },
  ];

  return (
    <article className="w-full max-w-sm">
      <section className="bg-white dark:bg-gray-800 transition-colors px-4 sm:pl-8 sm:pr-7 pt-8 pb-9 shadow-kl rounded-kl">
        <header>
          <div className="pb-10">
            <Logo />
          </div>
          <h2 className="text-2xl font-semibold dark:text-white transition-colors">
            Sign In
          </h2>
        </header>
        <div className="pt-8 pb-9">
          <LoginForm />
        </div>
        <footer className="text-center sm:text-left">
          <Link href="/" size="small">
            Create an account
          </Link>
        </footer>
      </section>
      <section className="pt-3">
        <LoginSupportLinks supportLinks={supportLinks} />
      </section>
    </article>
  );
};

export default LoginPanel;
