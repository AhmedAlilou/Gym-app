import React from "react";
import { useWorkoutStore } from "../../store/workoutStore";
import Close from "./close";
import Saveworkout from "./saveworkout";
import Modalform from "./modalform";
import "./styles/modal.css";

function Workoutmodal() {
  const { newWorkout } = useWorkoutStore();
  return newWorkout ? (
    <div className="modal backdrop-blur-sm w-full h-full">
      <div className="modalbox relative flex flex-col w-[80vw] h-[80vh] bg-[#19191f]">
        <div className="modal-title text-white mx-auto font-bold">
          Add Workout
        </div>
        <Close />
        <Modalform />
        <Saveworkout />
      </div>
    </div>
  ) : null;
}

export default Workoutmodal;
