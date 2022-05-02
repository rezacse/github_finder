import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import searchService from '../../services/searchService';
import SearchForm from './SearchForm';
import ProfileListCtrl from './ProfileListCtrl';
import routePath from '../../routePath';
import lookupHelper from '../../helpers/lookupHelper';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    padding: '0 20px',
    maxWidth: '600px'
  },
  section: {
    marginTop: '20px',
    width: '100%'
  }
}));

const initState = {
  keyword: '',
  searchType: 0,
  profiles: [],
  noOfTotalItems: 0,
  isFetching: false
};

function ProfileSearchView() {
  const classes = useStyles();

  const { keyword, searchType } = useParams();
  const sType = parseInt(searchType, 10);
  const navigate = useNavigate();

  const [state, setState] = useState({ ...initState });

  const searchHandler = async (searchParam) => {
    setState((ps) => ({
      ...ps,
      keyword: searchParam.keyword,
      searchType: searchParam.searchType,
      isFetching: true
    }));

    const resp = await searchService.searchUserOrOrganization(searchParam);
    setState((ps) => ({
      ...ps,
      noOfTotalItems: resp.noOfTotalItems,
      profiles: resp.items,
      isFetching: false
    }));
  };

  useEffect(() => {
    if (keyword && sType && !state.isFetching) {
      searchHandler({ keyword, searchType: sType });
    } else {
      setState((ps) => ({
        ...ps,
        profiles: [],
        noOfTotalItems: 0
      }));
    }
  }, [keyword, sType]);

  const submitHandler = (sp) => {
    navigate(`/${routePath.SEARCH}/${sp.keyword}/${sp.searchType}`);
  };

  return (
    <article className={classes.root}>
      <h3>Search User/Organization</h3>
      <section aria-label="Search Profiles" className={classes.section}>
        <SearchForm
          keyword={keyword}
          isSubmitting={state.isFetching}
          searchType={sType || lookupHelper.SEARCH_BY.USER}
          submitHandler={submitHandler}
        />
      </section>
      <hr />
      <section aria-label="Search Results" className={classes.section}>
        <ProfileListCtrl
          items={state.profiles}
          keyword={keyword}
          isFetching={state.isFetching}
          noOfTotalItems={state.noOfTotalItems}
        />
      </section>
    </article>
  );
}

ProfileSearchView.propTypes = {};

ProfileSearchView.defaultProps = {};

export default ProfileSearchView;
