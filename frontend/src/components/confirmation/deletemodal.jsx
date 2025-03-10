import React from "react";
import { useWorkoutStore } from "../../store/workoutStore";
import "./styles/deletemodal.css";

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
      <div className="modal-box">
        <h2 className="text-xl font-bold mb-4 text-white">Confirm Delete</h2>
        <p className="text-gray-300 mb-4">
          Are you sure you want to delete this workout?
        </p>
        <div className="modal-buttons">
          <button className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
          <button className="confirm-button" onClick={handleConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  ) : null;
}

export default Deletemodal;
