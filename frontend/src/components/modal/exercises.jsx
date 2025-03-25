import React from "react";
import { useAddWorkoutStore } from "../../store/addworkoutStore";
import Exerciseform from "./exerciseform";
import Addexercise from "./addexercise";

function Exercises() {
  const currentExercises = useAddWorkoutStore(
    (state) => state.currentExercises
  );
  return (
    <div className="exercises justify-center mx-auto ">
      {currentExercises.map((exercise) => (
        <Exerciseform
          key={exercise.exerciseID}
          exerciseID={exercise.exerciseID}
        />
      ))}
      <Addexercise />
    </div>
  );
}

export default Exercises;
