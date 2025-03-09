import React from "react";
import Titleform from "./titleform";
import Descriiptionform from "./descriptionform";
import Exercisesforms from "./exercisesforms";
function Modalform() {
  return (
    <div className="w-full px-8">
      <form className="title-and-description flex gap-4">
        <Titleform />
        <Descriiptionform />
      </form>
      <Exercisesforms />
    </div>
  );
}

export default Modalform;
