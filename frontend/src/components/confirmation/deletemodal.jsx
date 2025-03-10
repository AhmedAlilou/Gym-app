import React from "react";
import { useWorkoutStore } from "../../store/workoutStore";

function Deletemodal() {
  const currentWorkoutID = useWorkoutStore((state) => state.currentWorkoutID);
  const setConfirmDeleteModal = useWorkoutStore(
    (state) => state.setConfirmDeleteModal
  );
  const confirmDeleteModal = useWorkoutStore(
    (state) => state.confirmDeleteModal
  );
  const handleConfirm = () => {
    useWorkoutStore.getState().deleteWorkout(currentWorkoutID);
    useWorkoutStore.getState().setConfirmDeleteModal(false);
  };
  const handleCancel = () => {
    useWorkoutStore.getState().setConfirmDeleteModal(false);
  };
  return confirmDeleteModal ? (
    <div className="modal">
      <button className="bg-white" onClick={handleConfirm}>
        CONFIRM
      </button>
      <button className="bg-white" onClick={handleCancel}>
        CANCEL
      </button>
    </div>
  ) : null;
}

export default Deletemodal;
