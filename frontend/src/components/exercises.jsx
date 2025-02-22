import React from "react";
import Exercise from "../components/exercise";

function Exercises(props) {
  return (
    <div className="exercises">
      <h1 className="font-bold mt-[1vh] mb-[1vh] ml-[1vw]">Exercises</h1>
      <Exercise workout={workout} />
      <div className="exercise">
        <h1 className="font-bold text-[1.1rem]"></h1>
        <div className="exercise-info"></div>
      </div>
    </div>
  );
}

export default Exercises;
