import React from "react";
import Navbarbutton from "./navbarbutton";

function Navbar() {
  return (
    <div className="sticky top-0 w-[100vw] h-[6vh] bg-[#252525] flex justify-around text-white ">
      <Navbarbutton to="/" name="Home" />
      <Navbarbutton to="/workouts" name="Workouts" />
      <Navbarbutton to="/startworkout" name="Start workout" />
      <Navbarbutton to="/progress" name="Progress" />
    </div>
  );
}

export default Navbar;
