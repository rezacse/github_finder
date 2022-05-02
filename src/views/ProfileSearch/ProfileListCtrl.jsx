import React from 'react';
import { Typography } from '@material-ui/core';
import makeStyles from '@material-ui/styles/makeStyles';

import PropTypes from 'prop-types';
import ProfileItem from './ProfileItem';
import AppLoadingCtrl from '../../components/AppLoadingCtrl';

const useStyles = makeStyles(() => ({
  list: {
    padding: 0,
    listStyleType: 'none'
  }
}));

function ProfileListCtrl({ isFetching, keyword, items, noOfTotalItems }) {
  const classes = useStyles();

  if (!keyword) return null;

  const noResult = !isFetching && noOfTotalItems === 0 && keyword;
  return (
    <>
      {isFetching && <AppLoadingCtrl title="Searching..." />}
      {noResult && (
        <Typography aria-label="Result Summary">
          No results found for {keyword}
        </Typography>
      )}
      {noOfTotalItems > 0 && (
        <Typography aria-label="Result Summary">
          Total <strong>{noOfTotalItems}</strong> Records found for{' '}
          <strong>{keyword}</strong>
        </Typography>
      )}
      <ul className={classes.list} aria-label="List of Profiles">
        {items.map((item) => (
          <ProfileItem key={item.name} profileInfo={item} />
        ))}
      </ul>
    </>
  );
}

ProfileListCtrl.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  noOfTotalItems: PropTypes.number.isRequired,
  keyword: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
      pageUrl: PropTypes.string
    })
  ).isRequired
};

ProfileListCtrl.defaultProps = {
  keyword: ''
};

export default ProfileListCtrl;
