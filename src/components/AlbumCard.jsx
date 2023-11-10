import { useDispatch, useSelector } from "react-redux";
import {
  addSongToFavouritesAction,
  removeSongFromFavouritesAction,
  selectSongAction,
} from "../redux/actions";
import { Heart, HeartFill } from "react-bootstrap-icons";

export default function AlbumCard({ songInfo }) {
  const dispatch = useDispatch();
  const favouritesFromReduxStore = useSelector(
    (state) => state.song.favourites
  );
  let fav = favouritesFromReduxStore.filter((song) => song.id === songInfo.id);
  function selectSong() {
    dispatch(selectSongAction(songInfo));
  }
  function addToFavourites() {
    dispatch(addSongToFavouritesAction(songInfo));
  }

  function removeFromFavourites() {
    dispatch(removeSongFromFavouritesAction(songInfo.id));
  }

  function openCurtainMenu() {
    let menu = document.selectElementById(`curtain-${songInfo.id}`);
    menu.classList.remove("d-none");
  }
  return (
    <div className="col text-center song mb-3" id={songInfo.id}>
      <img
        className="img-fluid position-relative"
        src={songInfo.album.cover_medium}
        alt="track"
        onClick={selectSong}
        onContextMenu={openCurtainMenu}
      />
      <div
        className="position-absolute tendina d-none"
        id={`curtain-${songInfo.id}`}
      >
        Menu a tendina
      </div>
      <p>
        Track:{" "}
        {songInfo.title.length < 16
          ? songInfo.title
          : songInfo.title.substring(0, 16) + "..."}
        <br />
        Artist: {songInfo.artist.name}
      </p>
      <div>
        {fav.length === 0 && (
          <Heart onClick={addToFavourites} className="icon-heart" />
        )}
        {fav.length > 0 && (
          <HeartFill onClick={removeFromFavourites} className="icon-heart" />
        )}
      </div>
    </div>
  );
}
