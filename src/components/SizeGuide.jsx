import {useState} from "react";
import {Modal} from "flowbite-react";
import PropTypes from "prop-types";

const data = {
  men: [
    {size: "XXS", chest: "18", height: "60"},
    {size: "XS", chest: "18", height: "62"},
    {size: "S", chest: "18", height: "64"},
    {size: "M", chest: "18", height: "66"},
    {size: "L", chest: "18", height: "68"},
    {size: "XL", chest: "18", height: "70"},
    {size: "2XL", chest: "18", height: "72"},
    {size: "3XL", chest: "18", height: "74"},
  ],
  women: [
    {size: "XXS", chest: "18", height: "60"},
    {size: "XS", chest: "18", height: "62"},
    {size: "S", chest: "18", height: "64"},
    {size: "M", chest: "18", height: "66"},
    {size: "L", chest: "18", height: "68"},
    {size: "XL", chest: "18", height: "70"},
    {size: "2XL", chest: "18", height: "72"},
    {size: "3XL", chest: "18", height: "74"},
  ],
  kids: [
    {size: "XXS", chest: "18", height: "60"},
    {size: "XS", chest: "18", height: "62"},
    {size: "S", chest: "18", height: "64"},
    {size: "M", chest: "18", height: "66"},
    {size: "L", chest: "18", height: "68"},
    {size: "XL", chest: "18", height: "70"},
    {size: "2XL", chest: "18", height: "72"},
    {size: "3XL", chest: "18", height: "74"},
  ],
};

const SizeGuide = ({open, setOpen}) => {
  const [category, setCategory] = useState("men"); // State to track selected category

  // Function to handle category change
  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  return (
    <>
      <Modal
        show={open}
        onClose={() => setOpen(false)}
        size={"3xl"}
        popup
        className="rounded-lg"
      >
        <Modal.Header className="bg-gray-100 dark:bg-gray-950 rounded-t-lg"/>
        <Modal.Body className="bg-gray-100 dark:bg-gray-950 rounded-b-lg">
          <section className="container px-4 pb-4 mx-auto">
            {/* Modal content */}
            <div className="sm:flex sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-x-3">
                  <h1 className="text-xl font-medium text-gray-800 dark:text-white">
                    Size Guide
                  </h1>
                </div>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                  All product sizes are designed to fit to the following body
                  measurements. Some products may vary from these measurements
                  but you can still use them as a guide.
                </p>
              </div>
            </div>

            <div className="mt-6 md:flex md:items-center md:justify-between">
              <div
                className="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
                <button
                  className={`px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 ${category === "men" ? "bg-gray-200 dark:bg-gray-800 dark:text-gray-300" : ""}`}
                  onClick={() => handleCategoryChange("men")}
                >
                  Men
                </button>

                <button
                  className={`px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 ${category === "women" ? "bg-gray-200 dark:bg-gray-800 dark:text-gray-300" : ""}`}
                  onClick={() => handleCategoryChange("women")}
                >
                  Women
                </button>

                <button
                  className={`px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 ${category === "kids" ? "bg-gray-200 dark:bg-gray-800 dark:text-gray-300" : ""}`}
                  onClick={() => handleCategoryChange("kids")}
                >
                  Kids
                </button>
              </div>
            </div>

            <div className="flex flex-col mt-6">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400 w-1/8"
                        >
                          <button className="flex items-center gap-x-3 focus:outline-none">
                              <span className="font-medium text-gray-800 dark:text-white">
                                Size
                              </span>
                          </button>
                        </th>
                        {data[category].map((item) => (
                          <th
                            key={item.size}
                            scope="col"
                            className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-800 dark:text-white w-1/8"
                          >
                            {item.size}
                          </th>
                        ))}
                      </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      <tr>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div>
                            <h2 className="font-medium text-gray-800 dark:text-white">
                              Chest
                            </h2>
                          </div>
                        </td>
                        {data[category].map((item) => (
                          <td
                            key={`${item.size}-chest`}
                            className="px-4 py-4 text-sm whitespace-nowrap"
                          >
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">
                                {item.chest}
                              </p>
                            </div>
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div>
                            <h2 className="font-medium text-gray-800 dark:text-white">
                              Height
                            </h2>
                          </div>
                        </td>
                        {data[category].map((item) => (
                          <td
                            key={`${item.size}-height`}
                            className="px-4 py-4 text-sm whitespace-nowrap"
                          >
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">
                                {item.height}
                              </p>
                            </div>
                          </td>
                        ))}
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Modal.Body>
      </Modal>
    </>
  );
};

SizeGuide.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default SizeGuide;
