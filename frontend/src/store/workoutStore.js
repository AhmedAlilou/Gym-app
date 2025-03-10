import { create } from "zustand";

const API_URL = "http://localhost:3000/workouts";

export const useWorkoutStore = create((set) => ({
  workouts: [],
  getWorkouts: () => {
    fetch(`${API_URL}`)
      .then((res) => res.json())
      .then((data) => {
        set({ workouts: data });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  deleteWorkout: (workoutid) => {
    fetch(`${API_URL}/${workoutid}`, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((data) => {
        set((state) => ({
          workouts: state.workouts.filter((workout) => workout._id !== data.id)
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  },
  newWorkout: false,
  setNewWorkout: (value) => {
    set({ newWorkout: value });
  },
  confirmDeleteModal: false,
  setConfirmDeleteModal: (value) => {
    set({ confirmDeleteModal: value });
  },
  currentWorkoutID: "",
  setCurrentWorkoutID: (value) => {
    set({ currentWorkoutID: value });
  }
}));
