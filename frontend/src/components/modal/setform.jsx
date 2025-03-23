import React from "react";
import { useAddWorkoutStore } from "../../store/addworkoutStore";

function Setform(props) {
  const set = props.set;
  const setID = set.setID;

  const setReps = useAddWorkoutStore((state) => state.setReps);
  const setWeight = useAddWorkoutStore((state) => state.setWeight);
  const handleChange = (e) => {
    setSetName(e.target.value, setID);
  };
  return (
    <div className="set-form">
      <input
        type="text"
        id="title"
        name="title"
        value={set.setID}
        placeholder="Reps"
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
}

export default Setform;
