import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import makeStyles from '@material-ui/styles/makeStyles';

import {
  AppForm,
  AppFormField,
  AppRadioBtnGroup,
  AppSubmitButton
} from '../../components/forms';
import lookupHelper from '../../helpers/lookupHelper';

const validationSchema = Yup.object().shape({
  searchType: Yup.number().required().label('Search By'),
  keyword: Yup.string().required().label('Keyword')
});

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiFormLabel-root': {
      color: 'black !important'
    }
  },
  submitBtn: {
    marginTop: '20px',
    width: '200px'
  }
}));

const searchTypes = lookupHelper.getSearchTypes();
function SearchForm({ keyword, searchType, isSubmitting, submitHandler }) {
  const classes = useStyles();

  return (
    <AppForm
      initValues={{ keyword, searchType }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        submitHandler(values);
      }}
      className={classes.root}
      enableReinitialize
    >
      <AppRadioBtnGroup
        label="Choose Search By"
        name="searchType"
        items={searchTypes}
      />
      <AppFormField
        name="keyword"
        label="Enter Name"
        placeholder="Search by user or organization"
      />

      <AppSubmitButton
        isSubmitting={isSubmitting}
        label="Search"
        className={classes.submitBtn}
      />
    </AppForm>
  );
}

SearchForm.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  keyword: PropTypes.string,
  isSubmitting: PropTypes.bool,
  searchType: PropTypes.number.isRequired
};

SearchForm.defaultProps = {
  isSubmitting: false,
  keyword: ''
};

export default SearchForm;
