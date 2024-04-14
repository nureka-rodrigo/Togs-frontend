import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const collections = [
  {
    name: "Basic Tees",
    description: "Soft and comfortable natural fiber tees.",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
    imageAlt: "Collection Image",
    href: "#",
  },
  {
    name: "Pants",
    description: "Comfortable and stylish pants.",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
    imageAlt: "Collection Image",
    href: "#",
  },
  {
    name: "Accessories",
    description: "Variety of colors and styles.",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg",
    imageAlt: "Collection Image",
    href: "#",
  },
];

const Collections = () => {
  return (
    <div className="flex flex-col min-h-screen pattern">
      <Header />
      <section className="flex-grow">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 lg:py-12 lg:max-w-7xl">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white transition duration-500">
              Browse Our Collections
            </h1>
            <p className="mt-1 text-gray-600 dark:text-gray-400 transition duration-500">
              We have a wide range of products for you to choose from.
            </p>
          </div>

          <div className="mx-auto max-w-2xl py-10 lg:max-w-none lg:py-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white transition duration-500">
              Men&apos;s Collection
            </h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {collections.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500 dark:text-gray-500 transition duration-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900 dark:text-white transition duration-500">
                    {callout.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto max-w-2xl py-10 lg:max-w-none lg:py-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white transition duration-500">
              Women&apos;s Collection
            </h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {collections.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500 dark:text-gray-500 transition duration-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900 dark:text-white transition duration-500">
                    {callout.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Collections;
