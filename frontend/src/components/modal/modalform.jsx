import React from "react";
import Titleform from "./titleform";
import Descriptionform from "./descriptionform";
import Exercises from "./exercises";
import "./styles/modal.css"; // Import the custom CSS

function Modalform() {
  return (
    <div className="modalform w-full max-h-[70vh] px-8 py-6 bg-[#14141a] rounded-lg shadow-lg flex flex-col gap-6 overflow-y-auto">
      <form className="w-full flex flex-col gap-6">
        <Titleform />
        <Descriptionform />
      </form>
      <div className="border-t border-gray-700 pt-6">
        <Exercises />
      </div>
    </div>
  );
}

export default Modalform;
