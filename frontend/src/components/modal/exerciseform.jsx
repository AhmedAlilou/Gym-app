import React from "react";
import Setforms from "./setforms";
import { useAddWorkoutStore } from "../../store/addworkoutStore";

function Exerciseform(props) {
  const exercise = props.exercise;
  const changeExerciseName = useAddWorkoutStore(
    (state) => state.changeExerciseName
  );

  const handleExerciseTitle = (e) => {
    console.log("e.target.value", e.target.value);
    changeExerciseName(e.target.value, props.index);
  };
  return (
    <div className="exercise-form">
      <input
        type="text"
        placeholder="Exercise Name"
        onChange={handleExerciseTitle}
        className="form-input"
      />
      <Setforms exercise={exercise} exerciseIndex={props.index} />
    </div>
  );
}

export default Exerciseform;
