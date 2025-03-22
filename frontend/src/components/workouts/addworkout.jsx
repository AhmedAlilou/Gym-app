import React from "react";
import { IoMdAddCircle } from "react-icons/io";
import { useWorkoutStore } from "../../store/workoutStore";

function Addworkout() {
  const { newWorkout, setNewWorkout } = useWorkoutStore();
  const handleAddWorkout = () => {
    setNewWorkout(true);
  };
  return (
    <button className="addworkout" onClick={handleAddWorkout}>
      <IoMdAddCircle className="h-[90%] w-[70%] m-auto" />
    </button>
  );
}

export default Addworkout;
