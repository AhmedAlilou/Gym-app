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
  },
  newWorkout: false,
  setNewWorkout: (value) => {
    set({ newWorkout: !value });
  },
  addNewWorkout: (name, description, exercises) => {
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        description: description,
        exercises: exercises
      })
    });
  }
}));
