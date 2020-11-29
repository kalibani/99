import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// styles
import './modal.scss';

const Modal = ({
  variant,
  show,
  children
}) => {
  const [isModalActive, setModalActive] = useState(false);
  const [isModalShow, setModalShow] = useState(false);

  const handleToggleModal = () => {
    if (show) {
      setModalShow(show);
      setTimeout(() => {
        setModalActive(show);
      }, 50);
    } else {
      setModalActive(show);
      setTimeout(() => {
        setModalShow(show);
      }, 500);
    }
  };

  useEffect(() => {
    handleToggleModal();
  }, [show]);

  return (
    <>
      {
        isModalShow && (
        <div className={`modal ${variant} ${show ? 'modal-scale-enter' : 'modal-scale-leave'} ${isModalActive ? 'modal-scale-enter-active' : 'modal-scale-leave-active'} `}>
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
