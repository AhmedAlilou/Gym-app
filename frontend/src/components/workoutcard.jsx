import React from "react";
import Workoutsidebar from "../components/workoutsidebar";
import Exercise from "../components/exercise";
import Exercises from "../components/exercises";

function Workoutcard(props) {
  const workout = props.workout;
  return (
    <div className="workout text-white bg-[#333] p-4 rounded w-[90vw] mb-[2vh] ml-[2vw]">
      <h2 className="font-bold text-[1.6rem]">{workout.title}</h2>
      <p>{workout.description}</p>
      <Exercise workout={workout} />
      <Workoutsidebar />
      <p>{workout._id}</p>
    </div>
  );
}

export default Workoutcard;
