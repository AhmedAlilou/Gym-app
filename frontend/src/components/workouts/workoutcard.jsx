import React, { useState } from "react";
import Workoutsidebar from "./workoutsidebar";
import Exercises from "./exercises";
import { FaChevronDown } from "react-icons/fa";

function Workoutcard(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const workout = props.workout;

  return (
    <div className="workout text-white bg-[#333] p-4 rounded-3xl w-[90vw] mb-[2vh] ml-[2vw]">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div>
          <h2 className="font-bold text-[1.6rem]">{workout.title}</h2>
          <p>{workout.description}</p>
        </div>
        <FaChevronDown
          className={`transition-transform duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
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
