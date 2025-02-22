import React from "react";

function Workoutcard(props) {
  return (
    <div className="workout text-white bg-[#333] p-4 rounded w-[90vw] mb-[2vh] ml-[2vw]">
      <h2 className="font-bold text-[1.6rem]">{props.title}</h2>
      <p>{props.description}</p>
      <div className="exercises">
        {props.exercises && props.exercises.length > 0 ? (
          props.exercises.map((exercise) => (
            <div key={exercise._id} className="exercise">
              <h2>{exercise.name}</h2>
              <p>{exercise.description}</p>
              <p>{exercise.sets} sets</p>
              <p>{exercise.reps} reps</p>
              <p>{exercise.weight} kg</p>
            </div>
          ))
        ) : (
          <p>No exercises</p>
        )}
      </div>
      <p>{props.id}</p>
    </div>
  );
}

export default Workoutcard;
