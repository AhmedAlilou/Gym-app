import React from "react";
import Setform from "./setform";
import Addset from "./addset";
import Deleteset from "./delete/deleteset";
import { useAddWorkoutStore } from "../../store/addworkoutStore";
import Deleteexercise from "./delete/deleteexercise";

function Exerciseform(props) {
  const exerciseID = props.exerciseID;
  const exercise = useAddWorkoutStore((state) =>
    state.currentExercises.find((x) => x.exerciseID === exerciseID)
  );

  const setExerciseName = useAddWorkoutStore((state) => state.setExerciseName);

  const handleChange = (e) => {
    setExerciseName(e.target.value, exerciseID);
  };
  return (
    <div className="exercise-form">
      {exercise.name} {exerciseID}
      <input
        type="text"
        id="title"
        name="title"
        value={exercise.name}
        onChange={handleChange}
        placeholder="Exercise Title"
        className="form-input"
      />
      <div className="sets">
        {exercise.sets.map((set) => (
          <Setform key={set.setID} exercise={exercise} set={set} />
        ))}
      </div>
      <Addset exerciseID={exerciseID} />
      <Deleteset exerciseID={exerciseID} exercise={exercise} />
      <Deleteexercise exerciseID={exerciseID} exercise={exercise} />
    </div>
  );
}

export default Exerciseform;
