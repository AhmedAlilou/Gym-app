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

  useEffect(() => {
    workouts.forEach((workout) => console.log(workout.exercises));
  }, [workouts]);

  return (
    <div className="workouts">
      {workouts.map((workout) => (
        <div key={workout._id}>
          <Workoutcard
            title={workout.title}
            description={workout.description}
            exercises={workout.exercises}
            id={workout._id}
          />
        </div>
      ))}
    </div>
  );
}

export default Workoutcards;
