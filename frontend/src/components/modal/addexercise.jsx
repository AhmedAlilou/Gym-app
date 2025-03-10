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
    <button onClick={handleAddExercise} className="button-primary">
      <FaPlus /> Add Exercise
    </button>
  );
}

export default Addexercise;
