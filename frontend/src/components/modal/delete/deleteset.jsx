import React from "react";
import { useAddWorkoutStore } from "../../../store/addworkoutStore";

function Deleteset(props) {
  const exercise = props.exercise;
  const deleteSet = useAddWorkoutStore((state) => state.deleteSet);
  const handleDelete = () => {
    if (exercise.sets.length !== 1) {
      deleteSet(props.exerciseID);
    }
  };
  return (
    <button
      onClick={handleDelete}
      className="add-exercise bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Delete set
    </button>
  );
}

export default Deleteset;
