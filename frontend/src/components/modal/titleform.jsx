import React from "react";
import { useAddWorkoutStore } from "../../store/addworkoutStore";

function Titleform() {
  const workoutName = useAddWorkoutStore((state) => state.currentWorkoutName);
  const setWorkoutName = useAddWorkoutStore((state) => state.setWorkoutName);

  const handleChange = (e) => {
    setWorkoutName(e.target.value);
  };

  return (
    <div className="flex-2">
      <label htmlFor="title" className="form-label">
        Title
      </label>
      <input
        type="text"
        id="title"
        name="title"
        value={workoutName}
        onChange={handleChange}
        placeholder="Workout Title"
        className="form-input"
      />
    </div>
  );
}

export default Titleform;
