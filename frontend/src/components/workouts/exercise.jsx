import React from "react";
import Exercisetitle from "./exercisetitle";

function Exercise(props) {
  const workout = props.workout;
  return (
    <div className="exercises">
      {workout.exercises.map((exercises) => (
        <div key={exercises._id} className="exercise">
          <Exercisetitle name={exercises.name} />
          <div className="exercise-info">
            {exercises.sets.map((set, index) => (
              <div key={index} className="set">
                <p className="mb-2">set {index + 1}</p>
                <p>{set.reps} reps</p>
                <p>{set.weight} kg</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Exercise;
