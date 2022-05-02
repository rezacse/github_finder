import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

function AppForm({
  initValues,
  children,
  onSubmit,
  className,
  validationSchema,
  enableReinitialize
}) {
  return (
    <Formik
      initialValues={initValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize={enableReinitialize}
    >
      {() => <form className={className}>{children}</form>}
    </Formik>
  );
}

AppForm.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  initValues: PropTypes.objectOf(PropTypes.any).isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  enableReinitialize: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  validationSchema: PropTypes.objectOf(PropTypes.any)
};

AppForm.defaultProps = {
  // initValues: {},
  validationSchema: {},
  className: '',
  enableReinitialize: false
};
export default AppForm;
