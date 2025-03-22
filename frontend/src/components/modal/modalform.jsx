import React from "react";
import Titleform from "./titleform";
import Descriptionform from "./descriptionform";
import Exercises from "./exercises";

function Modalform() {
  return (
    <div className="w-full px-8">
      <form className="w-full flex gap-4 mb-4">
        <Titleform />
        <Descriptionform />
      </form>
      <Exercises />
    </div>
  );
}

export default Modalform;
