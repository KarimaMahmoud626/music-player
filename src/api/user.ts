import API from './axiosClient';

export const getLikedTracks = async () => {
  const res = await API.get('/liked/');
  return res.data;
};

export const getHistory = async () => {
  const res = await API.get('/history/');
  return res.data;
};

export const getRecommendations = async () => {
  const res = await API.get('/recommendations/');
  return res.data;
};