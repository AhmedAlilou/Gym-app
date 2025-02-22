import React from "react";
// react hooks

// components
import Navbar from "../components/navbar";
import Workoutcards from "../components/workoutcards";

function Workouts() {
  return (
    <>
      <Navbar />
      <div className="title">Your Workouts</div>
      <Workoutcards />
    </>
  );
}

export default Workouts;
