import { React, use, useEffect } from "react";
import { useWorkoutHistoryStore } from "../../store/workoutHistoryStore.js";
import Start from "./start.jsx";

function Currentworkout() {
  const currentWorkout = useWorkoutHistoryStore(
    (state) => state.currentWorkout
  );

  const setCurrentWorkout = useWorkoutHistoryStore(
    (state) => state.setCurrentWorkout
  );

  const workoutActive = useWorkoutHistoryStore((state) => state.workoutActive);
  useEffect(() => {
    if (!workoutActive) {
      setCurrentWorkout({});
    }
  }, []);

  console.log(currentWorkout);
  return (
    <div className="flex-1 bg-[#1f1f1f] rounded-lg p-4">
      {JSON.stringify(currentWorkout).length > 5 ? ( // tacky way to check if object is empty
        <div className="flex flex-col h-full">
          <div className="text-white flex flex-row justify-between items-center">
            <div className="workout-info">
              <h2 className="text-2xl font-bold mb-4">
                {currentWorkout.title}
              </h2>
              <p className="text-lg mb-2">{currentWorkout.description}</p>
            </div>

            <Start />
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mt-4">
              Exercises:
            </h3>
            {currentWorkout.exercises.map((exercise, index) => (
              <li key={index} className="text-white mb-2">
                {exercise.name}
              </li>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500 text-lg">No workout selected</p>
        </div>
      )}
    </div>
  );
}

export default Currentworkout;
