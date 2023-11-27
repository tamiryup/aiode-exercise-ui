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

export const addSong = createAsyncThunk(
  "songs/addSong",
  async (payload: Song, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseUrl}/add`, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch(handleAddSong(payload));
      return payload;
    } catch (error) {
      console.log("error in server request");
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

    handleAddSong: (state, action) => {
      const song = action.payload;
      return {
        ...state,
        songs: [...state.songs, song],
      };
    },
  },
});

export const { handleAddSong, storeSongs } = songsSlice.actions;
export const songsState = (state: RootState) => state.songs;

export default songsSlice.reducer;
