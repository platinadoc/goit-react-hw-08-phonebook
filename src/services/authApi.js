import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const saveToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerApi = async userData => {
  const { data } = await axios.post('/users/signup', userData);
  saveToken.set(data.token);
  return data;
};

export const logInApi = async userData => {
  const { data } = await axios.post('/users/login', userData);
  saveToken.set(data.token);
  return data;
};

export const logOutApi = async () => {
  await axios.post('/users/logout');
  saveToken.unset();
};

export const getCurrentUserApi = async persistedToken => {
  saveToken.set(persistedToken);
  const { data } = await axios.get('/users/current');
  return data;
};
