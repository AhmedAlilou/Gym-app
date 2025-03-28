import React from "react";
import { useAddWorkoutStore } from "../../store/addworkoutStore";
import Exerciseform from "./exerciseform";
import Addexercise from "./addexercise";

function Exercises() {
  const currentExercises = useAddWorkoutStore(
    (state) => state.currentExercises
  );
  return (
    <div className="flex flex-col space-y-6 w-full">
      <div className="flex flex-col space-y-4">
        {currentExercises.map((exercise) => (
          <Exerciseform
            key={exercise.exerciseID}
            exerciseID={exercise.exerciseID}
          />
        ))}
      </div>
      <div className="flex justify-center pt-4">
        <Addexercise />
      </div>
    </div>
  );
}

export default Exercises;
