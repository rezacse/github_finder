import React from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';
import FormLabel from '@material-ui/core/FormLabel';
// import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  formGroup: {
    flexDirection: 'row'
  }
}));

function AppRadioBtnGroup({ name, label, items }) {
  const { handleChange, values } = useFormikContext();

  const classes = useStyles();

  return (
    <div id={name}>
      <FormLabel aria-label={label} className={classes.label}>
        {label}
      </FormLabel>
      <RadioGroup
        className={classes.formGroup}
        name={name}
        value={values[name]}
        onChange={handleChange}
      >
        {items.map((o) => (
          <FormControlLabel
            key={o.value}
            label={o.title}
            value={o.value}
            checked={o.value === parseInt(values[name], 10)}
            control={<Radio color="primary" />}
          />
        ))}
      </RadioGroup>
    </div>
  );
}

AppRadioBtnGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};

export default AppRadioBtnGroup;
