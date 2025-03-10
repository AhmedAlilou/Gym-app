import React from "react";
import { useWorkoutStore } from "../../store/workoutStore";

function Deletemodal() {
  const confirmDeleteModal = useWorkoutStore(
    (state) => state.confirmDeleteModal
  );
  return confirmDeleteModal ? (
    <div className="modal">
      <button className="bg-white">CONFIRM</button>
    </div>
  ) : null;
}

export default Deletemodal;
