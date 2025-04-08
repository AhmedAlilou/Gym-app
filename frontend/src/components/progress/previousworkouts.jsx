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
      {workoutHistory &&
        workoutHistory.map((workout, key) => {
          return (
            <Workoutinstance
              key={key}
              workoutID={workout._id}
              workout={workout}
              title={workout.title}
            />
          );
        })}
    </div>
  );
}

export default Previousworkouts;
