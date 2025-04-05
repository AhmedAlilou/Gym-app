import React, { useEffect } from "react";
import { useWorkoutHistoryStore } from "../../store/workoutHistoryStore";
import Workoutinstance from "./workoutinstance";

function Previousworkouts() {
  const workoutHistory = useWorkoutHistoryStore(
    (state) => state.workoutHistory
  );
  const getWorkoutHistories = useWorkoutHistoryStore(
    (state) => state.getWorkoutHistories
  );
  useEffect(() => {
    getWorkoutHistories();
  }, []);
  console.log(workoutHistory);
  return (
    <div>
      Previous Workouts
      {workoutHistory &&
        workoutHistory.map((workout) => {
          return <Workoutinstance workoutID={workout._id} workout={workout} />;
        })}
    </div>
  );
}

export default Previousworkouts;
