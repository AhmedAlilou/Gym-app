import React from "react";
import Titleform from "./titleform";
import Descriiptionform from "./descriptionform";
import Exercisesform from "./exercisesform";
function Modalform() {
  return (
    <div className="w-full px-8">
      <form className="title-and-description flex gap-4">
        <Titleform />
        <Descriiptionform />
      </form>
      <Exercisesform />
    </div>
  );
}

export default Modalform;
