import React from "react";
import { useWorkoutHistoryStore } from "../../store/workoutHistoryStore.js";

function Finish() {
  const endWorkout = useWorkoutHistoryStore((state) => state.endWorkout);
  const currentWorkout = useWorkoutHistoryStore(
    (state) => state.currentWorkout
  );
  const setCurrentWorkoutDate = useWorkoutHistoryStore(
    (state) => state.setCurrentWorkoutDate
  );
  const setCurrentWorkoutTimeStart = useWorkoutHistoryStore(
    (state) => state.setCurrentWorkoutTimeStart
  );
  const setCurrentWorkoutTimeEnd = useWorkoutHistoryStore(
    (state) => state.setCurrentWorkoutTimeEnd
  );
  const setCurrentWorkoutId = useWorkoutHistoryStore(
    (state) => state.setCurrentWorkoutId
  );
  const workoutActive = useWorkoutHistoryStore((state) => state.workoutActive);

  const handleEndWorkout = () => {
    if (workoutActive) {
      setCurrentWorkoutDate("2024-03-29");
      setCurrentWorkoutTimeStart("09:30");
      setCurrentWorkoutTimeEnd("10:45");
      setCurrentWorkoutId(currentWorkout._id);
      const latestWorkout = {
        ...currentWorkout,
        date: "2024-03-29",
        timeStart: "09:30",
        timeEnd: "10:45",
        workoutId: currentWorkout._id
      };
      console.log(currentWorkout);
      endWorkout(latestWorkout);
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
