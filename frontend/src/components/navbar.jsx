import React from "react";
import Navbarbutton from "./navbarbutton";

function Navbar() {
  return (
    <div>
      <Navbarbutton to="/" name="Home" />
      <Navbarbutton to="/workouts" name="Workouts" />
      <Navbarbutton to="/startworkouts" name="Start workout" />
    </div>
  );
}

export default Navbar;
