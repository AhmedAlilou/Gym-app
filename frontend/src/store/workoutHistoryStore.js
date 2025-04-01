import { create } from "zustand";
const API_URL = "http://localhost:3000/workoutHistories";

export const useWorkoutHistoryStore = create((set) => ({
  currentWorkout: {},
  setCurrentWorkout: (workout) => set({ currentWorkout: workout }),
  workoutHistory: [],
  getWorkoutHistories: () => {
    fetch(`${API_URL}`)
      .then((res) => res.json())
      .then((data) => {
        set({ workoutHistory: data });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  workoutActive: false,
  setWorkoutActive: (value) => {
    set({ workoutActive: value });
  },

  deleteWorkoutHistory: (workoutHistoryid) => {
    fetch(`${API_URL}/${workoutHistoryid}`, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((data) => {
        set((state) => ({
          workoutHistory: state.workoutHistory.filter(
            (workoutHistory) => workoutHistory._id !== data.id
          )
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  }
}));
