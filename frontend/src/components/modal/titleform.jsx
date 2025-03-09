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
      <label htmlFor="title" className="block text-white mb-2">
        Title
      </label>
      <input
        type="text"
        id="title"
        name="title"
        value={workoutName}
        onChange={handleChange}
        placeholder="Workout Title"
        className="w-full bg-neutral-700 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
      />
    </div>
  );
}

export default Titleform;
