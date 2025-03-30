import { create } from "zustand";

const API_URL = "http://localhost:3000/workouts";
const API_URL2 = "http://localhost:3000/workoutHistories";

export const useWorkoutHistoryStore = create((set) => ({
  workoutHistories: [],
  fetchWorkoutHisotires: async () => {
    try {
      const response = await fetch(API_URL2);
      if (!response.ok) {
        throw new Error("Failed to fetch workout histories");
      }
      const data = await response.json();
      set({ workoutHistories: data });
    } catch (error) {
      console.error("Error fetching workout histories:", error);
    }
  }
}));
