import { create } from "zustand";

const API_URL = "http://localhost:3000/workouts";

export const useAddWorkoutStore = create((set) => ({
  currentWorkoutName: "",
  currentWorkoutDescription: "",
  currentExercises: [
    {
      exerciseID: 0,
      name: "",
      sets: [{ setID: 0, reps: "", weight: "" }]
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
          sets: [{ setID: 0, reps: "", weight: "" }]
        }
      ],
      currentID: state.currentID + 1
    })),

  deleteExercise: (exerciseID) =>
    set((state) => ({
      currentExercises: state.currentExercises.filter(
        (exercise) => exercise.exerciseID !== exerciseID
      )
    })),

  addSet: (exerciseID) =>
    set((state) => ({
      currentExercises: state.currentExercises.map((exercise) => {
        if (exercise.exerciseID === exerciseID) {
          // Find the highest setID in the current sets
          const maxSetID = exercise.sets.reduce(
            (max, set) => (set.setID > max ? set.setID : max),
            0
          );

          // Add a new set with an incremented setID
          return {
            ...exercise,
            sets: [
              ...exercise.sets,
              { setID: maxSetID + 1, reps: "", weight: "" }
            ]
          };
        }
        return exercise;
      })
    })),

  deleteSet: (exerciseID) =>
    set((state) => {
      return {
        currentExercises: state.currentExercises.map((exercise) => {
          if (exercise.exerciseID === exerciseID) {
            return { ...exercise, sets: exercise.sets.slice(0, -1) };
          }
          return exercise;
        })
      };
    }),
  setExerciseName: (name, exerciseID) =>
    set((state) => ({
      currentExercises: state.currentExercises.map((exercise) =>
        exercise.exerciseID === exerciseID ? { ...exercise, name } : exercise
      )
    })),

  // UPDATE REPS AND SETS
  updateReps: (exerciseID, setID, newReps) =>
    set((state) => ({
      currentExercises: state.currentExercises.map((exercise) =>
        exercise.exerciseID === exerciseID
          ? {
              ...exercise,
              sets: exercise.sets.map((set) =>
                set.setID === setID ? { ...set, reps: newReps } : set
              )
            }
          : exercise
      )
    })),

  updateWeight: (exerciseID, setID, newWeight) =>
    set((state) => ({
      currentExercises: state.currentExercises.map((exercise) =>
        exercise.exerciseID === exerciseID
          ? {
              ...exercise,
              sets: exercise.sets.map((set) =>
                set.setID === setID ? { ...set, weight: newWeight } : set
              )
            }
          : exercise
      )
    })),

  setWorkoutName: (name) => set({ currentWorkoutName: name }),
  setWorkoutDescription: (description) =>
    set({ currentWorkoutDescription: description }),

  saveWorkout: (title, description, exercises) => {
    set((state) => ({
      currentWorkoutName: "",
      currentWorkoutDescription: "",
      currentExercises: [
        {
          exerciseID: 0,
          name: "",
          sets: [{ setID: 0, reps: "", weight: "" }]
        }
      ]
    }));
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
