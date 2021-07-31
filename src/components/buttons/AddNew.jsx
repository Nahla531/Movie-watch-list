import React from "react";
import movieStore from "../../stores/movieStore";
function AddNew({ movie }) {
  console.log(movie);
  const handleNewMovie = (e) => {
    e.preventDefault();
    movieStore.addNewMovie(movie);
  };
  return (
    <button className="btn add-btn" onClick={handleNewMovie}>
      Add new
    </button>
  );
}

export default AddNew;
