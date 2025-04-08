import React from "react";

function Workoutduration({ workout }) {
  const calculateDuration = () => {
    if (!workout.timeStart || !workout.timeEnd) {
      return 0;
    }

    // Convert time strings to Date objects
    const [startHours, startMinutes] = workout.timeStart.split(":").map(Number);
    const [endHours, endMinutes] = workout.timeEnd.split(":").map(Number);

    // Calculate total minutes
    const startTotalMinutes = startHours * 60 + startMinutes;
    const endTotalMinutes = endHours * 60 + endMinutes;

    return endTotalMinutes - startTotalMinutes;
  };

  const duration = calculateDuration();

  return <div className="text-white text-sm">Duration: {duration} minutes</div>;
}

export default Workoutduration;
