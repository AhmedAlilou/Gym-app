import React, { use } from "react";
import { useAddWorkoutStore } from "../../store/addworkoutStore";

function Descriptionform() {
  const workoutDescription = useAddWorkoutStore(
    (state) => state.currentWorkoutDescription
  );
  const setWorkoutDescription = useAddWorkoutStore(
    (state) => state.setWorkoutDescription
  );

  const handleChange = (e) => {
    setWorkoutDescription(e.target.value);
  };
  return (
    <div className="flex-3">
      <label htmlFor="Description" className="form-label">
        Description
      </label>
      <input
        type="text"
        id="Description"
        name="Description"
        value={workoutDescription}
        onChange={handleChange}
        placeholder="Workout Description"
        className="form-input"
      />
    </div>
  );
}

export default Descriptionform;
