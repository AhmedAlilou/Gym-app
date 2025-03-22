import React from "react";
import { useAddWorkoutStore } from "../../store/addworkoutStore";
import Exerciseform from "./exerciseform";

function Exercises() {
  const currentExercises = useAddWorkoutStore(
    (state) => state.currentExercises
  );
  return (
    <div className="exercises">
      {currentExercises.map((exercise) => (
        <Exerciseform
          key={exercise.exerciseID}
          exerciseID={exercise.exerciseID}
        />
      ))}
    </div>
  );
}

export default Exercises;
