import React from 'react';
import { Avatar, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '15px',
    border: '1px solid lightgray',
    boxShadow: 'none',
    display: 'flex',
    alignContent: 'center',
    borderRadius: '4px',
    alignItems: 'center',
    padding: '24px'
  },
  avatar: {
    width: '100px',
    height: '100px',
    border: '1px solid lightgray'
  },
  name: {
    paddingLeft: '15px'
  }
}));

function ProfileItem({ profileInfo }) {
  const classes = useStyles();

  if (!profileInfo) return null;

  return (
    <li aria-label="Profile Details" className={classes.root}>
      <Avatar
        alt={`Profile Picture of ${profileInfo.name}`}
        className={classes.avatar}
        src={profileInfo.avatarUrl || ''}
        imgProps={{
          loading: 'lazy'
        }}
      />
      <Typography className={classes.name}>
        Name:{' '}
        <strong>
          <a
            href={profileInfo.pageUrl}
            target="_blank"
            aria-label={`Profile Link of ${profileInfo.name}`}
            rel="noreferrer"
          >
            {profileInfo.name}
          </a>
        </strong>
      </Typography>
    </li>
  );
}

ProfileItem.propTypes = {
  profileInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    pageUrl: PropTypes.string
  }).isRequired
};

export default ProfileItem;
