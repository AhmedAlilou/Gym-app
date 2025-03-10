import React from "react";
import { useAddWorkoutStore } from "../../store/addworkoutStore";

function Setform(props) {
  const currentExercises = useAddWorkoutStore(
    (state) => state.currentExercises
  );

  const changeSetReps = useAddWorkoutStore((state) => state.changeSetReps);
  const changeSetWeight = useAddWorkoutStore((state) => state.changeSetWeight);

  const handleRepChange = (e) => {
    console.log("e.target.value", e.target.value);
    changeSetReps(e.target.value, props.exerciseIndex, props.index);
    console.log(currentExercises[props.exerciseIndex].sets[props.index]);
  };
  const handleWeightChange = (e) => {
    console.log("e.target.value", e.target.value);
    changeSetWeight(e.target.value, props.exerciseIndex, props.index);
    console.log(currentExercises[props.exerciseIndex].sets[props.index]);
  };
  // +1 because index starts at 0

  return (
    <div className="set-form">
      set {props.index + 1}
      <input
        type="number"
        placeholder="Reps"
        onChange={handleRepChange}
        className="form-input"
      />
      <input
        type="number"
        placeholder="Weight"
        onChange={handleWeightChange}
        className="form-input"
      />
    </div>
  );
}

export default Setform;
