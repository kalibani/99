import PropTypes from 'prop-types';

import './button.scss';

function Button({ children, onClick }) {
  return (
    <>
      <button className="btn-success" type="button" onClick={onClick}>
        {children}
      </button>
    </>
  );
}

Button.defaultProps = {
  children: '',
  onClick: () => {}
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func
};

export default Button;
