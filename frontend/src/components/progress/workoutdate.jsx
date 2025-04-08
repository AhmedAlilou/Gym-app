import React from "react";

function Workoutdate({ workout }) {
  return (
    workout.date && (
      <p className="text-sm text-gray-400 mb-2">
        {new Date(workout.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit"
        })}
      </p>
    )
  );
}

export default Workoutdate;
