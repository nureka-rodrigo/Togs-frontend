import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const SignIn = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen pattern">
        <Header/>
        <section className="flex min-h-full flex-1 flex-col justify-center items-center mx-4">
          <div>
            <div className="w-full">
              <h1
                className="text-center text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white transition duration-500">
                Sign in to your account
              </h1>
            </div>
            {/*Form*/}
            <div className="mt-10 w-full">
              <form className="space-y-6" action="#" method="POST">
              <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-600 dark:text-gray-400 transition duration-500">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="py-2.5 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-200 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 transition duration-500"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-600 dark:text-gray-400 transition duration-500">
                      Password
                    </label>
                    <div className="text-sm">
                      <a href="#" className="font-semibold text-primary-600 hover:text-primary-800">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="py-2.5 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-200 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 transition duration-500"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-primary-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm text-gray-600 dark:text-gray-400 transition duration-500">
                Not a member?{' '}
                <a href="#" className="font-semibold leading-6 text-primary-600 hover:text-primary-800">
                  Register
                </a>
              </p>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  )
}

export default SignIn;