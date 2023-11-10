import {
  ADD_SONG_TO_FAVOURITES,
  ADD_SONG_TO_SECONDARY,
  REMOVE_SONG_FROM_FAVOURITES,
  REMOVE_SONG_FROM_SECONDARY,
  SELECT_SONG,
} from "../actions";

const initialState = {
  selected: "",
  favourites: [],
  secondary: [],
};

export default function songReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_SONG:
      return {
        ...state,
        selected: action.payload,
      };
    case ADD_SONG_TO_FAVOURITES:
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case REMOVE_SONG_FROM_FAVOURITES:
      return {
        ...state,
        favourites: state.favourites.filter((fav) => fav.id !== action.payload),
      };
    case ADD_SONG_TO_SECONDARY:
      return {
        ...state,
        secondary: [...state.secondary, action.payload],
      };
    case REMOVE_SONG_FROM_SECONDARY: {
      return {
        ...state,
        secondary: state.secondary.filter((sec) => sec.id !== action.payload),
      };
    }
    default:
      return state;
  }
}
