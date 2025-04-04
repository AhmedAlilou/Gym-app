import React from "react";
import { useWorkoutHistoryStore } from "../../../store/workoutHistoryStore.js";

function Box(props) {
  const { exercise, set, exerciseBox } = props;
  const checkSet = useWorkoutHistoryStore((state) => state.checkSet);
  const checkExercise = useWorkoutHistoryStore((state) => state.checkExercise);

  // Calculate if all sets are checked for this exercise
  const allSetsChecked = exercise?.sets?.every((set) => set.isChecked) || false;

  const handleChange = () => {
    if (exerciseBox) {
      checkExercise(exercise._id);
    } else {
      checkSet(exercise._id, set._id);
    }
  };

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={exerciseBox ? allSetsChecked : set?.isChecked || false}
        onChange={handleChange}
        className="appearance-none w-4 h-4 border-2 border-purple-500 rounded bg-transparent cursor-pointer checked:bg-purple-500 checked:border-purple-500 transition-all duration-200"
      />
    </label>
  );
}

export default Box;
