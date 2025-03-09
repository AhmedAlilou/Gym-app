import { create } from "zustand";

const API_URL = "http://localhost:3000/workouts";

export const useAddWorkoutStore = create((set) => ({
  currentWorkoutName: "",
  currentWorkoutDescription: "",
  currentExercises: [
    {
      name: "",
      sets: [{ reps: 0, weight: 0 }]
    }
  ],
  changeSetReps: (newReps, exerciseIndex, setIndex) => {
    set((state) => {
      state.currentExercises[exerciseIndex].sets[setIndex] = {
        reps: newReps,
        weight: state.currentExercises[exerciseIndex].sets[setIndex].weight
      };
      console.log("state.currentExercises", state.currentExercises);
      return state;
    });
  },
  changeSetWeight: (newWeight, exerciseIndex, setIndex) => {
    set((state) => {
      state.currentExercises[exerciseIndex].sets[setIndex] = {
        reps: state.currentExercises[exerciseIndex].sets[setIndex].reps,
        weight: newWeight
      };
      console.log("state.currentExercises", state.currentExercises);
      return state;
    });
  },
  changeExerciseName: (newName, exerciseIndex) => {
    set((state) => {
      state.currentExercises[exerciseIndex].name = newName;
      return state;
    });
  },
  addSet: (exerciseIndex) => {
    set((state) => {
      if (!state.currentExercises || !state.currentExercises[exerciseIndex]) {
        console.error("Invalid exercise or exercise index");
        return state;
      }

      const newExercises = [...state.currentExercises];
      const targetExercise = newExercises[exerciseIndex];

      newExercises[exerciseIndex] = {
        ...targetExercise,
        sets: [...targetExercise.sets, { reps: 0, weight: 0 }]
      };

      return { currentExercises: newExercises };
    });
  },
  addExercise: (newExercise) => {
    set((state) => ({
      currentExercises: [...state.currentExercises, newExercise]
    }));
  },
  setWorkoutName: (name) => set({ currentWorkoutName: name }),
  setWorkoutDescription: (description) =>
    set({ currentWorkoutDescription: description }),
  saveWorkout: (title, description, exercises) => {
    console.log("Saving workout...");
    console.log("title, description, exercises", title, description, exercises);
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
