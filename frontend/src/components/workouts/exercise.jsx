import React from "react";
import Exercisetitle from "./exercisetitle";

function Exercise(props) {
  const exercise = props.exercise;
  return (
    <div className="exercise">
      <Exercisetitle name={exercise.name} />
      <div className="exercise-info">
        {exercise.sets.map((set, index) => (
          <div key={index} className="set">
            <p className="mb-2">set {index + 1}</p>
            <p>{set.reps} reps</p>
            <p>{set.weight} kg</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Exercise;
