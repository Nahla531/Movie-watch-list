import React from "react";
import { observer } from "mobx-react";
import movieStore from "../stores/movieStore";
import MovieItem from "./MovieItem";
function ToWatchList() {
  const Movies = movieStore.movies;
  const movies = Movies.map((movie) => {
    if (movie.watched == false)
      return <MovieItem key={movie.id} movie={movie} />;
  });
  return <div className="watch-list">{movies}</div>;
}

export default observer(ToWatchList);
