import React from "react";
import { useNavigate } from "react-router-dom";

function Navbarbutton(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(props.to);
  };

  return (
    <button className="navbar-button" onClick={handleClick}>
      {props.name}
    </button>
  );
}

export default Navbarbutton;
