import React, { useEffect } from "react";
import Workoutcard from "./workoutcard";
import { useWorkoutStore } from "../../store/workoutStore.js";

function Workoutcards() {
  const { workouts, getWorkouts } = useWorkoutStore();
  useEffect(() => {
    getWorkouts;
  }, [getWorkouts]);
  return (
    <div className="workouts">
      {workouts.map((workout) => (
        <Workoutcard key={workout._id} workout={workout} />
      ))}
    </div>
  );
}

export default Workoutcards;
