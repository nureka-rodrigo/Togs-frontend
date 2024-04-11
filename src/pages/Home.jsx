import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {GiClothes, GiLoincloth} from "react-icons/gi";
import {FaTruck} from "react-icons/fa";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen pattern">
      <Header/>
      <section className="flex-grow">
        <div className="relative overflow-hidden">
          <div className="pb-80 pt-18 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg">
                <h1
                  className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-6xl transition duration-500">
                  Summer styles are finally here
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                  This year, our new summer collection will shelter you from the harsh elements of a world that
                  doesn&apos;t
                  care
                  if you live or die.
                </p>
              </div>
              <div>
                <div className="mt-10">
                  {/* Decorative image grid */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                  >
                    <div
                      className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div className="flex items-center space-x-6 lg:space-x-8">
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/collections"
                    className="inline-block rounded-md border border-transparent bg-primary-600 px-8 py-3 text-center font-medium text-white hover:bg-primary-800 transition duration-500"
                  >
                    Shop Collection
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-6 pt-16 pb-8 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <GiClothes className="w-8 h-8 text-gray-800 dark:text-white transition duration-500"/>

              <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white transition duration-500">Fashion
                for Every Occasion</h1>

              <p className="mt-2 text-gray-500 dark:text-gray-400 transition duration-500">Discover fashion pieces
                designed to suit every
                occasion, whether it&apos;s a laid-back weekend brunch or a glamorous night out. Our versatile
                collection
                ensures you&apos;re dressed to impress wherever you go.</p>
            </div>

            <div>
              <GiLoincloth className="w-8 h-8 text-gray-800 dark:text-white transition duration-500"/>

              <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white transition duration-500">Trendy
                Apparel Collection</h1>

              <p className="mt-2 text-gray-500 dark:text-gray-400 transition duration-500">Explore our latest collection
                of trendy apparel,
                carefully curated to elevate your style game. From casual tees to elegant dresses, we have everything
                you need to make a statement.</p>
            </div>

            <div>
              <FaTruck className="w-8 h-8 text-gray-800 dark:text-white transition duration-500"/>

              <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white transition duration-500">One-Day
                Delivery</h1>

              <p className="mt-2 text-gray-500 dark:text-gray-400 transition duration-500">We&apos;ve got you covered
                with our one-day delivery service. Place your order and enjoy lightning-fast
                delivery straight to your doorstep. Stay ahead of the fashion with our quick
                delivery service.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Home;