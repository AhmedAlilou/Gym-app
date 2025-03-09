import { create } from "zustand";

export const useAddWorkoutStore = create((set) => ({
  currentWorkoutName: "",
  currentWorkoutDescription: "",
  currentExercises: [
    {
      name: "",
      sets: [{ reps: 0, weight: 0 }]
    },
    {
      name: "",
      sets: [{ reps: 0, weight: 0 }]
    }
  ],
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
  validWorkout: true,
  setValidWorkout: (valid) => set({ validWorkout: valid })
}));
