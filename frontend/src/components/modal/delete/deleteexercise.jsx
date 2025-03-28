import React from "react";
import { useAddWorkoutStore } from "../../../store/addworkoutStore";

function Deleteexercise(props) {
  const currentExercises = useAddWorkoutStore(
    (state) => state.currentExercises
  );
  const deleteExercise = useAddWorkoutStore((state) => state.deleteExercise);
  const handleDelete = () => {
    if (currentExercises.length > 1) {
      deleteExercise(props.exerciseID);
    }
  };
  return (
    <button
      onClick={handleDelete}
      className="add-exercise bg-[#3b2a75] hover:bg-[#543da2] text-white font-bold py-2 px-4 rounded"
    >
      Delete exercise
    </button>
  );
}

export default Deleteexercise;
