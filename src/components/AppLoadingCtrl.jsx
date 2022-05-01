import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import makeStyles from '@material-ui/styles/makeStyles';
import { CircularProgress, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: '12px',
    paddingLeft: '20px',
    color: 'lightgray'
  }
}));

function AppLoadingCtrl({ title, className }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <CircularProgress />
      <Typography className={classes.title}> {title}</Typography>
    </div>
  );
}

AppLoadingCtrl.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string
};
AppLoadingCtrl.defaultProps = {
  title: '',
  className: ''
};
export default AppLoadingCtrl;
