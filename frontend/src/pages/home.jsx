import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>HOME</div>
      <Link to="/workouts">
        <button>Workouts</button>
      </Link>
    </>
  );
}

export default Home;
