import React from "react";
import Box from "./box.jsx";
import { useWorkoutHistoryStore } from "../../../store/workoutHistoryStore.js";

function Set(props) {
  const set = props.set;
  const exercise = props.exercise;
  const workoutActive = useWorkoutHistoryStore((state) => state.workoutActive);

  return (
    <div className="text-white flex flex-row gap-2 align-center">
      {workoutActive && (
        <Box exercise={exercise} set={set} exerciseBox={false} />
      )}
      <span>
        Reps: {set.reps}, Weight: {set.weight}kg
      </span>
    </div>
  );
}

export default Set;
