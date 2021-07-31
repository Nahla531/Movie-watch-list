import { makeAutoObservable } from "mobx";
import Movies from "../../Movies";

class MovieStore {
  movies = Movies;
  constructor() {
    makeAutoObservable(this);
  }

  addNewMovie = (movieName) => {
    const newMovie = {};
    newMovie.id = this.movies[this.movies.length - 1].id + 1;
    newMovie.watched = false;
    newMovie.name = movieName;
    this.movies.push(newMovie);
  };
  deleteMovie = (id) => {
    const updatedMovie = this.movies.filter((movie) => movie.id !== id);
    this.movies = updatedMovie;
  };
  changeToWatchedList = (id) => {
    this.movies.forEach((movie) => {
      if (movie.id == id) movie.watched = true;
      // console.log(movie.watched);
    });
  };

  changeToWatchList = (id) => {
    this.movies.forEach((movie) => {
      if (movie.id == id) movie.watched = false;
    });
  };
}

const movieStore = new MovieStore();
export default movieStore;
