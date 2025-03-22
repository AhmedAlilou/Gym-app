import React from "react";
import { useAddWorkoutStore } from "../../store/addworkoutStore";

function Addexercise() {
  const addExercise = useAddWorkoutStore((state) => state.addExercise);
  const handleAdd = () => {
    addExercise();
  };
  return (
    <button
      onClick={handleAdd}
      className="add-exercise bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Add Exercise
    </button>
  );
}

export default Addexercise;
