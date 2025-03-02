import React from "react";
import { useWorkoutStore } from "../../store/workoutStore";
import Close from "./close";
import "./styles/modal.css";

function Workoutmodal() {
  const { newWorkout, setNewWorkout } = useWorkoutStore();
  return newWorkout ? (
    <div className="modal">
      <div className="modalbox">
        <div className="modal-title">Add Workout</div>
        <Close />
        <div></div>
      </div>
    </div>
  ) : null;
}

export default Workoutmodal;
