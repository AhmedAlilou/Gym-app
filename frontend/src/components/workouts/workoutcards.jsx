import React, { useState, useEffect } from "react";
import Workoutcard from "./workoutcard";

function Workoutcards() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/workouts")
      .then((res) => res.json())
      .then((data) => {
        setWorkouts(data);
      });
  }, []);

  return (
    <div className="workouts">
      {workouts.map((workout) => (
        <div key={workout._id}>
          <Workoutcard workout={workout} />
        </div>
      ))}
    </div>
  );
}

export default Workoutcards;
