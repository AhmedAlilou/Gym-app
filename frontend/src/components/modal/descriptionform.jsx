import React from "react";
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
    <div className="flex flex-col gap-2 mb-4">
      <label
        htmlFor="description"
        className="text-sm font-medium text-gray-300"
      >
        Description
      </label>
      <textarea
        id="description"
        name="description"
        value={workoutDescription}
        onChange={handleChange}
        placeholder="Workout Description"
        className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-none"
        rows="4"
      />
    </div>
  );
}

export default Descriptionform;
