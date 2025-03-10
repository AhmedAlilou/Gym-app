import React from "react";
import Setform from "./setform";
import { useAddWorkoutStore } from "../../store/addworkoutStore";

function Setforms(props) {
  // Correctly access the addSet function from store
  const addSet = useAddWorkoutStore((state) => state.addSet);

  const handleAddSet = (e) => {
    e.preventDefault(); // Prevent form submission
    console.log("exercise index", props.exerciseIndex);
    addSet(props.exerciseIndex);
  };

  return (
    <div>
      {props.exercise.sets.map((set, index) => (
        <div key={index} className="setform">
          <Setform index={index} exerciseIndex={props.exerciseIndex} />
        </div>
      ))}
      <button type="button" onClick={handleAddSet} className="button-secondary">
        Add set
      </button>
    </div>
  );
}

export default Setforms;
