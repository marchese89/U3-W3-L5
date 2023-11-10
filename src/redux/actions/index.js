export const GET_SONGS = "GET_SONGS";
export const ADD_SONG_TO_FAVOURITES = "ADD_SONG_TO_FAVOURITES";
export const REMOVE_SONG_FROM_FAVOURITES = "REMOVE_SONG_FROM_FAVOURITES";
export const SELECT_SONG = "SELECT_SONG";

export const getSongsAction = (searchQuery, index) => {
  return async (dispatch) => {
    if (searchQuery.length > 2) {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
            searchQuery,
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
              "X-RapidAPI-Key":
                "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
            },
          }
        );
        if (response.ok) {
          let result = await response.json();
          dispatch({
            type: GET_SONGS,
            payload: result.data,
            index: index,
          });
        } else {
          throw new Error("error in search");
        }
      } catch (err) {
        console.log("error", err);
      }
    } else {
      dispatch({
        type: GET_SONGS,
        payload: [],
        index: index,
      });
    }
  };
};

export const selectSongAction = (id) => {
  return {
    type: SELECT_SONG,
    payload: id,
  };
};

export function addSongToFavouritesAction(song) {
  return {
    type: ADD_SONG_TO_FAVOURITES,
    payload: song,
  };
}

export function removeSongFromFavouritesAction(id) {
  return {
    type: REMOVE_SONG_FROM_FAVOURITES,
    payload: id,
  };
}
