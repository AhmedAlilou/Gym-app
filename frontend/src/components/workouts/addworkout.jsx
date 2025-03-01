import React from "react";
import { IoMdAddCircle } from "react-icons/io";

function Addworkout() {
  const handleAddWorkout = () => {
    console.log("Add workout");
  };
  return (
    <button className="addworkout" onClick={handleAddWorkout}>
      <IoMdAddCircle className="h-[90%] w-[70%] m-auto" />
    </button>
  );
}

export default Addworkout;
