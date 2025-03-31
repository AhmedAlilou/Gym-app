import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import { useWorkoutStore } from "../store/workoutStore.js";

function Startworkout() {
  const { workouts, getWorkouts } = useWorkoutStore();
  useEffect(() => {
    getWorkouts();
  }, [workouts]);
  return (
    <>
      <Navbar />
      <div className="title">Start workout</div>
      <div className="workouts">
        {workouts.map((workout) => (
          <div key={workout._id} className="workout-card text-white">
            <h3>{workout.title}</h3>
            <p>{workout.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Startworkout;
