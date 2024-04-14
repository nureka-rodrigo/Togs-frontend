import {Fragment} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {XMarkIcon} from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
import {useCart} from "../hooks/CartProvider.jsx";
import {Link} from "react-router-dom";

const Cart = ({ open, setOpen }) => {
  const {cartItems, getTotalPrice, removeItemFromCart, getTotalItemsInCart} = useCart();

  // Remove item from cart
  const handleRemoveItem = (itemId) => {
    removeItemFromCart(itemId);
  };


  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white dark:bg-gray-950 shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900 dark:text-gray-300">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-900 dark:text-gray-300 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {cartItems.map((item) => (
                              <li key={item.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={item.imageSrc}
                                    alt={item.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div
                                      className="flex justify-between text-base font-medium text-gray-900 dark:text-gray-300 transition duration-500">
                                      <h3>
                                        <Link to={item.href}>
                                          {item.name}
                                        </Link>
                                      </h3>
                                      <p className="ml-4">${item.price}</p>
                                    </div>
                                    <p
                                      className="mt-1 text-sm text-gray-900 dark:text-gray-300 transition duration-500">
                                      Color: {item.color}
                                    </p>
                                    <p
                                      className="mt-1 text-sm text-gray-900 dark:text-gray-300 transition duration-500">
                                      Size: {item.size}
                                    </p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-900 dark:text-gray-300 transition duration-500">
                                      Qty: {item.quantity}
                                    </p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        onClick={() => handleRemoveItem(item.id)}
                                        className="font-medium text-primary-600 hover:text-primary-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div
                        className="flex justify-between text-base font-medium text-gray-900 dark:text-gray-300 transition duration-500">
                        <p>Total Items</p>
                        <p>{getTotalItemsInCart()}</p>
                      </div>
                      <div
                        className="flex justify-between text-base font-medium text-gray-900 dark:text-gray-300 transition duration-500">
                        <p>Subtotal</p>
                        {/* Calculate subtotal based on cartItems */}
                        <p>${getTotalPrice()}</p>
                      </div>
                      <div className="mt-6">
                        <button
                          className="flex items-center justify-center rounded-md border border-transparent bg-primary-600 px-6 py-2.5 text-base font-medium text-white shadow-sm hover:bg-primary-800"
                        >
                          Checkout
                        </button>
                      </div>
                      <div
                        className="mt-6 flex justify-center text-center text-sm text-gray-900 dark:text-gray-300 transition duration-500">
                        <p>
                          or{" "}
                          <button
                            type="button"
                            className="font-medium text-primary-600 hover:text-primary-500"
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

Cart.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Cart;
