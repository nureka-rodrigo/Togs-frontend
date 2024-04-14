import {useState} from "react";
import Header from "../components/Header.jsx";
import {Link} from "react-router-dom";
import Footer from "../components/Footer.jsx";
import {AiOutlineLoading} from "react-icons/ai";
import {Button} from "flowbite-react";

const SignUp = () => {
  const [firstNameError, setFirstNameError] = useState(null);
  const [lastNameError, setLastNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);
  const [addressError, setAddressError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Validate first name
  function validateFirstName(e) {
    const data = e.target.value;

    if (data === "") {
      setFirstNameError("First name is required!");
    } else {
      setFirstNameError(null);
    }
  }

  // Validate last name
  function validateLastName(e) {
    const data = e.target.value;

    if (data === "") {
      setLastNameError("Last name is required!");
    } else {
      setLastNameError(null);
    }
  }

  // Validate email
  function validateEmail(e) {
    const data = e.target.value;

    if (data === "") {
      setEmailError("Email is required!");
    } else if (!/\S+@\S+\.\S+/.test(data)) {
      setEmailError("Email address is invalid!");
    } else {
      setEmailError(null);
    }
  }

  // Validate phone
  const validatePhone = (e) => {
    const data = e.target.value;

    if (data === "") {
      setPhoneError("Phone Number is required!");
    } else if (!/^\d{10}$/.test(data)) {
      setPhoneError("Phone number is invalid!");
    } else {
      setPhoneError(null);
    }
  };

  // Validate address
  function validateAddress(e) {
    const data = e.target.value;

    if (data === "") {
      setAddressError("Address is required!");
    } else {
      setAddressError(null);
    }
  }

  // Validate password
  const validatePassword = (e) => {
    const data = e.target.value;

    if (data === "") {
      setPasswordError("Password is required!");
    } else if (data.length < 8) {
      setPasswordError("Password must be at least 8 characters long!");
    } else {
      setPasswordError(null);
    }
  };

  // Validate confirm password
  const validateConfirmPassword = (e) => {
    const data = e.target.value;

    if (data === "") {
      setConfirmPasswordError("Confirm password is required!");
    } else {
      setConfirmPasswordError(null);
    }
  };

  // Submit form
  const submitForm = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const formData = new FormData(e.target);

    // Check if there are any errors before submitting
    if (
      firstNameError ||
      lastNameError ||
      emailError ||
      phoneError ||
      addressError ||
      passwordError ||
      confirmPasswordError
    ) {
      return;
    }

    // Check if password and confirm password match
    if (data.password !== data.confirmPassword) {
      setPasswordError("Passwords do not match!");
      setConfirmPasswordError("Passwords do not match!");
      return;
    }

    // Check if input fields are empty
    if (
      data.firstName === "" &&
      data.lastName === "" &&
      data.email === "" &&
      data.phone === "" &&
      data.address === "" &&
      data.password === "" &&
      data.confirmPassword === ""
    ) {
      setFirstNameError("First name is required!");
      setLastNameError("Last name is required!");
      setEmailError("Email is required!");
      setPhoneError("Phone number is required!");
      setAddressError("Address is required!");
      setPasswordError("Password is required!");
      setConfirmPasswordError("Confirm password is required!");
    } else if (data.firstName === "") {
      setFirstNameError("First name is required!");
    } else if (data.lastName === "") {
      setLastNameError("Last name is required!");
    } else if (data.email === "") {
      setEmailError("Email is required!");
    } else if (data.phone === "") {
      setPhoneError("Phone number is required!");
    } else if (data.address === "") {
      setAddressError("Address is required!");
    } else if (data.password === "") {
      setPasswordError("Password is required!");
    } else if (data.confirmPassword === "") {
      setConfirmPasswordError("Confirm password is required!");
    } else {
      setFirstNameError(null);
      setLastNameError(null);
      setEmailError(null);
      setPhoneError(null);
      setAddressError(null);
      setPasswordError(null);
      setConfirmPasswordError(null);
      setIsLoading(true);
      console.log(formData);

      // axios.post("https://api.example.com/register", formData)
    }
  };

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
            <form onSubmit={(e) => submitForm(e)} className="mx-auto max-w-xl">
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
                      disabled={isLoading}
                      onChange={(e) => validateFirstName(e)}
                      className="py-2.5 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-200 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 transition duration-500"
                      placeholder="John"
                    />
                    <span className="text-sm text-red-500">
                      {firstNameError}
                    </span>
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
                      disabled={isLoading}
                      onChange={(e) => validateLastName(e)}
                      className="py-2.5 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-200 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 transition duration-500"
                      placeholder="Doe"
                    />
                    <span className="text-sm text-red-500">
                      {lastNameError}
                    </span>
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
                      type="text"
                      id="email"
                      name="email"
                      autoComplete="email"
                      disabled={isLoading}
                      onChange={(e) => validateEmail(e)}
                      className="py-2.5 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-200 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 transition duration-500"
                      placeholder="example@gmail.com"
                    />
                    <span className="text-sm text-red-500">{emailError}</span>
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
                      disabled={isLoading}
                      onChange={(e) => validatePhone(e)}
                      className="py-2.5 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-200 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 transition duration-500"
                      placeholder="0712345678"
                    />
                    <span className="text-sm text-red-500">{phoneError}</span>
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
                      disabled={isLoading}
                      onChange={(e) => validateAddress(e)}
                      className="py-2.5 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-200 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 transition duration-500"
                      placeholder="158/G, Midland Lane, Batagama North, Ja-ela, Sri Lanka"
                    />
                    <span className="text-sm text-red-500">{addressError}</span>
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
                      disabled={isLoading}
                      onChange={(e) => validatePassword(e)}
                      className="py-2.5 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-200 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 transition duration-500"
                      placeholder="••••••••"
                    />
                    <span className="text-sm text-red-500">
                      {passwordError}
                    </span>
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
                      disabled={isLoading}
                      onChange={(e) => validateConfirmPassword(e)}
                      className="py-2.5 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-200 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 transition duration-500"
                      placeholder="••••••••"
                    />
                    <span className="text-sm text-red-500">
                      {confirmPasswordError}
                    </span>
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
