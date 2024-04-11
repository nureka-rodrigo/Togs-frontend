import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {useState} from "react";
import faqData from "../data/faqData.jsx";
import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp} from "react-icons/md";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className="flex flex-col min-h-screen pattern">
        <Header/>
        <section className="flex-grow">
          <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
              <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white transition duration-500">Your
                questions,
                answered</h1>
              <p className="mt-1 text-gray-600 dark:text-gray-400 transition duration-500">Answers to the most
                frequently asked questions.</p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="hs-accordion-group">
                {faqData.map((item, index) => (
                  <div
                    className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05] active transition duration-500"
                    key={index}
                  >
                    <button
                      className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 transition duration-500"
                      onClick={() => handleClick(index)}
                    >
                      {item.question}
                      {openIndex === index ?
                        <MdOutlineKeyboardArrowUp
                          className="block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400 transition duration-500"/>
                        :
                        <MdOutlineKeyboardArrowDown
                          className="block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400 transition duration-500"/>
                      }
                    </button>
                    <div
                      className={openIndex === index ? 'hs-accordion-content w-full overflow-hidden transition-[height] duration-500' : 'hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-500'}>
                      <p className="text-gray-800 dark:text-gray-200 transition duration-500">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  )
}

export default Faq;