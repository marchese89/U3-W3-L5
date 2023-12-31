import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSongsAction,
  removeSongFromFavouritesAction,
  removeSongFromSecondaryAction,
  selectSongAction,
} from "../redux/actions";

export default function SidebarVertical() {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const [contextMenuPosition, setContextMenuPosition] = useState({
    top: 0,
    left: 0,
  });
  const [isContextMenuVisible, setContextMenuVisible] = useState(false);
  const [isSecContextMenuVisible, setSecContextMenuVisible] = useState(false);
  const [idCurrentSong, setIdCurrentSong] = useState();

  function openCurtainMenu(e, id) {
    e.preventDefault();
    setIdCurrentSong(id);
    setContextMenuPosition({
      top: e.clientY + window.scrollY,
      left: e.clientX + window.scrollX,
    });
    setContextMenuVisible(true);
  }

  function openCurtainMenuSec(e, id) {
    e.preventDefault();
    setIdCurrentSong(id);
    setContextMenuPosition({
      top: e.clientY + window.scrollY,
      left: e.clientX + window.scrollX,
    });
    setSecContextMenuVisible(true);
  }

  const favouritesFromReduxStore = useSelector(
    (state) => state.song.favourites
  );
  const secondaryFromReduxStore = useSelector((state) => state.song.secondary);

  function selectSong(song) {
    dispatch(selectSongAction(song));
  }

  function removeFromFavourites() {
    dispatch(removeSongFromFavouritesAction(idCurrentSong));
    setContextMenuVisible(false);
  }

  function removeFromSecondary() {
    setSecContextMenuVisible(false);
    dispatch(removeSongFromSecondaryAction(idCurrentSong));
  }

  useEffect(() => {
    if (searchQuery !== "") {
      dispatch(getSongsAction(searchQuery, 4));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return (
    <div className="col col-2">
      <nav
        className="navbar navbar-expand-md fixed-left justify-content-between"
        id="sidebar"
      >
        <div className="container flex-column align-items-start">
          <a className="navbar-brand" href="index.html">
            <img
              src="assets/logo/logo.png"
              alt="Spotify Logo"
              width="131"
              height="40"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul>
                <li>
                  <a
                    className="nav-item nav-link d-flex align-items-center"
                    href="#"
                  >
                    <i className="bi bi-house-door-fill"></i>&nbsp; Home
                  </a>
                </li>
                <li>
                  <a
                    className="nav-item nav-link d-flex align-items-center"
                    href="#"
                  >
                    <i className="bi bi-book-fill"></i>&nbsp; Your Library
                  </a>
                </li>
                <li>
                  <div className="input-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      id="searchField"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                      }}
                      value={searchQuery}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-secondary btn-sm h-100"
                        onClick={() => setSearchQuery(searchQuery)}
                      >
                        GO
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-grow-1 w-100">
          <h6 className="text-white text-center">Playlist Principale</h6>
          <ul className="text-white main-play">
            {favouritesFromReduxStore.map((song) => {
              return (
                <li
                  className="mb-2"
                  onClick={() => selectSong(song)}
                  key={song.id}
                  onContextMenu={(e) => openCurtainMenu(e, song.id)}
                >
                  {song.title.length < 30
                    ? song.title
                    : song.title.substring(0, 29) + "..."}
                </li>
              );
            })}
          </ul>

          {isContextMenuVisible && (
            <div
              className="position-absolute tendina"
              style={{
                position: "fixed",
                top: contextMenuPosition.top,
                left: contextMenuPosition.left,
                cursor: "pointer",
                color: "white",
              }}
              onClick={removeFromFavourites}
            >
              Rimuovi dalla playlist
            </div>
          )}
        </div>
        <div className="flex-grow-1 w-100">
          <h6 className="text-white text-center">Playlist Secondaria</h6>
          <ul className="text-white secondary-play">
            {secondaryFromReduxStore.map((song) => {
              return (
                <li
                  className="mb-2"
                  onClick={() => selectSong(song)}
                  key={song.id}
                  onContextMenu={(e) => openCurtainMenuSec(e, song.id)}
                >
                  {song.title.length < 30
                    ? song.title
                    : song.title.substring(0, 29) + "..."}
                </li>
              );
            })}
          </ul>
          {isSecContextMenuVisible && (
            <div
              className="position-absolute tendina"
              style={{
                position: "fixed",
                top: contextMenuPosition.top,
                left: contextMenuPosition.left,
                cursor: "pointer",
                color: "white",
              }}
              onClick={removeFromSecondary}
            >
              Rimuovi dalla playlist
            </div>
          )}
        </div>
        <div className="nav-btn d-flex flex-column align-items-center justify-content-center sign-log">
          <button className="btn signup-btn" type="button">
            Sign Up
          </button>
          <button className="btn login-btn" type="button">
            Login
          </button>
          <div>
            <a href="#" className="no-wrap">
              Cookie Policy
            </a>{" "}
            |<a href="#"> Privacy</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
