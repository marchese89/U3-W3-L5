import { useDispatch, useSelector } from "react-redux";
import {
  addSongToFavouritesAction,
  addSongToSecondaryAction,
  removeSongFromFavouritesAction,
  removeSongFromSecondaryAction,
  selectSongAction,
} from "../redux/actions";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { useState } from "react";

export default function AlbumCard({ songInfo }) {
  const [isContextMenuVisible, setContextMenuVisible] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({
    top: 0,
    left: 0,
  });
  const dispatch = useDispatch();
  const favouritesFromReduxStore = useSelector(
    (state) => state.song.favourites
  );
  const secondaryFromReduxStore = useSelector((state) => state.song.secondary);
  let fav = favouritesFromReduxStore.filter((song) => song.id === songInfo.id);
  let secondary = secondaryFromReduxStore.filter(
    (song) => song.id === songInfo.id
  );
  function selectSong() {
    dispatch(selectSongAction(songInfo));
  }
  function addToFavourites() {
    dispatch(addSongToFavouritesAction(songInfo));
  }

  function addToSecondary() {
    setContextMenuVisible(false);
    dispatch(addSongToSecondaryAction(songInfo));
  }

  function removeFromSecondary() {
    setContextMenuVisible(false);
    dispatch(removeSongFromSecondaryAction(songInfo.id));
  }

  function removeFromFavourites() {
    dispatch(removeSongFromFavouritesAction(songInfo.id));
  }

  function openCurtainMenu(e) {
    e.preventDefault();
    setContextMenuPosition({
      top: e.clientY + window.scrollY,
      left: e.clientX + window.scrollX,
    });
    setContextMenuVisible(true);
  }
  return (
    <div className="col text-center song mb-3" id={songInfo.id}>
      <img
        className="img-fluid position-relative"
        src={songInfo.album.cover_medium}
        alt="track"
        onClick={selectSong}
        onContextMenu={(e) => openCurtainMenu(e)}
      />
      {isContextMenuVisible && (
        <div
          className="position-absolute tendina"
          style={{
            position: "fixed",
            top: contextMenuPosition.top,
            left: contextMenuPosition.left,
            cursor: "pointer",
          }}
          onClick={
            secondary.length === 0 ? addToSecondary : removeFromSecondary
          }
        >
          {secondary.length === 0
            ? "Aggiungi alla playlist secondaria"
            : "Rimuovi dalla playlist secondaria"}
        </div>
      )}

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
