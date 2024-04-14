import Footer from "../components/Footer";
import Header from "../components/Header";
import {FaMapMarkedAlt, FaPhoneAlt} from "react-icons/fa";
import {IoMailOpen} from "react-icons/io5";
import {IoIosChatboxes} from "react-icons/io";
import {Link} from "react-router-dom";
import {MdArrowForward} from "react-icons/md";
import {AiOutlineLoading} from "react-icons/ai";
import {Button} from "flowbite-react";
import {useState} from "react";

const Contact = () => {
  const [firstNameError, setFirstNameError] = useState(null);
  const [lastNameError, setLastNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);
  const [detailsError, setDetailsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Validate first name
  const validateFirstName = (e) => {
    const data = e.target.value;

    if (data === "") {
      setFirstNameError("First Name can not be empty!");
    } else {
      setFirstNameError(null);
    }
  };

  // Validate last name
  const validateLastName = (e) => {
    const data = e.target.value;

    if (data === "") {
      setLastNameError("Last Name can not be empty!");
    } else {
      setLastNameError(null);
    }
  };

  // Validate email
  const validateEmail = (e) => {
    const data = e.target.value;

    if (data === "") {
      setEmailError("Email can not be empty!");
    } else if (!/\S+@\S+\.\S+/.test(data)) {
      setEmailError("Email address is invalid!");
    } else {
      setEmailError(null);
    }
  };

  // Validate phone number
  const validatePhone = (e) => {
    const data = e.target.value;

    if (data === "") {
      setPhoneError("Phone Number can not be empty!");
    } else if (!/^\d{10}$/.test(data)) {
      setPhoneError("Phone number is invalid!");
    } else {
      setPhoneError(null);
    }
  };

  // Validate details
  const validateDetails = (e) => {
    const data = e.target.value;

    if (data === "") {
      setDetailsError("Details can not be empty!");
    } else {
      setDetailsError(null);
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
      detailsError
    ) {
      return;
    }

    // Check if first name, last name, email, phone number and details are empty
    if (
      data.firstName === "" &&
      data.lastName === "" &&
      data.email === "" &&
      data.phone === "" &&
      data.details === ""
    ) {
      setFirstNameError("First Name can not be empty!");
      setLastNameError("Last Name can not be empty!");
      setEmailError("Email can not be empty!");
      setPhoneError("Phone Number can not be empty!");
      setDetailsError("Details can not be empty!");
    } else if (data.firstName === "") {
      setFirstNameError("First Name can not be empty!");
    } else if (data.lastName === "") {
      setLastNameError("Last Name can not be empty!");
    } else if (data.email === "") {
      setEmailError("Email can not be empty!");
    } else if (data.phone === "") {
      setPhoneError("Phone Number can not be empty!");
    } else if (data.details === "") {
      setDetailsError("Details can not be empty!");
    } else {
      setFirstNameError(null);
      setLastNameError(null);
      setEmailError(null);
      setPhoneError(null);
      setDetailsError(null);
      setIsLoading(true);
      console.log(formData);

      // axios.post("https://api.example.com/contact", formData)
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen pattern">
        <Header />
        <section className="flex-grow">
          <div className="max-w-7xl px-4 sm:px-6 lg:px-8 lg:py-12 mx-auto">
            <div className="mx-auto">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white transition duration-500">
                  Contact us
                </h1>
                <p className="mt-1 text-gray-600 dark:text-gray-400 transition duration-500">
                  We&apos;d love to talk about how we can help you.
                </p>
              </div>

              <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
                <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700 transition duration-500">
                  <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200 transition duration-500">
                    Fill in the form
                  </h2>

                  <form onSubmit={(e) => submitForm(e)}>
                    <div className="grid gap-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label form="firstName" className="sr-only">
                            First Name
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            onChange={(e) => validateFirstName(e)}
                            className="py-2.5 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-200 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 transition duration-500"
                            placeholder="First Name"
                          />
                          <span className="text-sm text-red-500">
                            {firstNameError}
                          </span>
                        </div>

                        <div>
                          <label form="lastName" className="sr-only">
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            onChange={(e) => validateLastName(e)}
                            className="py-2.5 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-200 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 transition duration-500"
                            placeholder="Last Name"
                          />
                          <span className="text-sm text-red-500">
                            {lastNameError}
                          </span>
                        </div>
                      </div>

                      <div>
                        <label form="email" className="sr-only">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          autoComplete="email"
                          onChange={(e) => validateEmail(e)}
                          className="py-2.5 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-200 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 transition duration-500"
                          placeholder="Email"
                        />
                        <span className="text-sm text-red-500">
                          {emailError}
                        </span>
                      </div>

                      <div>
                        <label form="phone" className="sr-only">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          onChange={(e) => validatePhone(e)}
                          className="py-2.5 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-200 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 transition duration-500"
                          placeholder="Phone Number"
                        />
                        <span className="text-sm text-red-500">
                          {phoneError}
                        </span>
                      </div>

                      <div>
                        <label form="details" className="sr-only">
                          Details
                        </label>
                        <textarea
                          id="details"
                          name="details"
                          rows="4"
                          onChange={(e) => validateDetails(e)}
                          className="py-2.5 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-200 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 transition duration-500"
                          placeholder="Details"
                        ></textarea>
                        <span className="text-sm text-red-500">
                          {detailsError}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 grid">
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

                    <div className="mt-3 text-center">
                      <p className="text-sm text-gray-500">
                        We&apos;ll get back to you in 1-2 business days.
                      </p>
                    </div>
                  </form>
                </div>

                <div className="divide-y divide-gray-200 dark:divide-gray-800 transition duration-500">
                  <div className="flex gap-x-7 py-6">
                    <IoIosChatboxes className="flex-shrink-0 size-5 mt-1.5 text-gray-800 dark:text-gray-200 transition duration-500" />
                    <div className="grow">
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200 transition duration-500">
                        FAQ
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Search our FAQ for answers to anything you might ask.
                      </p>
                      <Link
                        className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition duration-500"
                        to="/faq"
                      >
                        Visit FAQ
                        <MdArrowForward className="flex-shrink-0 size-4 transition duration-500 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  <div className=" flex gap-x-7 py-6">
                    <FaPhoneAlt className="flex-shrink-0 size-5 mt-1.5 text-gray-800 dark:text-gray-200 transition duration-500" />
                    <div className="grow">
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200 transition duration-500">
                        Contact us by phone
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        If you wish to call us instead please use
                      </p>
                      <Link
                        className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition duration-500"
                        to="tel:+94718903865"
                      >
                        071 890 3865
                      </Link>
                    </div>
                  </div>

                  <div className=" flex gap-x-7 py-6">
                    <IoMailOpen className="flex-shrink-0 size-5 mt-1.5 text-gray-800 dark:text-gray-200 transition duration-500" />
                    <div className="grow">
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200 transition duration-500">
                        Contact us by email
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        If you wish to write us an email instead please use
                      </p>
                      <Link
                        className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition duration-500"
                        to="mailto:example@site.com"
                      >
                        togsbymadio@gmail.com
                      </Link>
                    </div>
                  </div>

                  <div className=" flex gap-x-7 py-6">
                    <FaMapMarkedAlt className="flex-shrink-0 size-5 mt-1.5 text-gray-800 dark:text-gray-200 transition duration-500" />
                    <div className="grow">
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200 transition duration-500">
                        Locate us
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Main office located at
                      </p>
                      <Link
                        className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition duration-500"
                        to="https://www.bing.com/maps?where=Midland%20Lane%2C%20158%2FG%2C%20batagama%20north%2C%20Ja-ela%2C%20Western%20%2011350%2C%20LK"
                        target="_blank"
                      >
                        158/G, Midland Lane, Batagama North, Ja-ela, Western
                        Province, Sri Lanka
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
