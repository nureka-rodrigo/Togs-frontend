import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {Link} from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen pattern">
        <Header/>
        <section className="flex min-h-full flex-1 flex-col justify-center items-center mx-4">
          <div className="w-full max-w-sm p-6 m-auto mx-auto rounded-xl shadow-md dark:shadow-gray-900 border dark:border-gray-700 transition duration-500">
            <div className="flex flex-col items-center justify-center mx-auto">
              <h1 className="text-3xl font-bold text-gray-800 py-5 dark:text-white transition duration-500">
                Welcome Back!
              </h1>
              <img className="w-16 h-16 -mb-5" src="./logo-2.svg" alt=""/>
            </div>

            <form className="mt-6">
              <div>
                <label htmlFor="username" className="block text-sm text-gray-800 dark:text-gray-200 transition duration-500">Username</label>
                <input type="text"
                       className="my-3 py-2.5 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-200 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 transition duration-500"/>
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm text-gray-800 dark:text-gray-200 transition duration-500">Password</label>
                  <Link to="#" className="text-xs text-primary-600 hover:text-primary-800 transition duration-500">Forgot Password?</Link>
                </div>

                <input type="password"
                       className="my-3 py-2.5 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-200 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 transition duration-500"/>
              </div>

              <div className="mt-6">
                <button
                  className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary-600 rounded-lg hover:bg-primary-800 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                  Sign In
                </button>
              </div>
            </form>

            <p className="mt-8 text-xs font-light text-center text-gray-400"> Don&apos;t have an account?
              <Link to="/register" className="font-medium text-primary-600 hover:text-primary-800">&nbsp;Create
                One</Link></p>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  )
}

export default SignIn;