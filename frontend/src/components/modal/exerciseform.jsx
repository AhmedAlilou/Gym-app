import React from "react";
import { useAddWorkoutStore } from "../../store/addworkoutStore";

function Exerciseform(props) {
  const exerciseID = props.exerciseID;
  const exercises = useAddWorkoutStore((state) => state.currentExercises);
  const exercise = exercises.find((x) => x.exerciseID === exerciseID);

  const setExerciseName = useAddWorkoutStore((state) => state.setExerciseName);

  const handleChange = (e) => {
    setExerciseName(e.target.value, exerciseID);
  };
  return (
    <div className="exercise-form">
      {exercise.name}
      <input
        type="text"
        id="title"
        name="title"
        value={exercise.name}
        onChange={handleChange}
        placeholder="Workout Title"
        className="form-input"
      />
    </div>
  );
}

export default Exerciseform;
