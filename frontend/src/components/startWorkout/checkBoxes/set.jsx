import React from "react";
import Box from "./box.jsx";

function Set(props) {
  const set = props.set;
  console.log(set);
  return (
    <div className="text-white">
      Reps: {set.reps} Sets: {set.weight}
      <Box />
    </div>
  );
}

export default Set;
