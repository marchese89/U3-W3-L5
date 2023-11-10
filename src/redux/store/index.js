import { configureStore, combineReducers } from "@reduxjs/toolkit";
import songsSearchReducer from "../reducers/songs_search";

const bigReducer = combineReducers({
  search: songsSearchReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
