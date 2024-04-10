import {useState} from 'react'
import {Dialog, Popover} from '@headlessui/react'
import {Link} from "react-router-dom";
import {IoMdClose} from "react-icons/io";
import {IoMenu} from "react-icons/io5";
import ThemeButton from "./ThemeButton.jsx";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="bg-white dark:bg-gray-950 transition duration-500">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-12 w-auto" src="./logo-2.svg" alt="Brand"/>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <IoMenu className="h-6 w-6" aria-hidden="true"/>
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Link to="#"
                  className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300 transition duration-500">
              Products
            </Link>
            <Link to="#"
                  className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300 transition duration-500">
              Features
            </Link>
            <Link to="#"
                  className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300 transition duration-500">
              Marketplace
            </Link>
            <Link to="#"
                  className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300 transition duration-500">
              Company
            </Link>
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link to="login"
                  className="text-gray-800 dark:text-white hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 transition duration-500">Log
              in</Link>
            <Link to="register"
                  className="text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none dark:focus:ring-primary-800 transition duration-500">Get
              started</Link>
          </div>
          <div className="pl-0 lg:pl-24 pt-3 hidden lg:block">
            <ThemeButton/>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10"/>
          <Dialog.Panel
            className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-gray-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition duration-500">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-12 w-auto"
                  src="./logo-2.svg"
                  alt=""
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <IoMdClose className="h-6 w-6" aria-hidden="true"/>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    to="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-300 hover:bg-gray-50 transition duration-500"
                  >
                    Products
                  </Link>
                  <Link
                    to="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-300 hover:bg-gray-50 transition duration-500"
                  >
                    Features
                  </Link>
                  <Link
                    to="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-300 hover:bg-gray-50 transition duration-500"
                  >
                    Marketplace
                  </Link>
                  <Link
                    to="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-300 hover:bg-gray-50 transition duration-500"
                  >
                    Company
                  </Link>
                </div>
                <div className="py-6">
                  <Link
                    to="login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-gray-300 hover:bg-gray-50 transition duration-500"
                  >
                    Log in
                  </Link>
                  <Link
                    to="register"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-gray-300 hover:bg-gray-50 transition duration-500"
                  >
                    Get started
                  </Link>
                </div>
                <div className="flex justify-center items-center py-6">
                  <ThemeButton/>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  )
}

export default Header;