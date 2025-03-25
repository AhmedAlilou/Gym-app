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

  const checkIfValid = () => {
    if (!currentWorkoutName || currentWorkoutName === "") {
      return false;
    }
    for (let i = 0; i < currentExercises.length; i++) {
      if (!currentExercises[i].name || currentExercises[i].name === "") {
        return false;
      }
      for (let j = 0; j < currentExercises[i].sets.length; j++) {
        if (
          !currentExercises[i].sets[j].reps ||
          currentExercises[i].sets[j].reps === ""
        ) {
          return false;
        }
      }
    }
    return true;
  };

  const alert = () => {
    window.alert("Missing information for the Workout");
  };

  const handleSave = () => {
    checkIfValid()
      ? saveWorkout(
          currentWorkoutName,
          currentWorkoutDescription,
          currentExercises
        )
      : alert();
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
