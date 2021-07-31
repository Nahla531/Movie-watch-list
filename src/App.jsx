import React from "react";
import "./App.css";
import AddNewMovie from "./components/AddNewMovie";
import ToWatchList from "./components/ToWatchList";
import WatchedList from "./components/WatchedList";
function App() {
  return (
    <div className="app">
      <AddNewMovie />
      <div className="container">
        <ToWatchList />

        <WatchedList />
      </div>
    </div>
  );
}

export default App;
