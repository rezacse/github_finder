const SEARCH_BY = Object.freeze({
  USER: 1,
  ORGANIZATION: 2
});

const getSearchTypes = () => {
  return Object.keys(SEARCH_BY).map((key) => ({
    value: SEARCH_BY[key],
    title: key
  }));
};
export default {
  SEARCH_BY,
  getSearchTypes
};
