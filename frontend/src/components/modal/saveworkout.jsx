import React from "react";
import { useAddWorkoutStore } from "../../store/addworkoutStore";

function Saveworkout() {
  const saveWorkout = useAddWorkoutStore((state) => state.saveWorkout);
  const workoutName = useAddWorkoutStore((state) => state.currentWorkoutName);
  const workoutDescription = useAddWorkoutStore(
    (state) => state.currentWorkoutDescription
  );
  const exercises = useAddWorkoutStore((state) => state.currentExercises);
  const handleSaveWorkout = () => {
    saveWorkout(workoutName, workoutDescription, exercises);
  };
  return (
    <button onClick={handleSaveWorkout} className="button-primary">
      Save Workout
    </button>
  );
}

export default Saveworkout;
