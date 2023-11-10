import {
  ADD_SONG_TO_FAVOURITES,
  REMOVE_SONG_FROM_FAVOURITES,
  SELECT_SONG,
} from "../actions";

const initialState = {
  selected: "",
  favourites: [],
};

export default function songReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_SONG:
      return {
        ...state,
        selected: action.payload,
      };
    case ADD_SONG_TO_FAVOURITES:
      return state;
    case REMOVE_SONG_FROM_FAVOURITES:
      return state;
    default:
      return state;
  }
}
