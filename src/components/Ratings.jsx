import {Button, Modal} from "flowbite-react";
import PropTypes from "prop-types";
import {StarIcon} from "@heroicons/react/20/solid";
import {AiOutlineLoading} from "react-icons/ai";
import {useState} from "react";

const reviewsData = [
  {
    title:
      "Pagedone's design system seamlessly bridges the gap between designers and developers!",
    name: "John Watson",
    date: "Nov 01, 2023",
    imgSrc: "https://pagedone.io/asset/uploads/1704351103.png",
    content:
      "One of the standout features of Pagedone is its intuitive and user-friendly interface. Navigating through the system feels natural, and the layout makes it easy to locate and utilize various design elements. This is particularly beneficial for designers looking to streamline their workflow.",
  },
  {
    title:
      "Pagedone's design system seamlessly bridges the gap between designers and developers!",
    name: "Robert Karmazov",
    date: "Nov 01, 2023",
    imgSrc: "https://pagedone.io/asset/uploads/1704351103.png",
    content:
      "One of the standout features of Pagedone is its intuitive and user-friendly interface. Navigating through the system feels natural, and the layout makes it easy to locate and utilize various design elements. This is particularly beneficial for designers looking to streamline their workflow.",
  },
  {
    title:
      "Pagedone's design system seamlessly bridges the gap between designers and developers!",
    name: "John Watson",
    date: "Nov 01, 2023",
    imgSrc: "https://pagedone.io/asset/uploads/1704351103.png",
    content:
      "One of the standout features of Pagedone is its intuitive and user-friendly interface. Navigating through the system feels natural, and the layout makes it easy to locate and utilize various design elements. This is particularly beneficial for designers looking to streamline their workflow.",
  },
  {
    title:
      "Pagedone's design system seamlessly bridges the gap between designers and developers!",
    name: "Robert Karmazov",
    date: "Nov 01, 2023",
    imgSrc: "https://pagedone.io/asset/uploads/1704351103.png",
    content:
      "One of the standout features of Pagedone is its intuitive and user-friendly interface. Navigating through the system feels natural, and the layout makes it easy to locate and utilize various design elements. This is particularly beneficial for designers looking to streamline their workflow.",
  },
  {
    title:
      "Pagedone's design system seamlessly bridges the gap between designers and developers!",
    name: "John Watson",
    date: "Nov 01, 2023",
    imgSrc: "https://pagedone.io/asset/uploads/1704351103.png",
    content:
      "One of the standout features of Pagedone is its intuitive and user-friendly interface. Navigating through the system feels natural, and the layout makes it easy to locate and utilize various design elements. This is particularly beneficial for designers looking to streamline their workflow.",
  },
  {
    title:
      "Pagedone's design system seamlessly bridges the gap between designers and developers!",
    name: "Robert Karmazov",
    date: "Nov 01, 2023",
    imgSrc: "https://pagedone.io/asset/uploads/1704351103.png",
    content:
      "One of the standout features of Pagedone is its intuitive and user-friendly interface. Navigating through the system feels natural, and the layout makes it easy to locate and utilize various design elements. This is particularly beneficial for designers looking to streamline their workflow.",
  },
];

