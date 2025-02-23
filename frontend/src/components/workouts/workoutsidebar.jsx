import React from "react";

function Workoutsidebar(props) {
  const workout = props.workout;
  const handleDelete = () => {
    fetch(`http://localhost:3000/workouts/${workout._id}`, {
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
  };
  return (
    <div className="bg-amber-600 w-[16%]">
      <button>Start Workout</button>
      <button>Edit Workout</button>
      <button>Share Workout</button>
      <button onClick={handleDelete}>Delete Workout</button>
    </div>
  );
}

export default Workoutsidebar;
