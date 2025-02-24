import React from "react";
import { useWorkoutStore } from "../../store/workoutStore.js";

function Workoutsidebar(props) {
  const deleteWorkout = useWorkoutStore((state) => state.deleteWorkout);
  const handleDelete = () => {
    useWorkoutStore.getState().deleteWorkout(props.workout._id);
  };
  return (
    <div className="bg-amber-600 w-[16%]">
      <button>Start Workout</button>
      <button>Edit Workout</button>
      <button>Share Workout</button>
      <button onClick={handleDelete}>Delete Workout</button>
    </div>
  );
}

export default Workoutsidebar;
