import React from "react";
import { useNavigate } from "react-router-dom";

function Navbarbutton(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(props.to);
  };

  return (
    <button
      className="navbar-button flex-1 text-white hover:bg-[#1f1f1f] px-3 py-2 rounded"
      onClick={handleClick}
    >
      {props.name}
    </button>
  );
}

export default Navbarbutton;
