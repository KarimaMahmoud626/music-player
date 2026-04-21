import API from './axiosClient';

//login auth
export const login = async (email: string, password: string) => {
  const res = await API.post('/auth/login/', {
    email,
    password,
  });
  return res.data;
};

//register auth
export const register = async (email: string, password: string) => {
  const res = await API.post('/auth/register/', {
    email,
    password,
  });
  return res.data;
};

//refresh token auth
export const refreshToken = async (refresh: string) => {
  const res = await API.post('/auth/refresh/', {
    refresh,
  });
  return res.data;
};

//profile auth
export const getMyProfile = async () => {
  const res = await API.get('/auth/me/');
  return res.data;
};
