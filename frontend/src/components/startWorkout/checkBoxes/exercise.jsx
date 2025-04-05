import React from "react";
import Set from "./set.jsx";
import Box from "./box.jsx";
import { useWorkoutHistoryStore } from "../../../store/workoutHistoryStore.js";

function Exercise({ exercise }) {
  const workoutActive = useWorkoutHistoryStore((state) => state.workoutActive);

  return (
    <div className="text-white flex flex-col gap-4 p-4 bg-gray-800/50 rounded-lg">
      <div className="flex flex-row justify-between align-center">
        <h3 className="text-lg font-semibold">{exercise.name}</h3>
        {workoutActive && <Box exercise={exercise} exerciseBox={true} />}
      </div>
      <div className="flex flex-col gap-2">
        {exercise.sets.map((set, index) => (
          <Set key={index} exercise={exercise} set={set} />
        ))}
      </div>
    </div>
  );
}

export default Exercise;
