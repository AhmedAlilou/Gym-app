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
        <div key={index}>
          <Setform index={index} />
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddSet}
        className="bg-purple-600 px-4 py-2 rounded mt-2 hover:bg-purple-700"
      >
        Add set
      </button>
    </div>
  );
}

export default Setforms;
