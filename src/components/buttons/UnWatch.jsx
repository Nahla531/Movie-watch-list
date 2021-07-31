import React from "react";
import movieStore from "../../stores/movieStore";

function UnWatch({ id }) {
  const changeToWatchList = (e) => {
    e.preventDefault();
    movieStore.changeToWatchList(id);
  };
  return (
    <button
      type="button"
      className="unWatch-btn btn"
      onClick={changeToWatchList}
    >
      un watch
    </button>
  );
}

export default UnWatch;
