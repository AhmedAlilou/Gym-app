import React from "react";
import Box from "./box.jsx";

function Set(props) {
  const set = props.set;
  const exercise = props.exercise;
  return (
    <div className="text-white flex flex-row gap-2 align-center">
      <Box exercise={exercise} exerciseBox={false} />
      Reps: {set.reps} Sets: {set.weight}
    </div>
  );
}

export default Set;
