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
    <div className="flex items-center gap-4 p-3 bg-gray-[#] rounded-lg border border-purple-700/30">
      <div className="flex items-center gap-2">
        <label htmlFor="reps" className="text-sm font-medium text-gray-300">
          Reps
        </label>
        <input
          type="number"
          id="reps"
          name="reps"
          value={set.reps ?? ""}
          placeholder="0"
          onChange={handleRepChange}
          className="w-20 p-2 bg-[rgb(38, 38, 38, 1)] text-white border border-purple-700/50 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 hover:bg-[rgb(45, 45, 45, 1)] transition-colors"
        />
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor="weight" className="text-sm font-medium text-gray-300">
          Weight
        </label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={set.weight ?? ""}
          placeholder="0"
          onChange={handleWeightChange}
          className="w-20 p-2 bg-[rgb(38, 38, 38, 1)] text-white border border-purple-700/50 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 hover:bg-[rgb(45, 45, 45, 1)] transition-colors"
        />
      </div>
    </div>
  );
}

export default Setform;
