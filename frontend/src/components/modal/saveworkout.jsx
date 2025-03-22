import React from "react";
import { useAddWorkoutStore } from "../../store/addworkoutStore";

function Saveworkout() {
  return (
    <button className="save-workout bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Save Workout
    </button>
  );
}

export default Saveworkout;
