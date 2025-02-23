import React from "react";
import Exercise from "./exercise";

function Exercises(props) {
  const workout = props.workout;
  return (
    <div className="exercises">
      {workout.exercises.map((exercise) => (
        <Exercise key={exercise._id} exercise={exercise} />
      ))}
    </div>
  );
}

export default Exercises;
