import {FaFacebook, FaInstagram, FaThreads} from "react-icons/fa6";
import {Link} from "react-router-dom";
import {FaLinkedin, FaYoutube} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-white dark:bg-gray-950 transition duration-500 pattern">
        <div
          className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
          <p className="text-sm text-gray-600 dark:text-gray-300 transition duration-500">&copy; {currentYear} Togs by
            Madio. All right
            reserved.</p>

          <div className="flex -mx-2">
            <Link to="https://www.facebook.com/Togsbymadio/"
                  className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500"
                  aria-label="Reddit">
              <FaFacebook className="w-5 h-5"/>
            </Link>

            <Link to="https://www.instagram.com/togs____/"
                  className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500"
                  aria-label="Facebook">
              <FaInstagram className="w-5 h-5"/>
            </Link>

            <Link to="https://www.threads.net/@togs____"
                  className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500"
                  aria-label="Github">
              <FaThreads className="w-5 h-5"/>
            </Link>

            <Link to="https://lk.linkedin.com/company/togs-by-madio"
                  className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500"
                  aria-label="Github">
              <FaLinkedin className="w-5 h-5"/>
            </Link>

            <Link to="https://www.youtube.com/@TogsbyMadio"
                  className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500"
                  aria-label="Github">
              <FaYoutube className="w-5 h-5"/>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
