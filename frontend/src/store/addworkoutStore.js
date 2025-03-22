import { create } from "zustand";

const API_URL = "http://localhost:3000/workouts";

export const useAddWorkoutStore = create((set) => ({
  currentWorkoutName: "",
  currentWorkoutDescription: "",
  currentExercises: [
    {
      exerciseID: 0,
      name: "",
      sets: [{ setID: 0, reps: 0, weight: 0 }]
    },
    {
      exerciseID: 5,
      name: "",
      sets: [{ setID: 0, reps: 0, weight: 0 }]
    }
  ],
  setExerciseName: (name, exerciseID) =>
    set((state) => ({
      currentExercises: state.currentExercises.map((exercise) =>
        exercise.exerciseID === exerciseID ? { ...exercise, name } : exercise
      )
    })),

  setWorkoutName: (name) => set({ currentWorkoutName: name }),
  setWorkoutDescription: (description) =>
    set({ currentWorkoutDescription: description }),

  saveWorkout: (title, description, exercises) => {
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        description: description,
        exercises: exercises
      })
    });
  }
}));
