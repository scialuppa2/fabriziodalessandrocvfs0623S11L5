import { configureStore } from "@reduxjs/toolkit";
import { ReducerAlbum } from "../reducers/ReducerAlbum";
import { ReducerArtist } from "../reducers/ReducerArtist";
import { ReducerFavourites } from "../reducers/ReducerFavourites";
import { ReducerMain } from "../reducers/ReducerMain";
import { ReducerPlayer } from "../reducers/ReducerPlayer";
import { ReducerSearch } from "../reducers/ReducerSearch";

const Reducers = {
  mainSongs: ReducerMain,
  fav: ReducerFavourites,
  search: ReducerSearch,
  player: ReducerPlayer,
  artist: ReducerArtist,
  album: ReducerAlbum,
};

const savedState = localStorage.getItem('appState');
const initialState = savedState ? JSON.parse(savedState) : {};

export const store = configureStore({
  reducer: Reducers,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: false,
    });
    return middlewares;
  },
});


store.subscribe(() => {
  const stateToPersist = {
    mainSongs: store.getState().mainSongs,
    fav: store.getState().fav,
  };

  localStorage.setItem('appState', JSON.stringify(stateToPersist));
});
