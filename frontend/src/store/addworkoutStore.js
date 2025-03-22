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
      exerciseID: 1,
      name: "",
      sets: [{ setID: 0, reps: 0, weight: 0 }]
    }
  ],
  currentID: 2,
  addExercise: () =>
    set((state) => ({
      currentExercises: [
        ...state.currentExercises,
        {
          exerciseID: state.currentID,
          name: "",
          sets: [{ setID: 0, reps: 0, weight: 0 }]
        }
      ],
      currentID: state.currentID + 1
    })),

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
