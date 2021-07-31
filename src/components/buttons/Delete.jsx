import React from "react";
import movieStore from "../../stores/movieStore";
function Delete(props) {
  console.log(props);
  const handleDelete = (e) => {
    e.preventDefault();
    movieStore.deleteMovie(props.movieId);
  };
  return (
    <button onClick={handleDelete} type="button" className=" delete-btn btn">
      Delete
    </button>
  );
}

export default Delete;
