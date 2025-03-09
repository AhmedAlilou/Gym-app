import React from "react";
import { useAddWorkoutStore } from "../../store/addworkoutStore";
import Exerciseform from "./exerciseform";
import Addexercise from "./addexercise";

function Exercisesforms() {
  const currentExercises = useAddWorkoutStore(
    (state) => state.currentExercises
  );

  return (
    <div>
      {currentExercises.map((exercise, index, sets) => (
        <Exerciseform
          key={index}
          exercise={exercise}
          sets={sets}
          index={index}
        />
      ))}
      <Addexercise />
    </div>
  );
}

export default Exercisesforms;
