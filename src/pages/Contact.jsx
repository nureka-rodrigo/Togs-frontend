import Footer from "../components/Footer";
import Header from "../components/Header";
import {FaMapMarkedAlt, FaPhoneAlt} from "react-icons/fa";
import {IoMailOpen} from "react-icons/io5";
import {IoIosChatboxes} from "react-icons/io";
import {Link} from "react-router-dom";
import {MdArrowForward} from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen pattern">
        <Header/>
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
                <div
                  className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700 transition duration-500">
                  <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200 transition duration-500">
                    Fill in the form
                  </h2>

                  <form>
                    <div className="grid gap-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label form="hs-firstname-contacts-1" className="sr-only">
                            First Name
                          </label>
                          <input
                            type="text"
                            name="hs-firstname-contacts-1"
                            id="hs-firstname-contacts-1"
                            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-200 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 transition duration-500"
                            placeholder="First Name"
                          />
                        </div>

                        <div>
                          <label form="hs-lastname-contacts-1" className="sr-only">
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="hs-lastname-contacts-1"
                            id="hs-lastname-contacts-1"
                            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-200 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 transition duration-500"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>

                      <div>
                        <label form="hs-email-contacts-1" className="sr-only">
                          Email
                        </label>
                        <input
                          type="email"
                          name="hs-email-contacts-1"
                          id="hs-email-contacts-1"
                          autoComplete="email"
                          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-200 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 transition duration-500"
                          placeholder="Email"
                        />
                      </div>

                      <div>
                        <label form="hs-phone-number-1" className="sr-only">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          name="hs-phone-number-1"
                          id="hs-phone-number-1"
                          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-200 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 transition duration-500"
                          placeholder="Phone Number"
                        />
                      </div>

                      <div>
                        <label form="hs-about-contacts-1" className="sr-only">
                          Details
                        </label>
                        <textarea
                          id="hs-about-contacts-1"
                          name="hs-about-contacts-1"
                          rows="4"
                          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-200 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 transition duration-500"
                          placeholder="Details"
                        ></textarea>
                      </div>
                    </div>

                    <div className="mt-4 grid">
                      <button
                        type="submit"
                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary-600 text-white hover:bg-primary-800 disabled:opacity-50 disabled:pointer-events-none transition duration-500"
                      >
                        Send inquiry
                      </button>
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
                    <IoIosChatboxes
                      className="flex-shrink-0 size-5 mt-1.5 text-gray-800 dark:text-gray-200 transition duration-500"/>
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
                        <MdArrowForward className="flex-shrink-0 size-4 transition duration-500 group-hover:translate-x-1"/>
                      </Link>
                    </div>
                  </div>

                  <div className=" flex gap-x-7 py-6">
                    <FaPhoneAlt
                      className="flex-shrink-0 size-5 mt-1.5 text-gray-800 dark:text-gray-200 transition duration-500"/>
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
                    <IoMailOpen
                      className="flex-shrink-0 size-5 mt-1.5 text-gray-800 dark:text-gray-200 transition duration-500"/>
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
                    <FaMapMarkedAlt
                      className="flex-shrink-0 size-5 mt-1.5 text-gray-800 dark:text-gray-200 transition duration-500"/>
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
                        158/G, Midland Lane, Batagama North, Ja-ela, Western Province, Sri Lanka
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
};

export default Contact;
