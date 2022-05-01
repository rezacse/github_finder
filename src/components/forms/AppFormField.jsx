import React from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';
import { TextField } from '@material-ui/core';

function AppFormField({ name, label, placeholder, type, className }) {
  const { setFieldTouched, handleChange, errors, touched, values } =
    useFormikContext();
  const error = touched[name] ? errors[name] : undefined;

  return (
    <TextField
      name={name}
      type={type}
      value={values[name]}
      label={label || ''}
      placeholder={placeholder || ''}
      onBlur={() => {
        setFieldTouched(name);
      }}
      onChange={handleChange(name)}
      fullWidth
      error={!!error}
      helperText={error}
      className={className}
      margin="dense"
      variant="outlined"
    />
  );
}

AppFormField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string
};
AppFormField.defaultProps = {
  label: '',
  placeholder: '',
  type: 'text',
  className: ''
};

export default AppFormField;
