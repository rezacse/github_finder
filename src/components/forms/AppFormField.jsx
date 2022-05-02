import React from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';
import { FormLabel, TextField } from '@material-ui/core';

function AppFormField({ name, label, placeholder, type, className }) {
  const { setFieldTouched, handleChange, errors, touched, values } =
    useFormikContext();
  const error = touched[name] ? errors[name] : undefined;

  return (
    <div>
      <FormLabel aria-label={name}>{label}</FormLabel>
      <TextField
        id={name}
        name={name}
        type={type}
        value={values[name]}
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
    </div>
  );
}

AppFormField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string
};
AppFormField.defaultProps = {
  placeholder: '',
  type: 'text',
  className: ''
};

export default AppFormField;
