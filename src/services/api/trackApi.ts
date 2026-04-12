import { axiosClient } from "./axiosClient";

export const fetchTracks = async () => await axiosClient.get("/tracks");

export const fetchTrackById = async (id: string) =>
  await axiosClient.get(`/tracks/${id}`);

export const likeTrack = async (id: string) =>
  await axiosClient.post(`tracks/${id}/like`);
