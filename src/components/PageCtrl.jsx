import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

function PageCtrl({ title, children }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </>
  );
}

PageCtrl.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};
PageCtrl.defaultProps = {
  title: 'GitHub Finder'
};

export default PageCtrl;
