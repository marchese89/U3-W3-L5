import { configureStore, combineReducers } from "@reduxjs/toolkit";
import songsSearchReducer from "../reducers/songs_search";
import songReducer from "../reducers/song";

const bigReducer = combineReducers({
  search: songsSearchReducer,
  song: songReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
