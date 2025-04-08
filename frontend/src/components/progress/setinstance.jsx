import React from "react";

function SetInstance({ set }) {
  return (
    <div className="bg-[#29292a] text-white p-3 rounded-md flex flex-col gap-2 border border-[#3b2a75] hover:border-[#543da2] transition-colors duration-200">
      <p>Weight: {set.weight}kg</p>
      <p>Reps: {set.reps}</p>
    </div>
  );
}

export default SetInstance;
