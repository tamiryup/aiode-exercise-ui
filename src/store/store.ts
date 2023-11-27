import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import songsReducer from "./songs/songs.slice";

const store = configureStore({
  reducer: {
    songs: songsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
