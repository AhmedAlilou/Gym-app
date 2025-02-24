import { create } from "zustand";

export const useWorkoutStore = create((set) => ({
  workouts: [],
  getWorkouts: fetch("http://localhost:3000/workouts")
    .then((res) => res.json())
    .then((data) => {
      set({ workouts: data });
    })
    .catch((err) => {
      console.log(err);
    })
}));
