import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { SongsSliceType, Song } from "./types";
import axios from "axios";
import { RootState } from "store/store";

const baseUrl = "http://localhost:8000/tracks";

export const getSongs = createAsyncThunk(
  "songs/getSongs",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseUrl}/all`);
      dispatch(storeSongs(response.data));
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

const initialState: SongsSliceType = {
  songs: [],
};

const songsSlice = createSlice({
  name: "songs",
  initialState: initialState,
  reducers: {
    storeSongs: (state, action: PayloadAction<Song[]>) => {
      const songs: Song[] = action.payload;
      return {
        ...state,
        songs: songs,
      };
    },

    addSong: (state, action) => {
      const song = action.payload;
      return {
        ...state,
        songs: [...state.songs, song],
      };
    },
  },
});

export const { addSong, storeSongs } = songsSlice.actions;
export const songsState = (state: RootState) => state.songs;

export default songsSlice.reducer;
