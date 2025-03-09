import React from "react";
import { useWorkoutStore } from "../../store/workoutStore";
import Close from "./close";
import Saveworkout from "./saveworkout";
import Modalform from "./modalform";
import "./styles/modal.css";

function Workoutmodal() {
  const { newWorkout } = useWorkoutStore();
  return newWorkout ? (
    <div className="modal">
      <div className="modalbox">
        <div className="modal-title">Add Workout</div>
        <Close />
        <Modalform />
        <Saveworkout />
      </div>
    </div>
  ) : null;
}

export default Workoutmodal;
