import React, { useState } from "react";
import Workoutdate from "./workoutdate";
import ExerciseInstance from "./exerciseInstance";
import { FaChevronDown } from "react-icons/fa";
import Workoutduration from "./workoutduration";

function Workoutinstance({ workout }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-[#29292a] border-2 border-transparent hover:border-[#3b2a75] rounded-lg p-4 text-white mb-5 w-[90vw] m-auto transition duration-300 ease-in-out">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-2xl font-semibold">
          {workout.workoutData.title}
          <Workoutdate workout={workout} />
          <Workoutduration workout={workout} />
        </h2>
        <FaChevronDown
          className={`text-xl text-white transition-transform duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </div>

      {isExpanded && (
        <div className="mt-4 space-y-4">
          {workout.exercises
            .filter((exercise) => exercise.sets.some((set) => set.isChecked))
            .map((exercise) => (
              <ExerciseInstance key={exercise._id} exercise={exercise} />
            ))}
        </div>
      )}
    </div>
  );
}

export default Workoutinstance;
