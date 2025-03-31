import React from "react";
import Navbar from "../components/navbar";
import Workoutsidebar from "../components/startWorkout/workoutsidebar.jsx";
import Currentworkout from "../components/startWorkout/currentWorkout.jsx";

function Startworkout() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex gap-4 p-4 overflow-hidden">
        <Workoutsidebar />
        <Currentworkout />
      </div>
    </div>
  );
}

export default Startworkout;
