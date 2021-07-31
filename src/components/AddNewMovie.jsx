import React, { useState } from "react";
import AddNew from "./buttons/AddNew";

function AddNewMovie() {
  const [value, setValue] = useState("");
  return (
    <div className="new-movie">
      <h3>Add new movie</h3>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <AddNew movie={value} />
    </div>
  );
}

export default AddNewMovie;
