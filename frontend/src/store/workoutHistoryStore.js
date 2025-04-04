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
  setCurrentWorkoutBoxes: () =>
    set((state) => ({
      currentWorkout: {
        ...state.currentWorkout,
        exercises: state.currentWorkout.exercises.map((exercise) => ({
          ...exercise,
          sets: exercise.sets.map((set) => ({
            ...set,
            isChecked: false
          }))
        }))
      }
    })),
  checkSet: (exerciseID, setID) =>
    set((state) => ({
      currentWorkout: {
        ...state.currentWorkout,
        exercises: state.currentWorkout.exercises.map((exercise) => {
          if (exercise._id === exerciseID) {
            return {
              ...exercise,
              sets: exercise.sets.map((set) => {
                if (set._id === setID) {
                  return { ...set, isChecked: !set.isChecked };
                }
                return set; // Return unchanged set if ID doesn't match
              })
            };
          }
          return exercise; // Return unchanged exercise if ID doesn't match
        })
      }
    })),
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
