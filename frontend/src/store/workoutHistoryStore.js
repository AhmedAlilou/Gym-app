import { create } from "zustand";
const API_URL = "http://localhost:3000/workoutHistory";

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
  setCurrentWorkoutDate: (date) => {
    set((state) => ({
      currentWorkout: {
        ...state.currentWorkout,
        date: date
      }
    }));
  },
  setCurrentWorkoutTimeStart: (timeStart) => {
    set((state) => ({
      currentWorkout: {
        ...state.currentWorkout,
        timeStart: timeStart
      }
    }));
  },
  setCurrentWorkoutTimeEnd: (timeEnd) => {
    set((state) => ({
      currentWorkout: {
        ...state.currentWorkout,
        timeEnd: timeEnd
      }
    }));
  },
  setCurrentWorkoutId: (workoutID) => {
    set((state) => ({
      currentWorkout: {
        ...state.currentWorkout,
        workoutId: workoutID
      }
    }));
  },
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
  checkExercise: (exerciseId) =>
    set((state) => ({
      currentWorkout: {
        ...state.currentWorkout,
        exercises: state.currentWorkout.exercises.map((exercise) => {
          if (exercise._id === exerciseId) {
            // Check if all sets are currently checked
            const allChecked = exercise.sets.every((set) => set.isChecked);
            return {
              ...exercise,
              sets: exercise.sets.map((set) => ({
                ...set,
                isChecked: !allChecked // Toggle all sets opposite to current state
              }))
            };
          }
          return exercise;
        })
      }
    })),
  workoutActive: false,
  setWorkoutActive: (value) => {
    set({ workoutActive: value });
  },
  endWorkout: (workout) => {
    fetch(`${API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(workout)
    })
      .then((res) => res.json())
      .then((data) => {
        set((state) => ({
          workoutHistory: [...state.workoutHistory, data]
        }));
      })
      .catch((err) => {
        console.log(err);
      });
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
