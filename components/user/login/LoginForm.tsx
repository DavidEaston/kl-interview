import React, { Props } from "react";
import Link from "../../common/link/Link";

type LoginFormProps = {
  // using `interface` is also ok
  message?: string;
};

type LoginFormState = {
  submitted: boolean;
  username: string;
  password: string;
};

class LoginForm extends React.Component<LoginFormProps, LoginFormState> {
  state = {
    username: "",
    password: "",
    submitted: false,
  };

  handleSubmit = (): void => {
    this.setState({ submitted: true });
  };

  // typing on RIGHT hand side of =
  onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ username: e.currentTarget.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-4">
          <label for="username">
            <span className="sr-only">Username</span>
            <input
              className="shadow appearance-none border rounded-kl w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username *"
              value={this.state.username}
              onChange={this.onChange}
            />
          </label>
        </div>
        <div className="mb-6">
          <label for="password">
            <span className="sr-only">Password</span>
            <input
              className="shadow appearance-none border border-red-500 rounded-kl w-full p-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              value={this.state.password}
              placeholder="Password *"
              onChange={this.onChange}
            />
          </label>
          <p className="text-red-500 text-xs italic">
            Please choose a password.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <Link href="/">Forgot Password</Link>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-kl focus:outline-none focus:shadow-outline"
            type="button"
          >
            {!this.state.submitted ? "Sign In" : "Loading..."}
          </button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
