import React from "react";
import { useAddWorkoutStore } from "../../store/addworkoutStore";

function Titleform() {
  const workoutName = useAddWorkoutStore((state) => state.currentWorkoutName);
  const setWorkoutName = useAddWorkoutStore((state) => state.setWorkoutName);

  const handleChange = (e) => {
    setWorkoutName(e.target.value);
  };

  return (
    <div className="flex flex-col gap-2 mb-4">
      <label htmlFor="title" className="text-sm font-medium text-gray-300">
        Title
      </label>
      <input
        type="text"
        id="title"
        name="title"
        value={workoutName}
        onChange={handleChange}
        placeholder="Workout Title"
        className="w-full p-3 bg-gray-900 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
      />
    </div>
  );
}

export default Titleform;
