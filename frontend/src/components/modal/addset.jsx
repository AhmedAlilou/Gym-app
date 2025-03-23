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
      className="add-exercise bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Add Set
    </button>
  );
}

export default Addset;
