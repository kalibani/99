// import { Fragment } from 'react';
import PropTypes from 'prop-types';

import { CSSTransition } from 'react-transition-group';

// styles
import './modal.scss';

const Modal = ({
  variant,
  show,
  children
}) =>

  // eslint-disable-next-line implicit-arrow-linebreak
  (
    <CSSTransition
      transitionName="modal-scale"
      in={show}
      timeout={500}
      classNames="modal-scale"
      unmountOnExit
    >
      <div className={`modal ${variant}`}>
        <div className="modal-content">
          <div className="modal-body">
            {children}
          </div>
        </div>
      </div>
    </CSSTransition>
  );

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
