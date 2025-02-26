import React from "react";
import { useWorkoutStore } from "../../store/workoutStore.js";
import { FaDumbbell } from "react-icons/fa6";
import { FaRegEdit, FaShareAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function Workoutsidebar(props) {
  const deleteWorkout = useWorkoutStore((state) => state.deleteWorkout);
  const handleDelete = () => {
    useWorkoutStore.getState().deleteWorkout(props.workout._id);
  };
  return (
    <div className="options bg-[#29292a] w-[17%] align-center p-4 rounded-3xl">
      <button className="option">
        <FaDumbbell className="icon" />
        Start Workout
      </button>
      <button className="option">
        <FaRegEdit className="icon" />
        Edit Workout
      </button>
      <button className="option">
        <FaShareAlt className="icon" />
        Share Workout
      </button>
      <button onClick={handleDelete} className="option">
        <MdDelete className="icon" />
        Delete Workout
      </button>
    </div>
  );
}

export default Workoutsidebar;
