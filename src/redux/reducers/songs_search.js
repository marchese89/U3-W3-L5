import { GET_SONGS } from "../actions";

const initialState = {
  search1: [],
  search2: [],
  search3: [],
};

export default function songsSearchReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SONGS:
      let index = action.index;
      let element = `search${index}`;
      return {
        ...state,
        [element]: action.payload,
      };
    default:
      return state;
  }
}
