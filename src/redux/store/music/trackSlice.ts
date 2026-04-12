import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchTrackById,
  fetchTracks,
  likeTrack,
} from "../../../services/api/trackApi";

export const getTracks = createAsyncThunk(
  "track/getTracks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchTracks();
      return response.data.map(mapTracker);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const getTrackById = createAsyncThunk(
  "track/getTrackById",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetchTrackById(id);
      return mapTracker(response.data);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const toggleTrackLike = createAsyncThunk(
  "track/toggleLike",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await likeTrack(id);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export type Track = {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: number;
  url: string;
  coverUrl: string;
  source: string;
  externalId: string;
  isPreviewOnly: boolean;
  genre: string;
  createdAt: string;
  streamUrl: string;
};

const mapTracker = (track: any): Track => ({
  id: track.id,
  title: track.title,
  artist: track.artist,
  album: track.album ?? "",
  duration: track.duration,
  url: track.url ?? "",
  coverUrl: track.cover_url,
  source: track.source,
  externalId: track.external_id,
  isPreviewOnly: track.is_preview_only,
  genre: track.genre,
  createdAt: track.created_at,
  streamUrl: track.stream_url,
});

const trackSlice = createSlice({
  name: "track",
  initialState: {
    tracks: [] as Track[],
    currentTrack: null as Track | null,
    likedTracks: [] as Track[],
    loading: false,
    failed: null as string | null,
    isLoggedIn: false,
    isLoggedOut: false,
  },
  reducers: {
    setCurrentTrack: (state, action) => {
      state.currentTrack = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getTracks.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTracks.fulfilled, (state, action) => {
        state.loading = false;
        state.tracks = action.payload;
      })
      .addCase(getTracks.rejected, (state, action) => {
        state.loading = false;
        state.failed = action.payload as string | null;
      });
    builder
      .addCase(getTrackById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTrackById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentTrack = action.payload;
      })
      .addCase(getTrackById.rejected, (state, action) => {
        state.loading = false;
        state.failed = action.payload as string | null;
      });

    builder
      .addCase(toggleTrackLike.fulfilled, (state, action) => {
        const trackId = action.meta.arg;
        const exists = state.likedTracks.find((t) => t.id === Number(trackId));

        if (exists) {
          state.likedTracks = state.likedTracks.filter(
            (t) => t.id !== Number(trackId),
          );
        } else {
          const track = state.tracks.find((t) => t.id === Number(trackId));
          if (track) {
            state.likedTracks.push(track);
          }
        }
      })
      .addCase(toggleTrackLike.rejected, (state, action) => {
        state.failed = action.payload as string | null;
      });
  },
});

export const selectTracks = (state: any) => state.track.tracks;
export const selectCurrentTrack = (state: any) => state.track.currentTrack;
export const selectLikedTracks = (state: any) => state.track.likedTracks;

export const { setCurrentTrack } = trackSlice.actions;

export default trackSlice.reducer;
