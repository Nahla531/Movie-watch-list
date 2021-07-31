import React from "react";
import { observer } from "mobx-react";
import movieStore from "../stores/movieStore";
import MovieItem from "./MovieItem";
const WatchedList = () => {
  const Movies = movieStore.movies;
  const movies = Movies.map((movie) => {
    if (movie.watched == true)
      return <MovieItem key={movie.id} movie={movie} />;
  });
  return (
    <div className="watched-list">
      <h2 className="header">watched list</h2>
      {movies}
    </div>
  );
};

export default observer(WatchedList);
