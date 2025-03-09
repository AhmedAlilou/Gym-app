import React from "react";
import { useAddWorkoutStore } from "../../store/addworkoutStore";
import { FaPlus } from "react-icons/fa";

function Addexercise() {
  const addExercise = useAddWorkoutStore((state) => state.addExercise);

  const handleAddExercise = () => {
    const newExercise = {
      name: "",
      sets: [{ reps: 0, weight: 0 }]
    };
    addExercise(newExercise);
  };

  return (
    <button
      onClick={handleAddExercise}
      className="flex items-center gap-2 bg-purple-600 px-4 py-2 rounded mt-4 hover:bg-purple-700 text-white"
    >
      <FaPlus /> Add Exercise
    </button>
  );
}

export default Addexercise;
