import {useState} from "react";
import {Dialog, Popover} from "@headlessui/react";
import {ShoppingBagIcon} from "@heroicons/react/24/outline";
import {Link, useLocation} from "react-router-dom";
import {IoMdClose} from "react-icons/io";
import {IoMenu} from "react-icons/io5";
import ThemeButton from "./ThemeButton.jsx";
import Cart from "./Cart.jsx";

const NavItems = [
  {
    id: 1,
    text: "Collections",
    link: "/collections",
  },
  {
    id: 2,
    text: "Products",
    link: "/products",
  },
  {
    id: 3,
    text: "Contact",
    link: "/contact",
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const lastPart = useLocation().pathname;

  return (
    <>
      <header className="transition duration-500">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:pr-0"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-12 w-auto dark:invert transition duration-500"
                src="./logo-1.svg"
                alt="Brand"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <IoMenu className="h-6 w-6 text-gray-500" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            {NavItems.map((navItem) => (
              <Link
                key={navItem.id}
                to={navItem.link}
                className={`text-sm font-semibold leading-6 transition duration-500 hover:text-primary-600 dark:hover:text-primary-600 ${
                  lastPart === navItem.link
                    ? "text-primary-600 dark:text-primary-600"
                    : "text-gray-900 dark:text-gray-300"
                }`}
              >
                {navItem.text}
              </Link>
            ))}
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              to="/login"
              className="text-gray-800 dark:text-white hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 transition duration-500"
            >
              Log in
            </Link>
            <Link
              to="/register"
              className="text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none dark:focus:ring-primary-800 transition duration-500"
            >
              Get started
            </Link>
          </div>
          <div>
            <div className="ml-4 flow-root lg:ml-6">
              <button
                onClick={() => setCartOpen(true)}
                className="group -m-2 flex items-center p-2"
              >
                <ShoppingBagIcon
                  className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span className="text-sm font-medium text-gray-900 dark:text-gray-300 group-hover:text-gray-500">
                  0
                </span>
              </button>
              <Cart open={cartOpen} setOpen={setCartOpen} />
            </div>
          </div>
          <div className="pl-6 pr-2 pt-3 lg:pt-2 hidden lg:block">
            <ThemeButton />
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-gray-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition duration-500">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-12 w-auto" src="./logo-1.svg" alt="" />
              </Link>
              <button
                type="button"
                className="rounded-md text-gray-700 pr-7"
                onClick={() => setMobileMenuOpen(false)}
              >
                <IoMdClose
                  className="h-6 w-6 text-gray-500"
                  aria-hidden="true"
                />
              </button>
              <ThemeButton />
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {NavItems.map((navItem) => (
                    <Link
                      key={navItem.id}
                      to={navItem.link}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 dark:hover:bg-gray-900 transition duration-500 ${
                        lastPart === navItem.link
                          ? "text-primary-600 dark:text-primary-600"
                          : "text-gray-900 dark:text-gray-300"
                      }`}
                    >
                      {navItem.text}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    to="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition duration-500"
                  >
                    Log in
                  </Link>
                  <Link
                    to="/register"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-gray-300 hover:bg-gray-50 transition duration-500"
                  >
                    Get started
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
};

export default Header;
