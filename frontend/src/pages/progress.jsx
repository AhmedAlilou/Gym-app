import React from "react";
import Navbar from "../components/navbar";
import Previousworkouts from "../components/progress/previousworkouts";

function Progress() {
  return (
    <>
      <Navbar />
      <div className="title">Progress</div>
      <Previousworkouts />
    </>
  );
}

export default Progress;
