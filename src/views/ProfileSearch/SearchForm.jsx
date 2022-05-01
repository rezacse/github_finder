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
    '& .MuiFormControl-root': {
      marginTop: '15px'
    },
    '& .MuiFormControlLabel-label': {
      '&:first-letter': {
        textTransform: 'capitalize'
      }
    }
  },
  submitBtn: {
    marginTop: '20px',
    width: '200px'
  }
}));

const searchTypes = lookupHelper.getSearchTypes();
function SearchForm({ keyword, searchType, submitHandler }) {
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
        label="Search By"
        name="searchType"
        items={searchTypes}
      />
      <AppFormField
        name="keyword"
        label="Keyword"
        placeholder="Search by user or organization"
      />

      <AppSubmitButton
        label="Search"
        className={classes.submitBtn}
        isFullWidth={false}
      />
    </AppForm>
  );
}

SearchForm.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  keyword: PropTypes.string,
  searchType: PropTypes.number.isRequired
};

SearchForm.defaultProps = {
  keyword: ''
};

export default SearchForm;
