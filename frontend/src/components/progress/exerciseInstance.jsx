import React from "react";
import SetInstance from "./setinstance";

function ExerciseInstance({ exercise }) {
  return (
    <div className="mb-4 last:mb-0">
      <h3 className="text-lg font-semibold mb-2">{exercise.name}</h3>
      <div className="grid grid-cols-2 gap-2">
        {exercise.sets
          .filter((set) => set.isChecked)
          .map((set) => (
            <SetInstance key={set._id} set={set} />
          ))}
      </div>
    </div>
  );
}

export default ExerciseInstance;
