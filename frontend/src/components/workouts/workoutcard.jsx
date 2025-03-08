import React, { useState } from "react";
import Workoutsidebar from "./workoutsidebar";
import Exercises from "./exercises";
import { FaChevronDown } from "react-icons/fa";

function Workoutcard(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const workout = props.workout;

  const chevronClasses = isExpanded
    ? "transition-transform duration-300 rotate-180"
    : "transition-transform duration-300";

  return (
    <div className="workout text-white bg-neutral-800 p-4 rounded-3xl w-[90vw] mb-2 ml-8">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div>
          <h2 className="font-bold text-2xl">{workout.title}</h2>
          <p>{workout.description}</p>
        </div>
        <FaChevronDown className={chevronClasses} />
      </div>

      {isExpanded && (
        <div className="flex flex-row mt-4">
          <Exercises workout={workout} />
          <Workoutsidebar workout={workout} />
        </div>
      )}
    </div>
  );
}

export default Workoutcard;