const Ratings = ({open, setOpen}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [displayCount, setDisplayCount] = useState(2);

  const loadMoreReviews = () => {
    setIsLoading(true);
    setTimeout(() => {
      setDisplayCount((prevCount) => prevCount + 2);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <Modal
        show={open}
        onClose={() => setOpen(false)}
        size={"7xl"}
        popup
        className="rounded-lg"
      >
        <Modal.Header className="bg-gray-100 dark:bg-gray-950 rounded-t-lg"/>
        <Modal.Body className="bg-gray-100 dark:bg-gray-950">
          <section className="relative">
            <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
              <div className="w-full">
                <h2 className="font-manrope font-bold text-3xl text-gray-600 dark:text-gray-200 mb-8 text-center">
                  Reviews & Ratings
                </h2>
                <div
                  className="grid grid-cols-1 xl:grid-cols-2 gap-11 pb-11 border-b border-gray-100 max-xl:max-w-2xl max-xl:mx-auto">
                  <div className="box flex flex-col gap-y-4 w-full ">
                    <div className="flex items-center w-full">
                      <p className="font-medium text-lg text-gray-600 dark:text-gray-200 mr-0.5">
                        5
                      </p>
                      <StarIcon className="h-5 w-5 text-gray-600 dark:text-gray-600"/>
                      <p className="h-2 w-full sm:min-w-[278px] rounded-3xl bg-gray-50 ml-5 mr-3">
                        <span className="h-full w-[30%] rounded-3xl bg-gray-600 dark:bg-gray-600 flex"></span>
                      </p>
                      <p className="font-medium text-lg text-gray-600 dark:text-gray-200 mr-0.5">
                        989
                      </p>
                    </div>
                    <div className="flex items-center w-full">
                      <p className="font-medium text-lg text-gray-600 dark:text-gray-200 mr-0.5">
                        4
                      </p>
                      <StarIcon className="h-5 w-5 text-gray-600 dark:text-gray-600"/>
                      <p className="h-2 w-full xl:min-w-[278px] rounded-3xl bg-gray-50 ml-5 mr-3">
                        <span className="h-full w-[40%] rounded-3xl bg-gray-600 dark:bg-gray-600 flex"></span>
                      </p>
                      <p className="font-medium text-lg text-gray-600 dark:text-gray-200 mr-0.5">
                        4.5K
                      </p>
                    </div>
                    <div className="flex items-center">
                      <p className="font-medium text-lg text-gray-600 dark:text-gray-200 mr-0.5">
                        3
                      </p>
                      <StarIcon className="h-5 w-5 text-gray-600 dark:text-gray-600"/>
                      <p className="h-2 w-full xl:min-w-[278px] rounded-3xl bg-gray-50 ml-5 mr-3">
                        <span className="h-full w-[20%] rounded-3xl bg-gray-600 dark:bg-gray-600 flex"></span>
                      </p>
                      <p className="font-medium text-lg text-gray-600 dark:text-gray-200 mr-0.5">
                        50
                      </p>
                    </div>
                    <div className="flex items-center">
                      <p className="font-medium text-lg text-gray-600 dark:text-gray-200 mr-0.5">
                        2
                      </p>
                      <StarIcon className="h-5 w-5 text-gray-600 dark:text-gray-600"/>
                      <p className="h-2 w-full xl:min-w-[278px] rounded-3xl bg-gray-50 ml-5 mr-3">
                        <span className="h-full w-[16%] rounded-3xl bg-gray-600 dark:bg-gray-600 flex"></span>
                      </p>
                      <p className="font-medium text-lg text-gray-600 dark:text-gray-200 mr-0.5">
                        16
                      </p>
                    </div>
                    <div className="flex items-center">
                      <p className="font-medium text-lg text-gray-600 dark:text-gray-200 mr-0.5">
                        1
                      </p>
                      <StarIcon className="h-5 w-5 text-gray-600 dark:text-gray-600"/>
                      <p className="h-2 w-full xl:min-w-[278px] rounded-3xl bg-gray-50 ml-5 mr-3">
                        <span className="h-full w-[18%] rounded-3xl bg-gray-600 dark:bg-gray-600 flex"></span>
                      </p>
                      <p className="font-medium text-lg py-[1px] text-gray-600 dark:text-gray-200 mr-0.5">
                        8
                      </p>
                    </div>
                  </div>
                  <div
                    className="p-8 bg-gray-200 dark:bg-gray-900 rounded-3xl flex items-center justify-center flex-col">
                    <h2 className="font-bold text-5xl text-gray-600 dark:text-gray-400 transition duration-500 mb-6">
                      4.0
                    </h2>
                    <div className="flex items-center justify-center gap-2 sm:gap-6 mb-4">
                      <StarIcon className="h-10 w-10 text-gray-600 dark:text-gray-400 transition duration-500"/>
                      <StarIcon className="h-10 w-10 text-gray-600 dark:text-gray-400 transition duration-500"/>
                      <StarIcon className="h-10 w-10 text-gray-600 dark:text-gray-400 transition duration-500"/>
                      <StarIcon className="h-10 w-10 text-gray-600 dark:text-gray-400 transition duration-500"/>
                      <StarIcon className="h-10 w-10 text-gray-300 dark:text-gray-800 transition duration-500"/>
                    </div>
                    <p className="font-medium text-xl leading-8 text-gray-600 dark:text-gray-400 text-center">
                      117 Ratings
                    </p>
                  </div>
                </div>
                <div className="pt-11 pb-8 border-b border-gray-100 max-xl:max-w-2xl max-xl:mx-auto">
                  {reviewsData.slice(0, displayCount).map((review, index) => (
                    <div
                      key={index}
                      className="pt-8 max-xl:max-w-2xl max-xl:mx-auto"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <StarIcon className="h-8 w-8 text-gray-600 dark:text-gray-400 transition duration-500"/>
                        <StarIcon className="h-8 w-8 text-gray-600 dark:text-gray-400 transition duration-500"/>
                        <StarIcon className="h-8 w-8 text-gray-600 dark:text-gray-400 transition duration-500"/>
                        <StarIcon className="h-8 w-8 text-gray-600 dark:text-gray-400 transition duration-500"/>
                        <StarIcon className="h-8 w-8 text-gray-600 dark:text-gray-400 transition duration-500"/>
                      </div>
                      <h3 className="font-semibold text-xl leading-9 ttext-gray-600 dark:text-gray-400 mb-6">
                        {review.title}
                      </h3>
                      <div className="flex sm:items-center flex-col min-[400px]:flex-row justify-between gap-5 mb-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={review.imgSrc}
                            alt="Robert image"
                            className="w-8 h-8"
                          />
                          <h6 className="font-semibold text-md leading-8 text-primary-600">
                            {review.name}
                          </h6>
                        </div>
                        <p className="font-normal text-md leading-8 text-gray-600 dark:text-gray-400">
                          {review.date}
                        </p>
                      </div>
                      <p className="font-normal text-md leading-8 text-gray-600 dark:text-gray-400 max-xl:text-justify">
                        {review.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </Modal.Body>
        <Modal.Footer className="flex items-center justify-center bg-gray-100 dark:bg-gray-950 rounded-b-lg">
          <Button
            disabled={isLoading}
            onClick={loadMoreReviews}
            className="w-full text-sm font-medium text-gray-600 dark:text-gray-400 capitalize !bg-transparent focus:!ring-0"
          >
            Load More
            {isLoading && (
              <AiOutlineLoading className="h-6 w-6 animate-spin ml-2"/>
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

Ratings.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Ratings;
