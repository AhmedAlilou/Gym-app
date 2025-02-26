import { create } from "zustand";

const API_URL = "http://localhost:3000/workouts";

export const useWorkoutStore = create((set) => ({
  workouts: [],
  getWorkouts: fetch(`${API_URL}`)
    .then((res) => res.json())
    .then((data) => {
      set({ workouts: data });
    })
    .catch((err) => {
      console.log(err);
    }),

  deleteWorkout: (workoutid) => {
    fetch(`${API_URL}/${workoutid}`, {
      method: "DELETE"
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}));
