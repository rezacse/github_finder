import React from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';
import { CircularProgress } from '@material-ui/core';

import AppPrimaryBtn from '../buttons/AppPrimaryBtn';

function AppSubmitButton({ label, isSubmitting, className }) {
  const { isValid, dirty, handleSubmit } = useFormikContext();

  return (
    <AppPrimaryBtn
      type="submit"
      className={className}
      isDisabled={isSubmitting || !isValid || !dirty}
      clickHandler={() => {
        handleSubmit();
      }}
    >
      {isSubmitting && <CircularProgress size={15} color="secondary" />} {label}
    </AppPrimaryBtn>
  );
}

AppSubmitButton.propTypes = {
  label: PropTypes.string.isRequired,
  isSubmitting: PropTypes.bool,
  className: PropTypes.string
};

AppSubmitButton.defaultProps = {
  isSubmitting: false,
  className: ''
};

export default AppSubmitButton;
