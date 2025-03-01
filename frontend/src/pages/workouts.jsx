import React from "react";
// react hooks

// components
import Navbar from "../components/navbar";
import Addworkout from "../components/workouts/addworkout.jsx";
import Workoutcards from "../components/workouts/workoutcards.jsx";
import Workoutmodal from "../components/workouts/workoutmodal.jsx";

function Workouts() {
  return (
    <>
      <Navbar />
      <div className="flex  items-center mb-[2vh]">
        <div className="title">Your Workouts</div>
        <Addworkout />
      </div>

      <Workoutcards />
      <Workoutmodal />
    </>
  );
}

export default Workouts;
