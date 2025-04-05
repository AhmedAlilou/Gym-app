import React from "react";

function Workoutinstance({ workout }) {
  return (
    <div className="bg-gray-800/50 rounded-lg p-4 text-white">
      {workout.exercises
        .filter((exercise) => exercise.sets.some((set) => set.isChecked))
        .map((exercise) => (
          <div key={exercise._id} className="mb-4 last:mb-0">
            <h3 className="text-lg font-semibold mb-2">{exercise.name}</h3>
            <div className="text-sm text-gray-400 mb-2">Completed Sets:</div>
            <div className="grid grid-cols-2 gap-2">
              {exercise.sets
                .filter((set) => set.isChecked)
                .map((set) => (
                  <div
                    key={set._id}
                    className="bg-gray-700/50 p-3 rounded-md flex flex-col gap-1"
                  >
                    <p className="text-purple-400">Weight: {set.weight}kg</p>
                    <p className="text-purple-300">Reps: {set.reps}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
}

export default Workoutinstance;
