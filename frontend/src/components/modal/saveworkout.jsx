import React from "react";
import { useAddWorkoutStore } from "../../store/addworkoutStore";

function Saveworkout() {
  const currentWorkoutName = useAddWorkoutStore(
    (state) => state.currentWorkoutName
  );

  const currentWorkoutDescription = useAddWorkoutStore(
    (state) => state.currentWorkoutDescription
  );
  const currentExercises = useAddWorkoutStore(
    (state) => state.currentExercises
  );

  const saveWorkout = useAddWorkoutStore((state) => state.saveWorkout);

  const handleSave = () => {
    saveWorkout(
      currentWorkoutName,
      currentWorkoutDescription,
      currentExercises
    );
  };
  return (
    <button
      onClick={handleSave}
      className="save-workout bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Save Workout
    </button>
  );
}

export default Saveworkout;
