import { useState } from "react";
import Header from "../components/Header.jsx";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import { AiOutlineLoading } from "react-icons/ai";
import { Button } from "flowbite-react";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className="flex flex-col min-h-screen pattern">
        <Header />
        <section className="flex min-h-full flex-1 flex-col justify-center items-center p-4 py-10">
          <div className="w-full max-w-sm md:max-w-md lg:max-w-lg p-6 m-auto mx-auto rounded-xl shadow-md dark:shadow-gray-900 border dark:border-gray-700 transition duration-500">
            <div className="flex flex-col items-center justify-center mx-auto">
              <h1 className="text-3xl font-bold text-gray-800 py-5 dark:text-white transition duration-500">
                Get Started!
              </h1>
              <img className="w-16 h-16 mb-5" src="./logo-2.svg" alt="" />
            </div>
            <form className="mx-auto max-w-xl">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-semibold leading-6 text-gray-800 dark:text-gray-200 transition duration-500"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="py-2.5 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-200 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 transition duration-500"
                      placeholder="John"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-semibold leading-6 text-gray-800 dark:text-gray-200 transition duration-500"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="py-2.5 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-200 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 transition duration-500"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-800 dark:text-gray-200 transition duration-500"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      className="py-2.5 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-200 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 transition duration-500"
                      placeholder="example@gmail.com"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold leading-6 text-gray-800 dark:text-gray-200 transition duration-500"
                  >
                    Phone Number
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="py-2.5 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-200 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 transition duration-500"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="address"
                    className="block text-sm font-semibold leading-6 text-gray-800 dark:text-gray-200 transition duration-500"
                  >
                    Address
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className="py-2.5 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-200 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 transition duration-500"
                      placeholder="158/G, Midland Lane, Batagama North, Ja-ela, Sri Lanka"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold leading-6 text-gray-800 dark:text-gray-200 transition duration-500"
                  >
                    Password
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="py-2.5 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-200 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 transition duration-500"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-semibold leading-6 text-gray-800 dark:text-gray-200 transition duration-500"
                  >
                    Confirm Password
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      className="py-2.5 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-200 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 transition duration-500"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
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
              Already have an account?
              <Link
                to="/login"
                className="font-medium text-primary-600 hover:text-primary-800"
              >
                &nbsp;Log In
              </Link>
            </p>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default SignUp;
