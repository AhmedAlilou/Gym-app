import React from "react";

function Exercise(props) {
  const workout = props.workout;
  return (
    <div className="exercises">
      {workout.exercises.map((exercises) => (
        <div key={exercises._id} className="exercise">
          <h1 className="font-bold text-[1.1rem]">{exercises.name}</h1>
          <div className="exercise-info">
            {exercises.sets.map((set) => (
              <div key={set._id} className="set">
                <p>
                  {set.reps} reps {set.weight && `at ${set.weight} lbs`}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Exercise;
