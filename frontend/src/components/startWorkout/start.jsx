import React from "react";
import { useWorkoutHistoryStore } from "../../store/workoutHistoryStore.js";

function Start() {
  const setWorkoutActive = useWorkoutHistoryStore(
    (state) => state.setWorkoutActive
  );
  const handleStart = () => {
    setWorkoutActive(true);
    const startTime = new Date();
    // start timer or whatever idk
  };
  return (
    <button
      onClick={handleStart}
      className="bg-[#3b2a75] hover:bg-[#543da2] w-[10vw] h-[5vh] m-[2%]"
    >
      <h2 className="text-white text-lg font-semibold flex items-center justify-center h-full">
        START
      </h2>
    </button>
  );
}

export default Start;
