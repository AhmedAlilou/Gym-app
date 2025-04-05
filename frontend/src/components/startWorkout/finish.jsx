import React from "react";
import { useWorkoutHistoryStore } from "../../store/workoutHistoryStore.js";

function Finish() {
  const endWorkout = useWorkoutHistoryStore((state) => state.endWorkout);
  const currentWorkout = useWorkoutHistoryStore(
    (state) => state.currentWorkout
  );

  const setCurrentWorkoutTimeEnd = useWorkoutHistoryStore(
    (state) => state.setCurrentWorkoutTimeEnd
  );
  const setCurrentWorkoutId = useWorkoutHistoryStore(
    (state) => state.setCurrentWorkoutId
  );
  const workoutActive = useWorkoutHistoryStore((state) => state.workoutActive);
  const setWorkoutActive = useWorkoutHistoryStore(
    (state) => state.setWorkoutActive
  );

  const handleEndWorkout = () => {
    if (workoutActive) {
      setCurrentWorkoutTimeEnd(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        })
      );
      setCurrentWorkoutId(currentWorkout._id);
      const latestWorkout = useWorkoutHistoryStore.getState().currentWorkout;
      endWorkout(latestWorkout);
      setWorkoutActive(false);
    }
  };
  return (
    <button
      onClick={handleEndWorkout}
      className="bg-[#3b2a75] hover:bg-[#543da2] w-[20vw] h-[5vh] justify-center m-auto font-bold py-2 px-4 rounded"
    >
      END WORKOUT
    </button>
  );
}

export default Finish;
