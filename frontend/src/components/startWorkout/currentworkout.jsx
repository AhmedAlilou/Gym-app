import React, { useEffect } from "react";
import { useWorkoutHistoryStore } from "../../store/workoutHistoryStore.js";
import Exercise from "./checkBoxes/exercise.jsx";
import Start from "./start.jsx";
import Finish from "./finish.jsx";

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
  }, [workoutActive, setCurrentWorkout]);

  const isWorkoutSelected = Object.keys(currentWorkout).length > 0;

  const WorkoutContent = () => (
    <div className="flex flex-col h-full text-white">
      <div className="flex flex-row justify-between items-center mb-4">
        <div className="workout-info">
          <h2 className="text-2xl font-bold mb-2">{currentWorkout.title}</h2>
          <p className="text-lg">{currentWorkout.description}</p>
        </div>
        <Start />
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <h3 className="text-white text-lg font-semibold sticky top-0 bg-[#1f1f1f] py-2 z-10">
          Exercises:
        </h3>
        <div className="space-y-4">
          {currentWorkout.exercises?.map((exercise, index) => (
            <Exercise key={index} exercise={exercise} />
          ))}
        </div>
      </div>

      <div className="mt-4">
        <Finish />
      </div>
    </div>
  );

  const EmptyState = () => (
    <div className="flex items-center justify-center h-full">
      <p className="text-gray-500 text-lg">No workout selected</p>
    </div>
  );

  return (
    <div className="flex-1 bg-[#1f1f1f] rounded-lg p-4">
      {isWorkoutSelected ? <WorkoutContent /> : <EmptyState />}
    </div>
  );
}

export default Currentworkout;
