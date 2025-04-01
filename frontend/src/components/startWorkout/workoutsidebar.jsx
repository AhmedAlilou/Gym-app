import React, { useEffect } from "react";
import { useWorkoutStore } from "../../store/workoutStore.js";
import { useWorkoutHistoryStore } from "../../store/workoutHistoryStore.js";
import "./styles/styles.css";

function Workoutsidebar() {
  const workouts = useWorkoutStore((state) => state.workouts);
  const getWorkouts = useWorkoutStore((state) => state.getWorkouts);
  const setCurrentWorkout = useWorkoutHistoryStore(
    (state) => state.setCurrentWorkout
  );
  useEffect(() => {
    getWorkouts();
  }, []);

  const handleWorkoutClick = (workoutID) => {
    workouts.forEach((workout) => {
      if (workout._id === workoutID) {
        setCurrentWorkout(workout);
      }
    });
  };

  return (
    <div className="w-[24vw] h-full bg-[#1f1f1f] rounded-lg flex flex-col">
      <h2 className="text-white text-lg font-bold p-4 sticky top-0 bg-[#1f1f1f] z-10">
        Your Workouts:
      </h2>
      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 pt-0">
        {workouts.map((workout) => (
          <div
            key={workout._id}
            onClick={() => handleWorkoutClick(workout._id)}
            className="workout-card text-white p-4 mb-4 bg-[#29292a] border-2 border-transparent hover:border-purple-500 hover:bg-[#1f1f1f] rounded-lg transition duration-300 ease-in-out cursor-pointer"
          >
            <h3 className="text-lg font-semibold">{workout.title}</h3>
            <p className="text-sm">{workout.description}</p>
            <p className="text-xs text-gray-400">Workout ID: {workout._id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Workoutsidebar;
