import React from "react";
import { IoClose } from "react-icons/io5";
import { useWorkoutStore } from "../../store/workoutStore";

function Close() {
  const { setNewWorkout } = useWorkoutStore();
  return (
    <button onClick={() => setNewWorkout(false)} className="close-button">
      <IoClose />
    </button>
  );
}

export default Close;
