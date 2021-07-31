import React from "react";
import Delete from "./buttons/Delete";
import ToWatch from "./buttons/Watched";
import UnWatch from "./buttons/UnWatch";
function MovieItem(props) {
  return (
    <div className="movie-item">
      <h4>{props.movie.name}</h4>
      <div className="buttons">
        {props.movie.watched == false && (
          <>
            <ToWatch id={props.movie.id} />
          </>
        )}
        {props.movie.watched == true && (
          <>
            <UnWatch id={props.movie.id} />
          </>
        )}

        <Delete movieId={props.movie.id} />
      </div>
    </div>
  );
}

export default MovieItem;
