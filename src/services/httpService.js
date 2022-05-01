import axios from 'axios';

function handleError(error) {
  const { response: res } = error;
  if (!res) return error;
  return { message: 'An unexpected error occurred.' };
}

const appHttp = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

appHttp.interceptors.response.use(
  (success) => Promise.resolve({ isSuccess: true, data: success.data }),
  (error) => Promise.resolve(handleError(error))
);

export default {
  get: appHttp.get,
  post: appHttp.post,
  put: appHttp.put,
  delete: appHttp.delete
};
