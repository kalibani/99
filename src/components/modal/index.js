import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// styles
import './modal.scss';

const Modal = ({
  variant,
  show,
  children
}) => {
  const [isModalDone, setModalDone] = useState(false);

  const handleModalDone = () => {
    setTimeout(() => {
      setModalDone(show);
    }, 100);
  };

  useEffect(() => {
    handleModalDone();
  }, [show]);

  return (
    <>
      {
        show && (

        <div className={`modal ${variant} ${show ? 'modal-scale-enter' : 'modal-scale-leave'} ${isModalDone ? 'modal-scale-enter-active' : 'modal-scale-leave-active'} `}>
          <div className="modal-content">
            <div className="modal-body">
              {children}
            </div>
          </div>
        </div>
        )
      }
    </>
  );
};

Modal.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node,
  show: PropTypes.bool
};

Modal.defaultProps = {
  show: false,
  variant: '',
  children: ''
};

export default Modal;
