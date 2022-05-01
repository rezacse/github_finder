import lookupHelper from '../helpers/lookupHelper';
import appHttp from './httpService';

const { SEARCH_BY } = lookupHelper;
const searchUserOrOrganization = async (searchParam) => {
  let query = searchParam.keyword;
  if (searchParam.searchType === SEARCH_BY.ORGANIZATION) {
    query = `${query}+type:org`;
  }

  const resp = await appHttp.get(`/search/users?q=${query}`);
  if (!resp.isSuccess) return resp;

  return {
    isSuccess: true,
    noOfTotalItems: resp.data.total_count,
    items: resp.data.items.map((p) => ({
      name: p.login,
      avatarUrl: p.avatar_url,
      pageUrl: p.html_url
    }))
  };
};

export default {
  searchUserOrOrganization
};
