import API from './axiosClient';

export const getPlaylists = async () => {
  const res = await API.get('/playlists/');
  return res.data;
};

export const createPlaylist = async (name: string) => {
  const res = await API.post('/playlists/', {
    name,
  });
  return res.data;
};

export const addTrackToPlaylist = async (
  playlistId: number,
  trackId: number
) => {
  const res = await API.post(
    `/playlists/${playlistId}/add_track/`,
    { track_id: trackId }
  );
  return res.data;
};