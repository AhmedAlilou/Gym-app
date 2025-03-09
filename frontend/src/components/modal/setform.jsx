import React from "react";

function Setform(props) {
  // +1 becaus index starts at 0
  return (
    <div>
      set {props.index + 1}
      <input type="number" placeholder="Reps" />
      <input type="number" placeholder="Weight" />
    </div>
  );
}

export default Setform;
