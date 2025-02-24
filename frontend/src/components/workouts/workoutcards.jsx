import React, { useEffect } from "react";
import Workoutcard from "./workoutcard";
import { useWorkoutStore } from "../../store/workoutStore.js";

function Workoutcards() {
  const { workouts, getWorkouts } = useWorkoutStore();
  useEffect(() => {
    getWorkouts;
  }, []);
  return (
    <div className="workouts">
      {workouts.map((workout) => (
        <div key={workout._id}>
          <Workoutcard workout={workout} />
        </div>
      ))}
    </div>
  );
}

export default Workoutcards;
