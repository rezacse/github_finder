const SEARCH_BY = Object.freeze({
  USER: 1,
  ORGANIZATION: 2
});

const getSearchTypes = () => {
  return Object.keys(SEARCH_BY).map((key) => ({
    value: SEARCH_BY[key],
    title: `${key.charAt(0)}${key.substring(1, key.length).toLocaleLowerCase()}`
  }));
};
export default {
  SEARCH_BY,
  getSearchTypes
};
