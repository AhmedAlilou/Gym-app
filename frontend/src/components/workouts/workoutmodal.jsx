import React from "react";
import { useWorkoutStore } from "../../store/workoutStore";

function Workoutmodal() {
  const { newWorkout, setNewWorkout } = useWorkoutStore();
  const handleModalClose = () => {
    setNewWorkout(false);
  };
  return newWorkout ? (
    <div className="modal">
      <div className="modalbox">
        <div className="modal-title">Add Workout</div>
        <div></div>
      </div>
    </div>
  ) : null;
}

export default Workoutmodal;
