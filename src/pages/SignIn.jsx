import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {Link} from "react-router-dom";
import {useState} from "react";
import {Button} from "flowbite-react";
import {AiOutlineLoading} from "react-icons/ai";

const SignIn = () => {
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Validate email
  function validateEmail(e) {
    const data = e.target.value;

    if (data === "") {
      setEmailError("Email can not be empty!");
    } else if (!/\S+@\S+\.\S+/.test(data)) {
      setEmailError("Email address is invalid!");
    } else {
      setEmailError(null);
    }
  }

  // Validate password
  const validatePassword = (e) => {
    const data = e.target.value;

    if (data === "") {
      setPasswordError("Password can not be empty!");
    } else {
      setPasswordError(null);
    }
  };

  // Submit form
  const submitForm = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const formData = new FormData(e.target);

    // Check if there are any errors before submitting
    if (emailError || passwordError) {
      return;
    }

    // Check if email and password are empty
    if (data.email === "" && data.password === "") {
      setEmailError("Email can not be empty!");
      setPasswordError("Password can not be empty!");
    } else if (data.email === "") {
      setEmailError("Email can not be empty!");
    } else if (data.password === "") {
      setPasswordError("Password can not be empty!");
    } else {
      setEmailError(null);
      setPasswordError(null);
      setIsLoading(true);
      console.log(formData);

      // axios.post("https://api.example.com/login", formData)
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen pattern">
        <Header />
        <section className="flex min-h-full flex-1 flex-col justify-center items-center mx-4">
          <div
            className="w-full max-w-sm md:max-w-md lg:max-w-lg p-6 m-auto mx-auto rounded-xl shadow-md dark:shadow-gray-900 border dark:border-gray-700 transition duration-500">
            <div className="flex flex-col items-center justify-center mx-auto">
              <h1 className="text-3xl font-bold text-gray-800 py-5 dark:text-white transition duration-500">
                Welcome Back!
              </h1>
              <img className="w-16 h-16 -mb-5" src="./logo-2.svg" alt="" />
            </div>

            <form className="mt-6" onSubmit={(e) => submitForm(e)}>
              <div>
                <label
                  htmlFor="Email"
                  className="text-sm font-semibold leading-6 text-gray-800 dark:text-gray-200 transition duration-500"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="example@gmail.com"
                  name="email"
                  disabled={isLoading}
                  onChange={(e) => validateEmail(e)}
                  className="my-3 py-2.5 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-200 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 transition duration-500"
                />
                <span className="text-sm text-red-500">{emailError}</span>
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold leading-6 text-gray-800 dark:text-gray-200 transition duration-500"
                  >
                    Password
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-xs text-primary-600 hover:text-primary-800 transition duration-500"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  name="password"
                  disabled={isLoading}
                  onChange={(e) => validatePassword(e)}
                  className="my-3 py-2.5 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-200 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 transition duration-500"
                />
                <span className="text-sm text-red-500">{passwordError}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-start pt-3">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      id="remember"
                      name="remember"
                      required=""
                      checked={isChecked}
                      disabled={isLoading}
                      className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded transition duration-500"
                      onChange={() => setIsChecked(!isChecked)}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-800 dark:text-gray-200 transition duration-500"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform !bg-primary-600 rounded-lg hover:!bg-primary-800 focus:!outline-none focus:!ring focus:!ring-gray-300 focus:!ring-opacity-50"
                >
                  Sign In
                  {isLoading && (
                    <AiOutlineLoading className="h-6 w-6 animate-spin ml-2" />
                  )}
                </Button>
              </div>
            </form>

            <p className="mt-8 text-xs font-light text-center text-gray-400">
              {" "}
              Don&apos;t have an account?
              <Link
                to="/register"
                className="font-medium text-primary-600 hover:text-primary-800"
              >
                &nbsp;Create One
              </Link>
            </p>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default SignIn;
