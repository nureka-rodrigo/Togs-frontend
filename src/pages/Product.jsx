import {useState} from "react";
import {StarIcon} from "@heroicons/react/20/solid";
import {RadioGroup} from "@headlessui/react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {useCart} from "../hooks/CartProvider.jsx";
import {FaMinus, FaPlus} from "react-icons/fa";
import SizeGuide from "../components/SizeGuide.jsx";
import Ratings from "../components/Ratings.jsx";

const product = {
  id: 1,
  name: "Basic Tee 6-Pack",
  price: "192",
  quantity: 1,
  href: "http://localhost:3000/product",
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    {name: "White", class: "bg-white", selectedClass: "ring-gray-400"},
    {name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400"},
    {name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900"},
  ],
  sizes: [
    {name: "XXS", inStock: false},
    {name: "XS", inStock: true},
    {name: "S", inStock: true},
    {name: "M", inStock: true},
    {name: "L", inStock: true},
    {name: "XL", inStock: true},
    {name: "2XL", inStock: true},
    {name: "3XL", inStock: true},
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};

const reviews = {href: "#", average: 4, totalCount: 117};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Product = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [sizeError, setSizeError] = useState(true);
  const [colorError, setColorError] = useState(true);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [ratingOpen, setRatingOpen] = useState(false);

  const {addItemToCart} = useCart();

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setColorError(false);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    setSizeError(false);
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      console.log("Please select color, size, and quantity before adding to cart.");
      return;
    }

    const itemToAdd = {
      id: product.id,
      name: product.name,
      href: product.href,
      size: selectedSize.name,
      color: selectedColor.name,
      price: product.price,
      quantity: quantity,
      imageSrc: product.images[0].src,
      imageAlt: product.images[0].alt,
    };
    addItemToCart(itemToAdd);
  };

  return (
    <div className="flex flex-col min-h-screen pattern">
      <Header/>
      <section className="flex-grow">
        <div className="pt-6">
          {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl px-4 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
              <img
                src={product.images[0].src}
                alt={product.images[0].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src={product.images[1].src}
                  alt={product.images[1].alt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src={product.images[2].src}
                  alt={product.images[2].alt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
              <img
                src={product.images[3].src}
                alt={product.images[3].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* Product info */}
          <div
            className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1
                className="text-2xl font-bold tracking-tight text-gray-600 dark:text-gray-400 sm:text-3xl transition duration-500">
                {product.name}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-600 dark:text-gray-400 transition duration-500">
                ${product.price}
              </p>

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          reviews.average > rating
                            ? "text-gray-600 dark:text-gray-400 transition duration-500"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                  <button
                    onClick={() => setRatingOpen(true)}
                    className="ml-3 text-sm font-medium text-primary-600 hover:text-primary-500"
                  >
                    {reviews.totalCount} reviews
                  </button>
                  <Ratings setOpen={setRatingOpen} open={ratingOpen}/>
                </div>
              </div>

              <div className="mt-10">
                {/* Colors */}
                <div>
                  <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 transition duration-500">
                    Color
                  </h3>

                  <RadioGroup
                    value={selectedColor}
                    onChange={handleColorChange}
                    className="my-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a color
                    </RadioGroup.Label>
                    <div className="flex items-center space-x-3">
                      {product.colors.map((color) => (
                        <RadioGroup.Option
                          key={color.name}
                          value={color}
                          className={({active, checked}) =>
                            classNames(
                              color.selectedClass,
                              active && checked ? "ring ring-offset-1" : "",
                              !active && checked ? "ring-2" : "",
                              "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                            )
                          }
                        >
                          <RadioGroup.Label as="span" className="sr-only">
                            {color.name}
                          </RadioGroup.Label>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              color.class,
                              "h-8 w-8 rounded-full border border-black border-opacity-10"
                            )}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                  {colorError && (
                    <span className="text-sm text-red-500">Please select a color.</span>
                  )}
                </div>

                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 transition duration-500">
                      Size
                    </h3>
                    <button
                      onClick={() => setSizeGuideOpen(true)}
                      className="text-sm font-medium text-primary-600 hover:text-primary-500"
                    >
                      Size guide
                    </button>
                    <SizeGuide setOpen={setSizeGuideOpen} open={sizeGuideOpen}/>
                  </div>

                  <RadioGroup
                    value={selectedSize}
                    onChange={handleSizeChange}
                    className="my-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a size
                    </RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      {product.sizes.map((size) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={({active}) =>
                            classNames(
                              size.inStock
                                ? "cursor-pointer bg-white text-text-gray-600 dark:text-gray-400-900 shadow-sm transition duration-500"
                                : "cursor-not-allowed bg-gray-50 text-gray-600 dark:text-gray-400 transition duration-500",
                              active ? "ring-2 ring-primary-500" : "",
                              "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                            )
                          }
                        >
                          {({active, checked}) => (
                            <>
                              <RadioGroup.Label as="span">
                                {size.name}
                              </RadioGroup.Label>
                              {size.inStock ? (
                                <span
                                  className={classNames(
                                    active ? "border" : "border-2",
                                    checked ? "border-primary-500" : "border-transparent",
                                    "pointer-events-none absolute -inset-px rounded-md"
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                            <svg
                              className="absolute inset-0 h-full w-full stroke-2 text-gray-600 dark:text-gray-400 transition duration-500"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                              stroke="currentColor"
                            >
                              <line
                                x1={0}
                                y1={100}
                                x2={100}
                                y2={0}
                                vectorEffect="non-scaling-stroke"
                              />
                            </svg>
                          </span>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                  {sizeError && (
                    <span className="text-sm text-red-500">Please select a size.</span>
                  )}
                </div>

                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 transition duration-500 my-4">
                  Quantity
                </h3>
                <div className="relative flex items-center max-w-[8rem] my-4">
                  {/* Decrement button */}
                  <button
                    type="button"
                    onClick={handleDecrement}
                    className="bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-2.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                  >
                    <FaMinus className="w-3 h-3 text-gray-600 dark:text-gray-300"/>
                  </button>
                  {/* Quantity input */}
                  <input
                    type="text"
                    value={quantity}
                    readOnly
                    className="py-1.5 px-4 block w-full border-gray-200 text-center text-sm focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-100 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 transition duration-500"
                    placeholder="1"
                    required
                  />
                  {/* Increment button */}
                  <button
                    type="button"
                    onClick={handleIncrement}
                    className="bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-2.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                  >
                    <FaPlus className="w-3 h-3 text-gray-600 dark:text-gray-300"/>
                  </button>
                </div>

                <button
                  type="submit"
                  onClick={handleAddToCart}
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-primary-600 px-8 py-2.5 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  Add to bag
                </button>
              </div>
            </div>

            <div className="pt-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-10 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-600 dark:text-gray-400 transition duration-500">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 transition duration-500">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600 dark:text-gray-400 transition duration-500">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-600 dark:text-gray-400 transition duration-500">
                  Details
                </h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600 dark:text-gray-400 transition duration-500">
                    {product.details}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Product;
