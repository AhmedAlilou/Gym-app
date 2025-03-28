import React from "react";
import { useAddWorkoutStore } from "../../store/addworkoutStore";

function Addset(props) {
  const addSet = useAddWorkoutStore((state) => state.addSet);
  const handleAdd = () => {
    addSet(props.exerciseID);
  };
  return (
    <button
      onClick={handleAdd}
      className="add-exercise bg-[#3b2a75] hover:bg-[#543da2] text-white font-bold py-2 px-4 rounded"
    >
      Add Set
    </button>
  );
}

export default Addset;
