import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

function AppPrimaryBtn({
  label,
  type,
  clickHandler,
  isDisabled,
  className,
  children
}) {
  const handleClick = (event) => {
    if (event) event.preventDefault();
    if (clickHandler) clickHandler(event);
  };

  return (
    <Button
      type={type}
      disabled={isDisabled}
      onClick={handleClick}
      color="primary"
      variant="contained"
      className={className}
    >
      {label || children}
    </Button>
  );
}

AppPrimaryBtn.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  children: PropTypes.node,
  clickHandler: PropTypes.func.isRequired
};

AppPrimaryBtn.defaultProps = {
  label: '',
  children: '',
  className: '',
  type: 'button',
  isDisabled: false
};

export default AppPrimaryBtn;
