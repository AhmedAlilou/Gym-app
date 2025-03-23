import React from "react";
import { useAddWorkoutStore } from "../../store/addworkoutStore";

function Setform(props) {
  const set = props.set;
  const setID = set.setID;
  const exercise = props.exercise;
  const exerciseID = exercise.exerciseID;

  const updateReps = useAddWorkoutStore((state) => state.updateReps);
  const updateWeight = useAddWorkoutStore((state) => state.updateWeight);

  const handleRepChange = (e) => {
    updateReps(exerciseID, setID, e.target.value);
  };

  const handleWeightChange = (e) => {
    updateWeight(exerciseID, setID, e.target.value);
  };

  return (
    <div className="set-form">
      Reps
      <input
        type="number"
        id="reps"
        name="reps"
        value={set.reps ?? ""} // Use empty string as fallback
        placeholder="Reps"
        onChange={handleRepChange}
        className="form-input"
      />
      Weight
      <input
        type="number"
        id="weight"
        name="weight"
        value={set.weight ?? ""} // Use empty string as fallback
        placeholder="Weight"
        onChange={handleWeightChange}
        className="form-input"
      />
    </div>
  );
}

export default Setform;
