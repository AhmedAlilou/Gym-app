import React from "react";
import { IoClose } from "react-icons/io5";
import { useWorkoutStore } from "../../store/workoutStore";

function Close() {
  const setNewWorkout = useWorkoutStore((state) => state.setNewWorkout);
  const handleClose = () => {
    setNewWorkout(false);
  };
  return (
    <button
      onClick={handleClose}
      className="close-button absolute right-4"
      aria-label="Close modal"
    >
      <IoClose />
    </button>
  );
}

export default Close;
