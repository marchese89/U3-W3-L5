import { useSelector } from "react-redux";

export default function BottomNavbar() {
  const selectedSongFromReduxStore = useSelector(
    (state) => state.song.selected
  );

  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row h-100">
        <div className="col-lg-10 offset-lg-2">
          <div className="row h-100 d-flex justify-content-center align-items-center">
            <div
              id="song_details"
              className="col-1 d-flex justify-content-start align-items-center w-25 flex-grow-1"
            >
              <img
                src={
                  selectedSongFromReduxStore !== ""
                    ? selectedSongFromReduxStore.album.cover_small
                    : ""
                }
                className="me-3"
                alt=""
              />
              <span className="text-white text-nowrap">
                {selectedSongFromReduxStore !== ""
                  ? selectedSongFromReduxStore.title
                  : ""}
              </span>
            </div>
            <div className="col-6 col-md-4 playerControls">
              <div className="d-flex">
                <a href="#">
                  <img src="assets/playerbuttons/shuffle.png" alt="shuffle" />
                </a>
                <a href="#">
                  <img src="assets/playerbuttons/prev.png" alt="prev" />
                </a>
                <a href="#">
                  <img src="assets/playerbuttons/play.png" alt="play" />
                </a>
                <a href="#">
                  <img src="assets/playerbuttons/next.png" alt="next" />
                </a>
                <a href="#">
                  <img src="assets/playerbuttons/repeat.png" alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </div>
            <div className="end-buttom"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
