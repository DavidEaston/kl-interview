import cn from "classnames";
import { FormikProps, withFormik, FormikErrors, Form, Field } from "formik";
import { Spinner } from "@components/ui/icons/";
import { Link } from "@components/ui/link";

interface FormValues {
  username: string;
  password: string;
}

const LoginInnerForm = (props: FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting } = props;

  const inputBaseClasses =
    "shadow appearance-none border rounded-kl w-full p-3 text-gray-700 dark:text-gray-200 dark:bg-gray-700 dark:border-black transition-colors leading-tight focus:outline-none focus:shadow-outline";
  const inputErrorStateClass = "border-red-500";

  const baseSubmitClass =
    "bg-blue hover:bg-blue-dark dark:bg-blue-500 dark:hover:bg-blue-400 text-white block w-full sm:inline-flex sm:w-auto sm:items-center font-bold text-xs py-4 px-5 sm:py-2 rounded-kl focus:outline-none focus:shadow-outline";
  const submitLoadingStateClass = "cursor-not-allowed";

  return (
    <Form>
      <div className="mb-3">
        <Field
          type="text"
          name="username"
          placeholder="Email or Phone *"
          className={cn(inputBaseClasses, {
            [inputErrorStateClass]: touched.username && errors.username,
          })}
        />
        {touched.username && errors.username && (
          <p className="pt-2 text-red-500 text-xs italic">{errors.username}</p>
        )}
      </div>
      <div className="mb-2">
        <Field
          type="password"
          name="password"
          placeholder="Password *"
          className={cn(inputBaseClasses, {
            [inputErrorStateClass]: touched.password && errors.password,
          })}
        />
        {touched.password && errors.password && (
          <p className="pt-2 text-red-500 text-xs italic">{errors.password}</p>
        )}
      </div>
      <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row-reverse sm:items-center sm:justify-between text-center sm:text-left">
        <button
          className={cn(baseSubmitClass, {
            [submitLoadingStateClass]: isSubmitting,
          })}
          type="submit"
          disabled={isSubmitting}
        >
          {!isSubmitting ? (
            "Sign In"
          ) : (
            <>
              Loading
              <Spinner className={"-mr-1 ml-3 h-5 w-5 text-white"} />
            </>
          )}
        </button>
        <Link href="/forgot-password" size="small">
          Forgot Password?
        </Link>
      </div>
    </Form>
  );
};

interface MyFormProps {
  initialUsername?: string;
}

const LoginForm = withFormik<MyFormProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: (props) => {
    return {
      username: props.initialUsername || "",
      password: "",
    };
  },

  // Add a custom validation function (this can be async too!)
  validate: (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};
    if (!values.username) {
      errors.username = "Please provide a email or phone number";
    }

    if (!values.password) {
      errors.password = "Please enter your password";
    }

    return errors;
  },

  handleSubmit: async (values) => {
    const res = await fetch(`/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (res.status === 200) {
      alert("Hooray! You are in!");
    } else if (res.status === 401) {
      alert(
        "Oh no, you might have slipped up on your username or password, please check them and try again!"
      );
    }
  },
})(LoginInnerForm);

export default LoginForm;
