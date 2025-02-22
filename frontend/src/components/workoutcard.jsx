import React from "react";

function Workoutcard(props) {
  return (
    <div className="workout text-white bg-[#333] p-4 rounded w-[90vw] mb-[2vh] ml-[2vw]">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>{props.id}</p>
    </div>
  );
}

export default Workoutcard;
