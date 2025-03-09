import React from "react";
import { useAddWorkoutStore } from "../../store/addworkoutStore";
import Setforms from "./setforms";

function Exerciseform(props) {
  const exercise = props.exercise;
  return (
    <div className="exercise-form">
      <form>
        <input type="text" placeholder="Exercise Name" />
        <Setforms exercise={exercise} exerciseIndex={props.index} />
      </form>
    </div>
  );
}

export default Exerciseform;
