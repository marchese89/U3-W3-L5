import { useDispatch, useSelector } from "react-redux";
import { getSongsAction } from "../redux/actions";
import { useEffect } from "react";
import AlbumCard from "./AlbumCard";

export default function Main() {
  const dispatch = useDispatch();
  const search1FromReduxStore = useSelector((state) => state.search.search1);
  const search2FromReduxStore = useSelector((state) => state.search.search2);
  const search3FromReduxStore = useSelector((state) => state.search.search3);
  const search4FromReduxStore = useSelector((state) => state.search.search4);

  useEffect(() => {
    dispatch(getSongsAction("queen", 1));
    dispatch(getSongsAction("katyperry", 2));
    dispatch(getSongsAction("eminem", 3));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage">
      <div className="row">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          {search4FromReduxStore.length > 0 && (
            <div id="searchResults">
              <h2>Search Results</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                {search4FromReduxStore.map((song, i) => {
                  return <AlbumCard key={i} songInfo={song} />;
                })}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="rock">
            <h2>Rock Classics</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="rockSection"
            >
              {search1FromReduxStore
                .filter((s, i) => i < 4)
                .map((song, i) => {
                  return <AlbumCard key={i} songInfo={song} />;
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="pop">
            <h2>Pop Culture</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="popSection"
            >
              {search2FromReduxStore
                .filter((s, i) => i < 4)
                .map((song, i) => {
                  return <AlbumCard key={i} songInfo={song} />;
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="hiphop">
            <h2>HipHop</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="hipHopSection"
            >
              {search3FromReduxStore
                .filter((s, i) => i < 4)
                .map((song, i) => {
                  return <AlbumCard key={i} songInfo={song} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
