import React from "react";
import movieStore from "../../stores/movieStore";
function Watched({ id }) {
  const changeToWatchedList = (e) => {
    e.preventDefault();
    movieStore.changeToWatchedList(id);
  };
  return (
    <button
      type="button"
      className="watched-btn btn"
      onClick={changeToWatchedList}
    >
      watched
    </button>
  );
}

export default Watched;
