import React from "react";
import { useWorkoutStore } from "../../store/workoutStore.js";
import { FaDumbbell } from "react-icons/fa6";
import { FaRegEdit, FaShareAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { HiDocumentDuplicate } from "react-icons/hi2";

function Workoutsidebar(props) {
  const handleDelete = () => {
    useWorkoutStore.getState().setCurrentWorkoutID(props.workout._id);
    useWorkoutStore.getState().setConfirmDeleteModal(true);
  };
  return (
    <div className="options bg-[#29292a] w-[17%] align-center p-4 rounded-3xl">
      <button className="option">
        <FaDumbbell className="icon" />
        Start Workout
      </button>
      <button className="option">
        <FaRegEdit className="icon" />
        Edit
      </button>
      <button className="option">
        <FaShareAlt className="icon" />
        Share
      </button>
      <button onClick={handleDelete} className="option">
        <MdDelete className="icon" />
        Delete
      </button>
      <button onClick={handleDelete} className="option">
        <HiDocumentDuplicate className="icon" />
        Duplicate
      </button>
      <div>Workout ID: {props.workout._id}</div>
    </div>
  );
}

export default Workoutsidebar;
