import React from "react";
import Workoutsidebar from "./workoutsidebar";
import Exercises from "./exercises";

function Workoutcard(props) {
  const workout = props.workout;
  return (
    <div className="workout text-white bg-[#333] p-4 rounded-3xl w-[90vw] mb-[2vh] ml-[2vw]">
      <h2 className="font-bold text-[1.6rem]">{workout.title}</h2>
      <p>{workout.description}</p>
      <div className="flex flex-row ">
        <Exercises workout={workout} />
        <Workoutsidebar workout={workout} />
      </div>

      <p>{workout._id}</p>
    </div>
  );
}

export default Workoutcard;
