import React from "react";

function Box(props) {
  const { exercise } = props.exercise;
  const { exerciseBox } = props.exerciseBox;
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="
          appearance-none
          w-4 h-4
          border-2 border-purple-500
          rounded
          bg-transparent
          cursor-pointer
          checked:bg-purple-500
          checked:border-purple-500
          transition-all
          duration-200
        "
      />
    </label>
  );
}

export default Box;
