import React from "react";
import { useWorkoutHistoryStore } from "../../../store/workoutHistoryStore.js";

function Box(props) {
  const exercise = props.exercise;
  const set = props.set;
  const exerciseBox = props.exerciseBox;
  const checkSet = useWorkoutHistoryStore((state) => state.checkSet);

  const handleChange = () => {
    if (exerciseBox) {
      console.log("Exercise box clicked");
    } else {
      console.log("Set box clicked");
      checkSet(exercise._id, set._id);
    }
  };

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        onChange={handleChange}
        type="checkbox"
        checked={set?.isChecked || false}
        className="
          appearance-none
          w-4 h-4
          border-2 border-purple-500
          rounded
          bg-transparent
          cursor-pointer
          checked:bg-purple-500
          checked:border-purple-500
          transition-all
          duration-200
        "
      />
    </label>
  );
}

export default Box;
