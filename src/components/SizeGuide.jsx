import {Modal} from "flowbite-react";
import PropTypes from "prop-types";

const SizeGuide = ({open, setOpen}) => {
  return (
    <>
      <Modal show={open} onClose={() => setOpen(false)} popup className="rounded-lg">
        <Modal.Header className="bg-gray-100 dark:bg-gray-900 rounded-t-lg"/>
        <Modal.Body className="bg-gray-100 dark:bg-gray-900 rounded-b-lg">
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
              companies around the world are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
              to ensure a common set of data rights in the European Union. It requires organizations to notify users as
              soon as possible of high-risk data breaches that could personally affect them.
            </p>
          </div>
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
