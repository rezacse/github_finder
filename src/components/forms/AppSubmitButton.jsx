import React from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';
import AppPrimaryBtn from '../buttons/AppPrimaryBtn';

function AppSubmitButton({ label, className }) {
  const { isValid, dirty, handleSubmit } = useFormikContext();

  return (
    <AppPrimaryBtn
      label={label}
      type="submit"
      className={className}
      isDisabled={!isValid || !dirty}
      clickHandler={() => {
        handleSubmit();
      }}
    />
  );
}

AppSubmitButton.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string
};

AppSubmitButton.defaultProps = {
  className: ''
};

export default AppSubmitButton;
