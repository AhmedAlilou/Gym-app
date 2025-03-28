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
    if (e.target.value === "") {
      setExerciseName("", exerciseID);
    } else {
      setExerciseName(e.target.value, exerciseID);
    }
  };

  return (
    <div className="bg-purple-900/30 rounded-lg p-6 space-y-4">
      <div className="text-lg font-medium text-gray-200">
        {exercise?.name || "No Name"}
      </div>
      <input
        type="text"
        id="title"
        name="title"
        value={exercise?.name || ""}
        onChange={handleChange}
        placeholder="Exercise Title"
        className="w-full p-3 bg-purple-900/20 text-white border border-purple-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
      />
      <div className="space-y-3">
        {exercise?.sets.map((set) => (
          <Setform key={set.setID} exercise={exercise} set={set} />
        ))}
      </div>
      <div className="flex gap-2 pt-4">
        <Addset exerciseID={exerciseID} />
        <Deleteset exerciseID={exerciseID} exercise={exercise} />
        <Deleteexercise exerciseID={exerciseID} exercise={exercise} />
      </div>
    </div>
  );
}

export default Exerciseform;
