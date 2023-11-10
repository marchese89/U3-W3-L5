import { useDispatch } from "react-redux";
import { selectSongAction } from "../redux/actions";

export default function AlbumCard({ songInfo }) {
  const dispatch = useDispatch();
  function selectSong() {
    dispatch(selectSongAction(songInfo));
  }
  return (
    <div className="col text-center song" id={songInfo.id} onClick={selectSong}>
      <img
        className="img-fluid"
        src={songInfo.album.cover_medium}
        alt="track"
      />
      <p>
        Track:{" "}
        {songInfo.title.length < 16
          ? songInfo.title
          : songInfo.title.substring(0, 16) + "..."}
        <br />
        Artist: {songInfo.artist.name}
      </p>
    </div>
  );
}
