import React, { useEffect } from "react";
import { useWorkoutHistoryStore } from "../../store/workoutHistoryStore.js";

function Start() {
  const workoutActive = useWorkoutHistoryStore((state) => state.workoutActive);
  const elapsedTime = useWorkoutHistoryStore((state) => state.elapsedTime);
  const incrementTime = useWorkoutHistoryStore((state) => state.incrementTime);
  const setWorkoutActive = useWorkoutHistoryStore(
    (state) => state.setWorkoutActive
  );
  const setCurrentWorkoutDate = useWorkoutHistoryStore(
    (state) => state.setCurrentWorkoutDate
  );
  const setCurrentWorkoutTimeStart = useWorkoutHistoryStore(
    (state) => state.setCurrentWorkoutTimeStart
  );

  useEffect(() => {
    let intervalId;

    if (workoutActive) {
      intervalId = setInterval(() => {
        incrementTime();
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [workoutActive, incrementTime]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleStart = () => {
    setWorkoutActive(true);
    setCurrentWorkoutDate(new Date().toLocaleDateString());
    setCurrentWorkoutTimeStart(
      new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
  };

  if (workoutActive) {
    return (
      <div className="bg-[#3b2a75] w-[10vw] h-[5vh] m-[2%] flex items-center justify-center">
        <h2 className="text-white text-lg font-semibold">
          {formatTime(elapsedTime)}
        </h2>
      </div>
    );
  }

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
